import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';
import { UrlPairConfig } from '../url-pair-config.model';

@Component({
    selector: 'app-card-urls',
    templateUrl: './card-urls.component.html',
    styleUrls: ['./card-urls.component.scss']
})
export class CardUrlsInputComponent implements OnInit, OnChanges  {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.input.cards;
    private readonly _CARD_URLS_INPUT = 'cardUrls';

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() urlPairConfig: UrlPairConfig;

    indices: number[];

    private _formArray: FormArray;
    private _numCardImages: number;
    private _cardImageMap: { [key: string]: FileUpload } = {};

    constructor(
        private fb: FormBuilder,
    ) {
        // define hear to avoid ExpressionChangedAfterItHasBeenCheckedError
        this.indices = [...Array(2).keys()];
        this._formArray = fb.array([]);
    }
    

    ngOnInit(): void {
        setTimeout(() => {
            this.indices = [...Array(this.urlPairConfig.numPairs).keys()];
            this._cardImageMap = {};
            this._numCardImages = this.urlPairConfig.numCards;
            this.form.addControl(this._CARD_URLS_INPUT, this._formArray);
        }, 1);
    }

    ngOnDestroy() {
        this.form.removeControl(this._CARD_URLS_INPUT);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.urlPairConfig && !changes.urlPairConfig.firstChange) {
            this.ngOnInit();
        }
    }

    addSubForm(subForm: FormGroup) {
        this._formArray.push(subForm);
    }

    getSubForm(index: number) {
        return this._formArray?.controls[index] as FormGroup;
    }

    getUrl(pairIndex: number, imageIndex: number = 0): string {
        try {
            return this._cardImageMap[this._buildCardImageKey(pairIndex, imageIndex)]?.src;
        } catch (error) {
            return null;
        }
    }

    private _buildCardImageKey(pairIndex: number, imageIndex: number): string {
        return `${pairIndex}${imageIndex}`;
    }

    onInsertUrl($url: string, pairIndex: number, imageIndex: number = 0) {
        let key = this._buildCardImageKey(pairIndex, imageIndex);
        this._cardImageMap[key] = new FileUpload($url, `pair${pairIndex+1}_image${imageIndex+1}`);
        this._updateFormControl();
    }

    deleteUrl(pairIndex: number, imageIndex: number = 0) {
        let sumControlName = 'url';
        if (imageIndex == 1) {
            sumControlName = 'url2';
        }
        this.getSubForm(pairIndex).get(sumControlName).reset();

        let cardImageKey = this._buildCardImageKey(pairIndex, imageIndex);
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
