import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { GameConfigFormComponent } from '../../game-config-form.component';
import { PairConfig } from '../../pair-config.model';
import { DialogService } from 'src/app/services/dialog.service';
import { ImageFilenameExampleDialogComponent } from '../card-image-filename-example-dialog/card-image-filename-example-dialog.component';

@Component({
    selector: 'app-card-images-form',
    templateUrl: './card-images-form.component.html',
    styleUrls: ['./card-images-form.component.scss']
})
export class CardImagesFormComponent implements OnInit {

    readonly FILENAME_SEP = VALUES.upload.fileNameSeparator;
    readonly IMAGE_SRC_TYPE = ImageSourceTypeEnum;
    readonly MIN_NUM_PAIRS = 2;

    @Input() parent: GameConfigFormComponent;

    form: FormGroup;
    pairConfig: PairConfig;
    showFilePatternWarning: boolean = false;

    constructor(
        private gameService: GameService,
        private dialogService: DialogService,
    ) {}

    ngOnInit(): void {
        this.form = this.parent.form;
    }

    get cardImageSrcType(): ImageSourceTypeEnum {
        return this.form?.get('cardImageSrcType')?.value || null;
    }

    get showCardImageUrlInputs(): boolean {
        return this.cardImageSrcType === ImageSourceTypeEnum.URL && !!this.pairConfig;
    }

    private get _singleImgPerPair() {
        return this.form.get('singleImgPerPair').value as boolean;
    }


    onChangeSingleImgPerPair() {
        this._setPairConfig(this.form.get('numPairs')?.value);
    }

    onChangeCardImageSrcType($value: ImageSourceTypeEnum) {
        if ($value === ImageSourceTypeEnum.URL) {
            this.form.addControl('numPairs', new FormControl(null, [Validators.required, Validators.min(this.MIN_NUM_PAIRS)]));
        } else {
            this.form.removeControl('numPairs');
        }

        this._setPairConfig(0);
    }

    onInsertNumImages($value: number) {
        if ($value < this.MIN_NUM_PAIRS) {
            this.pairConfig = null;
            return;
        }

        this._setPairConfig($value);
    }

    private _setPairConfig(numPairs: number) {
        this.showFilePatternWarning = (this._singleImgPerPair === false && 
            this.cardImageSrcType === ImageSourceTypeEnum.UPLOAD
        );

        if (!this.cardImageSrcType || !numPairs) {
            this.pairConfig = null;
            return;
        }

        this.pairConfig = new PairConfig(numPairs, this._singleImgPerPair);
    }
    

    get warningMsgForDiffImagesPerPair() {
        return this.gameService.warningMsgForDiffImagesPerPair;
    }

    openExample() {
        this.dialogService.openCustomDialog(ImageFilenameExampleDialogComponent, 80);
    }

}
