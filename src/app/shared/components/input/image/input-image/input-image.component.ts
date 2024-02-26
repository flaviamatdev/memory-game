import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardImage } from 'src/app/shared/model/card-image.model';

@Component({
    selector: 'app-input-image',
    templateUrl: './input-image.component.html',
    styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() controlName: string;

    urlControlName: string;
    uploadControlName: string;
    isUrl: boolean;
    imgPreview: any;


    ngOnInit(): void {
        this.urlControlName = `${this.controlName}Url`;
        this.uploadControlName = `${this.controlName}Upload`;

        this.form.addControl(this.urlControlName, new FormControl());
        this.form.addControl(this.uploadControlName, new FormControl());

        this.form.get(this.uploadControlName).valueChanges.subscribe(value => this._onUpload(value));
    }

    onChooseInputType(isUrl: boolean) {
        this.isUrl = isUrl;
        this.imgPreview = null;
        this.form.get(this.controlName).setValue(null);

        if (isUrl) {
            this._setFormControlAsRequired(this.urlControlName);
            this._setFormControlAsNotRequired(this.uploadControlName);
        } 
        else {
            this._setFormControlAsRequired(this.uploadControlName);
            this._setFormControlAsNotRequired(this.urlControlName);
        }
    }

    private _setFormControlAsRequired(controlName: string) {
        let control = this.form.get(controlName);
        control.reset();
        control.setValidators(Validators.required);
        control.updateValueAndValidity();
    }

    private _setFormControlAsNotRequired(controlName: string) {
        let control = this.form.get(controlName);
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity();
    }


    onInsertUrl($url: string) {
        let value = $url;
        if (!$url) {
            value = null;
        }

        this.imgPreview = value;
        this.form.get(this.controlName).setValue(value);
    }

    private _onUpload(cardImages: CardImage[]) {
        if ( !(cardImages?.length) ) {
            this.imgPreview = null;
            return;
        }

        this.imgPreview = cardImages[0].base64;
    }

}
