import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardImage } from 'src/app/shared/model/card-image.model';
import { UploadImageComponent } from '../upload-image/upload-image.component';
import { FormUtil } from 'src/app/shared/util/form.util';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';

@Component({
    selector: 'app-input-image',
    templateUrl: './input-image.component.html',
    styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() multiple: boolean = false;

    @ViewChild('upload') private _uploadChild: UploadImageComponent;

    myControlName: { [key: string]: string } = {};
    label: string;
    isUrl: boolean;
    imgPreview: any;


    ngOnInit(): void {
        this._setLabel();
        
        this.myControlName = {
            srcType: `${this.controlName}SrcType`,
            url: `${this.controlName}Url`,
            upload: `${this.controlName}Upload`
        }

        this.form.addControl(this.myControlName.srcType, new FormControl(null, Validators.required));
        this.form.addControl(this.myControlName.url, new FormControl());
        this.form.addControl(this.myControlName.upload, new FormControl());

        this.form.get(this.myControlName.upload).valueChanges.subscribe(value => this._onUpload(value));
    }

    private _setLabel() {
        this.label = 'Como deseja inserir a imagem?';
        if (this.multiple) {
            this.label = 'Como deseja inserir as imagens?';
        }
    }

    ngOnDestroy() {
        Object.keys(this.myControlName).forEach(controlName => this.form.removeControl(controlName));
    }

    onChooseInputType($srcType: ImageSourceTypeEnum) {
        this.isUrl = ($srcType == ImageSourceTypeEnum.URL);
        this.imgPreview = null;
        this.form.get(this.controlName).setValue(null);

        if (this.isUrl) {
            this._setFormControlAsRequired(this.myControlName.url);
            this._setFormControlAsNotRequired(this.myControlName.upload);
        } 
        else {
            this._setFormControlAsRequired(this.myControlName.upload);
            this._setFormControlAsNotRequired(this.myControlName.url);
        }
    }

    private _setFormControlAsRequired(controlName: string) {
        FormUtil.setFormControlAsRequired(this.form.get(controlName));
    }

    private _setFormControlAsNotRequired(controlName: string) {
        FormUtil.setFormControlAsNotRequired(this.form.get(controlName));
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

    deleteFile() {
        ([
            this.controlName,
            this.myControlName.url,
            this.myControlName.upload
        ]).forEach(controlName => this.form.get(controlName).setValue(null));
        
        this.imgPreview = null;
        this._uploadChild?.reset();
    }

}
