import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { GameService } from 'src/app/services/game.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { FileUploadTypeEnum } from 'src/app/shared/enums/file-upload-type.enum';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';

import { ITranslation } from 'src/app/shared/components/translation/translation.model';
import { FormUtil } from 'src/app/shared/util/form.util';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';
import { GAME_BUILDER_FORM_INPUT } from '../../game-build-form-input.values';
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

    readonly UploadFileType = FileUploadTypeEnum;
    readonly FORM_INPUT = GAME_BUILDER_FORM_INPUT.card;
    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.input;
    readonly FILENAME_SEP = VALUES.upload.fileNameSeparator;
    readonly MIN_NUM_PAIRS = 2;

    @Input() parent: GameBuilderFormComponent;

    form: FormGroup;
    stateUrlInputs = STATE.hide;
    urlPairConfig: UrlPairConfig;
    flag: { [key: string]: boolean };
    invalidUploadMsg: ITranslation;

    constructor(
        private feedbackService: FeedbackService,
        private gameService: GameService
    ) {}

    ngOnInit(): void {
        this.form = this.parent.form;
        this._initFlags();
    }

    private _initFlags() {
        this.flag = {
            addUrls: null,
            showFilePatternWarning: false,
            showAudioUpload: false,
        }
    }

    onChangeCardSrcType($value: ImageSourceTypeEnum) {
        this.flag.addUrls = ($value === ImageSourceTypeEnum.URL);

        const numPairsInput = this.FORM_INPUT.numPairs;
        const cardUploadInput = this.FORM_INPUT.upload;

        if (this.flag.addUrls) {
            this.form.addControl(numPairsInput, new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
            this.form.removeControl(cardUploadInput.images);
            this.form.removeControl(cardUploadInput.audios);
        } else {
            this.form.removeControl(numPairsInput);
            this.form.addControl(cardUploadInput.images, new FormControl(null, Validators.required));
            this.form.addControl(cardUploadInput.audios, new FormControl(null, Validators.required));
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
        let data = this.form.value;
        let singleCardPerPair =      data[this.FORM_INPUT.singleCardPerPair] as boolean;
        let addCustomAudioPerPair =  data[this.FORM_INPUT.addCustomSoundsPerCard] as boolean;
        let cardSrcType =            data[this.FORM_INPUT.cardSrcType] as ImageSourceTypeEnum;
        let numPairs =               data[this.FORM_INPUT.numPairs] as number;

        let isUpload = (cardSrcType === ImageSourceTypeEnum.UPLOAD);
        this.flag.showFilePatternWarning = (isUpload && singleCardPerPair === false);

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
        this.feedbackService.dialog.openCustomDialog(ImageFilenameExampleDialogComponent, 80);
    }

    receiveUploads(siblingControlName: string) {
        let siblingFileUploadLen = (this.form.get(siblingControlName)?.value ?? []).length;
        if (!siblingFileUploadLen) {
            return;
        }

        const cardUploadInput = this.FORM_INPUT.upload;
        let imageControl = this.form.get(cardUploadInput.images);
        let audioControl = this.form.get(cardUploadInput.audios);

        try {
            this.gameService.validateCardUploads(imageControl.value, audioControl.value);
            this.invalidUploadMsg = null;
            FormUtil.setFormControlAsValid(imageControl, false);
            FormUtil.setFormControlAsValid(audioControl, false);
        } 
        catch (error) {
            this.invalidUploadMsg = this.feedbackService.handleError(error);
            FormUtil.setFormControlAsInvalid(imageControl);
            FormUtil.setFormControlAsInvalid(audioControl);
        }
    }

}
