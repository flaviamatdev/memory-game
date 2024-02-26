import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-input-image-url-multiple',
    templateUrl: './input-image-url-multiple.component.html',
    styleUrls: ['./input-image-url-multiple.component.scss']
})
export class InputImageUrlMultipleComponent implements OnInit {

    readonly MIN_IMAGES = 4;

    @Input() form: FormGroup;
    @Input() controlName: string;

    miniForm: FormGroup;
    indices: number[];
    urls: string[] = [];

    constructor(private fb: FormBuilder) {}


    ngOnInit(): void {
        this.miniForm = this.fb.group({
            numImages: new FormControl(null, [Validators.required, Validators.min(this.MIN_IMAGES)]),
            urls: this.fb.array([])
        });
    }

    onInsertNumImages($value: number) {
        if ($value < this.MIN_IMAGES) {
            return;
        }

        let indices = [...Array($value).keys()];
        indices.forEach(i => {
            this.urls.push(null);
            this._subForms.push(this.fb.group({
                url: new FormControl(null, Validators.required)
            }));
        });

        this.indices = indices;
    }

    private get _subForms() {
        return this.miniForm.controls['urls'] as FormArray;
    }

    getSubForm(index: number) {
        return this._subForms?.controls[index];
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
        let value = this.urls.filter(url => !!url);
        if (this.urls.length == 0) {
            value = null;
        }
        this.form.get(this.controlName).setValue(value);
    }

}
