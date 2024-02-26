import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PairConfig } from '../pair-config.model';

@Component({
    selector: 'app-input-image-urls',
    templateUrl: './input-image-urls.component.html',
    styleUrls: ['./input-image-urls.component.scss']
})
export class InputImageUrlsComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() pairConfig: PairConfig;

    indices: number[];
    urls: string[] = [];

    private _formArray: FormArray;

    constructor(private fb: FormBuilder) {}


    ngOnInit(): void {
        let miniForm = this.fb.group({
            urls: this.fb.array([])
        });

        this.form.addControl('cardUrls', miniForm);
        this._formArray = miniForm.controls['urls'] as FormArray;
        this._setIndices();
    }

    ngOnDestroy() {
        this.form.removeControl('cardUrls');
    }

    private _setIndices() {
        let indices = [...Array(this.pairConfig.numPairs).keys()];
        indices.forEach(i => {
            this.urls.push(null);
            this._formArray.push(this.fb.group({
                url: new FormControl(null, Validators.required)
            }));
        });

        this.indices = indices;
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
