import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { GameService } from 'src/app/services/game.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { FileUploadTypeEnum } from 'src/app/shared/enums/file-upload-type.enum';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { ITranslation } from 'src/app/shared/model/translation.model';
import { FormUtil } from 'src/app/shared/util/form.util';
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

    readonly UploadFileType = FileUploadTypeEnum;
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
    invalidUploadMsg: ITranslation;

    constructor(
        private feedbackService: FeedbackService,
        private gameService: GameService
    ) {}

    ngOnInit(): void {
        this.form = this.parent.form;
        this.input = this.parent.FORM_INPUT.card;
    }

    onChangeCardSrcType($value: ImageSourceTypeEnum) {
        this.addUrls = ($value === ImageSourceTypeEnum.URL);

        const numPairsInput = this.input.numPairs;
        const cardUploadInput = this.input.upload;

        if (this.addUrls) {
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
        const INPUT = this.input;
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
        this.feedbackService.dialog.openCustomDialog(ImageFilenameExampleDialogComponent, 80);
    }

    receiveUploads(siblingControlName: string) {
        let siblingFileUploadLen = (this.form.get(siblingControlName)?.value ?? []).length;
        if (!siblingFileUploadLen) {
            return;
        }

        const cardUploadInput = this.input.upload;
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
