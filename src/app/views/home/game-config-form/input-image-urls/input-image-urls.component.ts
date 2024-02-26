import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PairConfig } from '../pair-config.model';

@Component({
    selector: 'app-input-image-urls',
    templateUrl: './input-image-urls.component.html',
    styleUrls: ['./input-image-urls.component.scss']
})
export class InputImageUrlsComponent implements OnInit, OnChanges {

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() pairConfig: PairConfig;

    indices: number[];
    urls: string[] = [];

    private _formArray: FormArray;

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this._init();
    }

    ngOnDestroy() {
        this.form.removeControl('cardUrls');
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.pairConfig && !changes.pairConfig.firstChange) {
            this._init();
        }
    }

    private _init() {
        this._initFormArray();
        this._setIndicesAndFillFormArray();
    }

    private _initFormArray() {
        let formArrParent = this.fb.group({
            urls: this.fb.array([])
        });

        this.form.addControl('cardUrls', formArrParent);
        this._formArray = formArrParent.controls['urls'] as FormArray;
    }

    private _setIndicesAndFillFormArray() {
        let indices = [...Array(this.pairConfig.numPairs).keys()];
        indices.forEach(i => {
            this.urls.push(null);
            this._formArray.push(this._buildSubFormArray());
        });

        this.indices = indices;
    }

    private _buildSubFormArray() {
        let subForm = this.fb.group({
            url: new FormControl(null, Validators.required)
        });

        if (!this.pairConfig.singleImgPerPair) {
            subForm.addControl('url2', new FormControl(null, Validators.required))
        }

        return subForm;
    }


    getSubForm(index: number) {
        return this._formArray?.controls[index];
    }

    onInsertUrl($url: string, index: number) {
        this.urls[index] = $url;
        this._updateFormControl();
    }

    deleteUrl(index: number) {
        this.getSubForm(index).reset();
        this.urls[index] = null;
        this._updateFormControl();
    }

    private _updateFormControl() {
        let urls = this.urls.filter(url => !!url);
        if (urls.length !== this.pairConfig.numPairs) {
            urls = null;
        }

        this.form.get(this.controlName).setValue(urls);
    }

}
