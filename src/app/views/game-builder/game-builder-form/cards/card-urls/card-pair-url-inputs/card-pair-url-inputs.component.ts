import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GAME_BUILDER_TRANSLATION } from '../../../../game-builder-values';
import { CardUrlsInputComponent } from '../card-urls.component';
import { UrlPairConfig } from '../../url-pair-config.model';

@Component({
    selector: 'app-card-pair-url-inputs',
    templateUrl: './card-pair-url-inputs.component.html',
    styleUrls: []
})
export class CardPairUrlInputsComponent implements OnInit, OnChanges {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.input.cards;

    @Input() parent: CardUrlsInputComponent;
    @Input() index: number;
    @Input() urlPairConfig: UrlPairConfig;

    form: FormGroup;
    pairOrdinal: number;

    constructor(private fb: FormBuilder) { }
    

    ngOnInit(): void {
        this.pairOrdinal = this.index + 1;
        this._initForm();
    }

    private _initForm() {
        this.form = this.fb.group({
            image: new FormControl(null, Validators.required),
        });

        this._resetControls();
        this.parent.addSubForm(this.form);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.urlPairConfig && !changes.urlPairConfig.firstChange) {
            this._resetControls();
        }
    }

    private _resetControls() {
        if (this.urlPairConfig.addCustomAudioPerPair) {
            this._addAudioControl();
        } else {
            this.form.removeControl('audio');
        }

        if (this.urlPairConfig.singleCardPerPair) {
            this.form.removeControl('image2');
            this.form.removeControl('audio2');
        } else {
            this.form.addControl('image2', new FormControl(null, Validators.required));
            if (this.urlPairConfig.addCustomAudioPerPair) {
                this.form.addControl('audio2', new FormControl(null, Validators.required));
            }
        }
    }

    private _addAudioControl() {
        this.form.addControl('audio', new FormControl(null, Validators.required));
    }

    get firstPairImageLabelTranslation() {
        return this.urlPairConfig?.singleCardPerPair ? 
            this.TRANSLATION.url.image.pairLink :
            this.TRANSLATION.url.image.getPairLink(1)
    }

    get firstPairAudioLabelTranslation() {
        return this.urlPairConfig?.singleCardPerPair ? 
            this.TRANSLATION.url.audio.pairLink :
            this.TRANSLATION.url.audio.getPairLink(1)
    }

    onInsertUrl($url: string) {
        this.parent.onInsertUrl($url, this.index);
    }

    deleteImgUrl() {
        this.parent.deleteUrl(this.index);
    }

}
