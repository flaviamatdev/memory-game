import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';
import { GameConfigFormComponent } from '../../game-builder-form.component';
import { ImageFilenameExampleDialogComponent } from '../card-image-filename-example-dialog/card-image-filename-example-dialog.component';
import { UrlPairConfig } from '../url-pair-config.model';

@Component({
    selector: 'app-card-images-form',
    templateUrl: './card-images-form.component.html',
    styleUrls: ['./card-images-form.component.scss']
})
export class CardImagesFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;
    readonly FILENAME_SEP = VALUES.upload.fileNameSeparator;
    readonly MIN_NUM_PAIRS = 2;

    @Input() parent: GameConfigFormComponent;

    form: FormGroup;
    urlPairConfig: UrlPairConfig;
    addUrls: boolean;
    showFilePatternWarning: boolean = false;

    constructor(
        private dialogService: DialogService,
    ) {}

    ngOnInit(): void {
        this.form = this.parent.form;
    }

    onChangeCardImageSrcType($value: ImageSourceTypeEnum) {
        this.addUrls = ($value === ImageSourceTypeEnum.URL);
        if (this.addUrls) {
            this.form.addControl('numPairs', new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
        } else {
            this.form.removeControl('numPairs');
        }

        this._handleInputChange();
    }

    onChangeSingleImgPerPair() {
        this._handleInputChange();
    }

    onChangeNumPairsForUrl($numPairs: number) {
        if ($numPairs < this.MIN_NUM_PAIRS) {
            return;
        }
        this._handleInputChange();
    }

    private _handleInputChange() {
        let singleImgPerPair = this.form.get('singleImgPerPair').value as boolean;
        let cardImageSrcType = this.form.get('cardImageSrcType').value as ImageSourceTypeEnum;
        let numPairs = this.form.get('numPairs')?.value as number;

        let isUpload = (cardImageSrcType === ImageSourceTypeEnum.UPLOAD);
        this.showFilePatternWarning = (isUpload && singleImgPerPair === false);

        if (isUpload || numPairs < this.MIN_NUM_PAIRS) {
            this.urlPairConfig = null;
            return;
        }

        let missingValue = ([ singleImgPerPair, cardImageSrcType, numPairs ]).some(value => value == null);
        if (missingValue) {
            this.urlPairConfig = null;
            return;
        }

        this.urlPairConfig = new UrlPairConfig(numPairs, singleImgPerPair);
    }

    openExample() {
        this.dialogService.openCustomDialog(ImageFilenameExampleDialogComponent, 80);
    }

}
