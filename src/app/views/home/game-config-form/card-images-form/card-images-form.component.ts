import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { PairConfig } from '../pair-config.model';
import { GameConfigFormComponent } from '../game-config-form.component';

@Component({
    selector: 'app-card-images-form',
    templateUrl: './card-images-form.component.html',
    styleUrls: ['./card-images-form.component.scss']
})
export class CardImagesFormComponent implements OnInit {

    readonly IMAGE_SRC_TYPE = ImageSourceTypeEnum;
    readonly MIN_NUM_PAIRS = 2;

    @Input() parent: GameConfigFormComponent;

    form: FormGroup;
    pairConfig: PairConfig;

    ngOnInit(): void {
        this.form = this.parent.form;
    }

    get cardImageSrcType(): ImageSourceTypeEnum {
        return this.form?.get('cardImageSrcType')?.value || null;
    }

    get showCardImageUrlInputs(): boolean {
        return this.cardImageSrcType === ImageSourceTypeEnum.URL && !!this.pairConfig;
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
        if (!this.cardImageSrcType || !numPairs) {
            this.pairConfig = null;
            return;
        }

        this.pairConfig = {
            numPairs: numPairs,
            singleImgPerPair: this.form.get('singleImgPerPair').value as boolean,
        };
    }

}
