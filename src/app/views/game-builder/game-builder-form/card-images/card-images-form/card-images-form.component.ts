import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';
import { GameBuilderFormComponent } from '../../game-builder-form.component';
import { ImageFilenameExampleDialogComponent } from '../card-image-filename-example-dialog/card-image-filename-example-dialog.component';
import { UrlPairConfig } from '../url-pair-config.model';

const ANIMATION_TIMEOUT = 500;
const STATE = {
    show: 'show',
    hide: 'hide'
};

@Component({
    selector: 'app-card-images-form',
    templateUrl: './card-images-form.component.html',
    styleUrls: ['./card-images-form.component.scss'],
    animations: [
        trigger('showContent', [
            state(STATE.show, style({
                overflow: 'hidden',
                height: '*'
            })),
            state(STATE.hide, style({
                overflow: 'hidden',
                height: '0px',
                opacity: '0'
            })),
            transition('*=>*', animate(`${ANIMATION_TIMEOUT}ms ease-in-out`))
        ])
    ]
})
export class CardImagesFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;
    readonly FILENAME_SEP = VALUES.upload.fileNameSeparator;
    readonly MIN_NUM_PAIRS = 2;

    @Input() parent: GameBuilderFormComponent;

    form: FormGroup;
    input: any;
    stateUrlInputs = STATE.hide;
    urlPairConfig: UrlPairConfig;
    addUrls: boolean;
    showFilePatternWarning: boolean = false;

    constructor(
        private dialogService: DialogService,
    ) {}

    ngOnInit(): void {
        this.form = this.parent.form;
        this.input = this.parent.FORM_INPUT.card;
    }

    onChangeCardImageSrcType($value: ImageSourceTypeEnum) {
        this.addUrls = ($value === ImageSourceTypeEnum.URL);
        const numPairsInput = this.parent.FORM_INPUT.card.numPairs;

        if (this.addUrls) {
            this.form.addControl(numPairsInput, new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
        } else {
            this.form.removeControl(numPairsInput);
        }

        this._handleInputChange();
    }

    onChangeSingleImgPerPair() {
        this._handleInputChange();
    }

    onChangeAddCustomSoundPerPair() {
        this._handleInputChange();
    }

    onChangeNumPairsForUrl($numPairs: number) {
        if ($numPairs < this.MIN_NUM_PAIRS) {
            return;
        }
        this._handleInputChange();
    }

    private _handleInputChange() {
        const INPUT = this.parent.FORM_INPUT.card;
        let data = this.form.value;
        let singleCardPerPair =      data[INPUT.singleCardPerPair] as boolean;
        let addCustomAudioPerPair =  data[INPUT.addCustomSoundsPerCard] as boolean;
        let cardSrcType =            data[INPUT.cardSrcType] as ImageSourceTypeEnum;
        let numPairs =               data[INPUT.numPairs] as number;

        let isUpload = (cardSrcType === ImageSourceTypeEnum.UPLOAD);
        this.showFilePatternWarning = (isUpload && singleCardPerPair === false);

        if (isUpload || numPairs < this.MIN_NUM_PAIRS) {
            this._removeUrlInputs();
            return;
        }

        let missingValue = ([ singleCardPerPair, addCustomAudioPerPair, cardSrcType, numPairs ]).some(value => value == null);
        if (missingValue) {
            this._removeUrlInputs();
            return;
        }

        this.urlPairConfig = new UrlPairConfig(numPairs, singleCardPerPair, addCustomAudioPerPair);
        this.stateUrlInputs = STATE.show;
    }

    private _removeUrlInputs() {
        this.stateUrlInputs = STATE.hide;
        setTimeout(() => {
            this.urlPairConfig = null;
        }, ANIMATION_TIMEOUT);        
    }

    openExample() {
        this.dialogService.openCustomDialog(ImageFilenameExampleDialogComponent, 80);
    }

}
