import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';
import { UrlPairConfig } from '../url-pair-config.model';

@Component({
    selector: 'app-card-images-url-input',
    templateUrl: './card-images-url-input.component.html',
    styleUrls: ['./card-images-url-input.component.scss']
})
export class CardImagesUrlInputComponent implements OnInit, OnChanges {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.input.cards;
    private readonly _CARD_URLS_INPUT = 'cardUrls';

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() urlPairConfig: UrlPairConfig;

    indices: number[];

    private _formArray: FormArray;
    private _numCardImages: number;
    private _cardImageMap: { [key: string]: FileUpload } = {};

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this._init();
    }

    ngOnDestroy() {
        this.form.removeControl(this._CARD_URLS_INPUT);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.urlPairConfig && !changes.urlPairConfig.firstChange) {
            this.indices = undefined;
            this._init();
        }
    }

    private _init() {
        this._cardImageMap = {};
        this._numCardImages = this.urlPairConfig.numCards;
        this._initFormArray();
        this.indices = [...Array(this.urlPairConfig.numPairs).keys()];
    }

    private _initFormArray() {
        this._formArray = this.fb.array([]);
        this.form.addControl(this._CARD_URLS_INPUT, this._formArray);
    }

    addSubForm(subForm: FormGroup) {
        this._formArray.push(subForm);
    }

    getSubForm(index: number) {
        return this._formArray?.controls[index] as FormGroup;
    }

    getUrl(pairIndex: number, imgIndex: number = 0): string {
        try {
            return this._cardImageMap[this._buildCardImageKey(pairIndex, imgIndex)]?.src;
        } catch (error) {
            return null;
        }
    }

    private _buildCardImageKey(pairIndex: number, imgIndex: number): string {
        return `${pairIndex}${imgIndex}`;
    }

    onInsertUrl($url: string, pairIndex: number, imgIndex: number = 0) {
        let key = this._buildCardImageKey(pairIndex, imgIndex);
        this._cardImageMap[key] = new FileUpload($url,  `pair${pairIndex+1}_img${imgIndex+1}`);
        this._updateFormControl();
    }

    deleteUrl(pairIndex: number, imgIndex: number = 0) {
        let sumControlName = 'url';
        if (imgIndex == 1) {
            sumControlName = 'url2';
        }
        this.getSubForm(pairIndex).get(sumControlName).reset();

        let cardImageKey = this._buildCardImageKey(pairIndex, imgIndex);
        delete this._cardImageMap[cardImageKey];

        this._updateFormControl();
    }

    private _updateFormControl() {
        let cardImages = Object.values(this._cardImageMap);
        if (cardImages.length === this._numCardImages) {
            this.form.get(this.controlName).setValue(cardImages);
            return;
        }

        this.form.get(this.controlName).setValue(null);
    }

}
