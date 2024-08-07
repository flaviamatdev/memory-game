import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { CardIdTypeEnum } from 'src/app/shared/enums/card-id-type.enum';
import { MediaSourceTypeEnum } from 'src/app/shared/enums/media-src-type.enum';
import { Card } from 'src/app/shared/model/card';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { AbstractGameBuilderFormComponent } from '../abstract-game-builder-form/abstract-game-builder-form.component';

@Component({
    selector: 'app-game-builder-form',
    templateUrl: './game-builder-form.component.html',
    styleUrls: ['./game-builder-form.component.scss']
})
export class GameBuilderFormComponent extends AbstractGameBuilderFormComponent implements OnInit {

    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    flag: any = {};

    constructor(
        protected gameService: GameService,
        protected toastService: ToastService,
        private fb: FormBuilder,
    ) {
        super(gameService, toastService);
    }

    // override
    protected _initForm() {
        this.form = this.fb.group({
            title: new FormControl('Memory Game', Validators.required),
            [this.FORM_INPUT.cardIdType]: new FormControl(CardIdTypeEnum.NUMBERS, Validators.required),

            [this.FORM_INPUT.addBackgroundImg]: new FormControl(false, Validators.required),
            [this.FORM_INPUT.backgroundImgSrc]: new FormControl(null),

            [this.FORM_INPUT.card.singleCardPerPair]: new FormControl(null, Validators.required),
            [this.FORM_INPUT.card.addCustomSoundsPerCard]: new FormControl(null, Validators.required),
            [this.FORM_INPUT.card.cardSrcType]: new FormControl(null, Validators.required),
        });
    }

    onChangeAddBackgroundImg($value: boolean) {
        this.flag.addBackgroundImg = $value;
        this.form.get(this.FORM_INPUT.backgroundImgSrc).setValue(null);
    }

    download() {
        if (this._isInvalidForm) {
            return this.toastService.showInvalidFormError();
        }
        this.gameService.downloadGameConfig( this._buildGameConfig() );
    }

    // override
    protected _buildGameConfig() {
        let data = {...this.form.value };
        let gameConfig = new GameConfig();
        gameConfig.title = data.title.toUpperCase();
        gameConfig.singleCardPerPair = data.singleCardPerPair;
        gameConfig.addCustomSoundsPerCard = data.addCustomSoundsPerCard;
        gameConfig.cardIdType = data.cardIdType;
        gameConfig.backgroundImgSrc = data.backgroundImgSrc;

        let srcType = data[this.FORM_INPUT.card.cardSrcType] as MediaSourceTypeEnum;
        gameConfig.cards = (srcType == MediaSourceTypeEnum.UPLOAD ?
            this._getCardsFromUploads(data) :
            this._getCardsFromUrls(data)
        );

        return gameConfig;
    }

    private _getCardsFromUploads(formValue: any) {
        let images = formValue[this.FORM_INPUT.card.upload.images] as FileUpload[];
        let audios = formValue[this.FORM_INPUT.card.upload.audios] as FileUpload[];
        return this.gameService.buildCardsFromValidUploads(images, audios);
    }

    private _getCardsFromUrls(formValue: any) {
        let cardUrls = formValue[this.FORM_INPUT.card.urls] as any[];
        let index=1;

        let singleCardPerPair = formValue[this.FORM_INPUT.card.singleCardPerPair] as boolean;
        if (singleCardPerPair) {
            return cardUrls.map((obj) => {
                let image = new FileUpload(obj.image, `imageUrl${index}`);
                let audio = obj.audio ? new FileUpload(obj.audio, `audioUrl${index}`) : null;
                index++;
                return new Card(null, image, audio);
            });
        }

        let cards: Card[] = [];
        cardUrls.forEach((obj) => {
            let image = new FileUpload(obj.image, `imageUrl${index}_card1`);
            let audio = obj.audio ? new FileUpload(obj.audio, `audioUrl${index}_card1`) : null;
            cards.push(new Card(null, image, audio));

            let image2 = new FileUpload(obj.image2, `imageUrl${index}_card2`);
            let audio2 = obj.audio ? new FileUpload(obj.audio2, `audioUrl${index}_card2`) : null;
            cards.push(new Card(null, image2, audio2));

            index++;
        });
        return cards;
    }

}
