import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from 'src/app/services/feedback.service';
import { GameService } from 'src/app/services/game.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { FileUploadTypeEnum } from 'src/app/shared/enums/file-upload-type.enum';
import { MediaSourceTypeEnum } from 'src/app/shared/enums/media-src-type.enum';
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

    changeAddCustomAudios($addCustomAudios: boolean) {
        this.flag.showAudioUpload = (this.flag.isUpload && $addCustomAudios);
        if (this.flag.showAudioUpload) {
            this._addUploadAudioControl();
        } else if (this.flag.isUpload) {
            this.form.removeControl(this.FORM_INPUT.upload.audios);
        }

        this.receivePairConfigChange();
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
    

    onChangeCardSrcType($value: MediaSourceTypeEnum) {
        this.flag.isUpload = ($value === MediaSourceTypeEnum.UPLOAD);
        this.flag.showAudioUpload = (this.flag.isUpload && this._addCustomSoundsPerCard);

        if (this.flag.isUpload) {
            this.form.addControl(this.FORM_INPUT.upload.images, new FormControl(null, Validators.required));
            if (this.flag.showAudioUpload) {
                this._addUploadAudioControl();
            }           
            this.form.removeControl(this.FORM_INPUT.numPairs);
            this._removeUrlInputs();
        } else {
            this.form.removeControl(this.FORM_INPUT.upload.images);
            this.form.removeControl(this.FORM_INPUT.upload.audios);
            this.form.addControl(this.FORM_INPUT.numPairs, new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
        }
    }

    private _addUploadAudioControl() {
        this.form.addControl(this.FORM_INPUT.upload.audios, new FormControl(null, Validators.required));
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
