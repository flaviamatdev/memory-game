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
import { CardImageFilenameExampleDialogComponent } from '../card-image-filename-example-dialog/card-image-filename-example-dialog.component';
import { UrlPairConfig } from '../url-pair-config.model';

const ANIMATION_TIMEOUT = 500;
const STATE = {
    show: 'show',
    hide: 'hide'
};

@Component({
    selector: 'app-card-form',
    templateUrl: './card-form.component.html',
    styleUrls: ['./card-form.component.scss'],
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
export class CardFormComponent implements OnInit {

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
            isUpload: null,
            showFilePatternWarning: false,
            showAudioUpload: false,
        }
    }

    private get _addCustomSoundsPerCard() {
        return this.form.get(this.FORM_INPUT.addCustomSoundsPerCard).value as boolean;
    }

    private get _singleCardPerPair() {
        return this.form.get(this.FORM_INPUT.singleCardPerPair).value as boolean;
    }

    get showFilePatternWarning(): boolean {
        try {
            return this.flag.isUpload && this._singleCardPerPair === false;
        } catch (error) {
            return false;
        }
    }

    onChangeNumPairsForUrl($numPairs: number) {
        if ($numPairs < this.MIN_NUM_PAIRS) {
            return;
        }
        this.receivePairConfigChange();
    }

    receivePairConfigChange(numPairs?: number) {
        let singleCardPerPair = this._singleCardPerPair;
        let addCustomAudioPerPair = this._addCustomSoundsPerCard;
        numPairs = numPairs ?? (this.form.get(this.FORM_INPUT.numPairs)?.value as number);

        if (this.flag.isUpload || ([ singleCardPerPair, addCustomAudioPerPair, numPairs ]).some(value => value == null)) {
            this._removeUrlInputs();
            return;
        }

        this.urlPairConfig = new UrlPairConfig(singleCardPerPair, addCustomAudioPerPair, numPairs);
        this.stateUrlInputs = STATE.show;
    }

    private _removeUrlInputs() {
        this.stateUrlInputs = STATE.hide;
        setTimeout(() => {
            this.urlPairConfig = null;
        }, ANIMATION_TIMEOUT);
    }
    

    onChangeCardSrcType($value: ImageSourceTypeEnum) {
        this.flag.isUpload = ($value === ImageSourceTypeEnum.UPLOAD);
        this.flag.showAudioUpload = (this.flag.isUpload && this._addCustomSoundsPerCard);

        const numPairsInput = this.FORM_INPUT.numPairs;
        const cardUploadInput = this.FORM_INPUT.upload;

        if (this.flag.isUpload) {
            this.form.addControl(cardUploadInput.images, new FormControl(null, Validators.required));
            this.form.addControl(cardUploadInput.audios, new FormControl(null, Validators.required));
            this.form.removeControl(numPairsInput);
            this._removeUrlInputs();
        } else {
            this.form.removeControl(cardUploadInput.images);
            this.form.removeControl(cardUploadInput.audios);
            this.form.addControl(numPairsInput, new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
        }
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

    openExample() {
        this.feedbackService.dialog.openCustomDialog(CardImageFilenameExampleDialogComponent, 80);
    }

}
