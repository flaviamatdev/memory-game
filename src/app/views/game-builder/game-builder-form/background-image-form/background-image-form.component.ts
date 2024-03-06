import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UploadImageComponent } from 'src/app/shared/components/input/image/upload-image/upload-image.component';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { CardImage } from 'src/app/shared/model/card-image.model';
import { FormUtil } from 'src/app/shared/util/form.util';
import { GAME_BUILDER_TRANSLATION } from '../../game-builder-values';

@Component({
    selector: 'app-background-image-form',
    templateUrl: './background-image-form.component.html',
    styleUrls: ['./background-image-form.component.scss']
})
export class BackgroundImageFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.input.backgroundImg;

    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() multiple: boolean = false;

    @ViewChild('upload') private _uploadChild: UploadImageComponent;

    myControlName: { [key: string]: string } = {};
    isUrl: boolean;
    imgPreview: any;


    ngOnInit(): void {
        this.myControlName = {
            srcType: `${this.controlName}SrcType`,
            url:     `${this.controlName}Url`,
            upload:  `${this.controlName}Upload`
        }

        this.form.addControl(this.myControlName.srcType, new FormControl(null, Validators.required));
        this.form.addControl(this.myControlName.url, new FormControl());
        this.form.addControl(this.myControlName.upload, new FormControl());

        this.form.get(this.myControlName.upload).valueChanges.subscribe(value => this._onUpload(value));
    }

    ngOnDestroy() {
        Object.values(this.myControlName).forEach(controlName => this.form.removeControl(controlName));
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


    private _onUpload(cardImages: CardImage[]) {
        if ( !(cardImages?.length) ) {
            this._setImage(null);
            return;
        }
        this._setImage(cardImages[0].base64);
    }

    onInsertUrl($url: string) {
        let value = $url;
        if (!$url) {
            value = null;
        }
        this._setImage(value);
    }

    private _setImage(src: string) {
        this.imgPreview = src;
        this.form.get(this.controlName).setValue(src);
    }


    deleteFile() {
        ([
            this.myControlName.url,
            this.myControlName.upload
        ])
        .forEach(controlName => this.form.get(controlName).setValue(null));
        
        this._setImage(null);
        this._uploadChild?.reset();
    }

}
