import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { TranslationService } from 'src/app/shared/components/translation/translation.service';
import { CardIdTypeEnum, CardIdTypeNameTranslations } from 'src/app/shared/enums/card-id-type.enum';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { Card } from 'src/app/shared/model/card';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { GAME_BUILDER_TRANSLATION } from '../game-builder-values';
import { GameBuilderComponent } from '../game-builder/game-builder.component';
import { GAME_BUILDER_FORM_INPUT } from './game-build-form-input.values';

@Component({
    selector: 'app-game-builder-form',
    templateUrl: './game-builder-form.component.html',
    styleUrls: ['./game-builder-form.component.scss']
})
export class GameBuilderFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;
    readonly FORM_INPUT = GAME_BUILDER_FORM_INPUT;
    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    @Input() parent: GameBuilderComponent;

    form: FormGroup;
    options: { [key: string]: any[] } = {};
    flag: any = {};
    submitBtnTranslation: any = {};

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private toastService: ToastService,
        private translationService: TranslationService,
    ) { }

    ngOnInit(): void {
        this.flag = {
            isDemo: this._isDemo
        }
        this._initForm();
        this._setOptions();
        this._setSubmitBtn();
    }

    private get _isDemo() {
        return this.parent.isDemo;
    }

    private _initForm() {
        this.form = this.fb.group({
            title: new FormControl('Memory Game', Validators.required),
            [this.FORM_INPUT.cardIdType]: new FormControl(CardIdTypeEnum.NUMBERS, Validators.required),

            [this.FORM_INPUT.addBackgroundImg]: new FormControl(false, Validators.required),
            [this.FORM_INPUT.backgroundImgSrc]: new FormControl(null),

            [this.FORM_INPUT.card.singleCardPerPair]: new FormControl(null, Validators.required),
            [this.FORM_INPUT.card.addCustomSoundsPerCard]: new FormControl(true, Validators.required),  // TODO value null
            [this.FORM_INPUT.card.cardSrcType]: new FormControl(null, Validators.required),
        });

        if (this._isDemo) {
            this.form.addControl(this.FORM_INPUT.card.numPairs, new FormControl(null, Validators.required));
            this.form.removeControl(this.FORM_INPUT.addBackgroundImg);
            this.form.removeControl(this.FORM_INPUT.backgroundImgSrc);
            this.form.removeControl(this.FORM_INPUT.card.addCustomSoundsPerCard);
            this.form.removeControl(this.FORM_INPUT.card.cardSrcType);
        }
    }

    private _setOptions() {
        const cardIdTypeNameTranslations = CardIdTypeNameTranslations;
        this.options = {
            cardId: [
                { 
                    id: CardIdTypeEnum.NUMBERS, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.NUMBERS] 
                },
                { 
                    id: CardIdTypeEnum.ROW_COLUMN, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.ROW_COLUMN] 
                },
                { 
                    id: CardIdTypeEnum.ICONS, 
                    label: cardIdTypeNameTranslations[CardIdTypeEnum.ICONS]
                },
            ],
        }

        if (this._isDemo) {
            this.options.numPairs = [];
            ([4, 6, 8, 10]).forEach(value => this.options.numPairs.push({ id: value, label: value }));
        }
    }

    private _setSubmitBtn() {
        this.submitBtnTranslation = (this._isDemo ? 
            this.TRANSLATION.btn.submit.playDemo :
            this.TRANSLATION.btn.submit.createGame
        );
    }

    onChangeAddBackgroundImg($value: boolean) {
        this.flag.addBackgroundImg = $value;
        this.form.get(this.FORM_INPUT.backgroundImgSrc).setValue(null);
    }

    download() {
        if (this._isDemo) {
            return;
        }
        if (this._isInvalidForm) {
            return this.toastService.showInvalidFormError();
        }
        this.gameService.downloadGameConfig( this._buildGameConfig() );
    }

    submit() {
        console.log(this.form.value);//.
        if (this._isInvalidForm) {
            console.log(Object.entries(this.form.controls).filter(entry => entry[1].invalid));//.
            return this.toastService.showInvalidFormError();
        }

        if (this._isDemo) {
            this.gameService.create(this._buildGameConfigForDemo());
            return;
        }

        let gameConfig = this._buildGameConfig();        
        console.log(gameConfig)//.
        // return;//.

        this.gameService.create(gameConfig);
    }

    private get _isInvalidForm() {
        this.form.markAllAsTouched();
        return this.form.invalid;
    }

    private _buildGameConfig() {
        let data = {...this.form.value };
        let gameConfig = new GameConfig();
        gameConfig.title = data.title.toUpperCase();
        gameConfig.singleCardPerPair = data.singleCardPerPair;
        gameConfig.addCustomSoundsPerCard = data.addCustomSoundsPerCard;
        gameConfig.cardIdType = data.cardIdType;
        gameConfig.backgroundImgSrc = data.backgroundImgSrc;

        let srcType = data[this.FORM_INPUT.card.cardSrcType] as ImageSourceTypeEnum;
        gameConfig.cards = (srcType == ImageSourceTypeEnum.UPLOAD ?
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
        return cardUrls.map((obj) => {
            let image = new FileUpload(obj.image, `imageUrl${index}`);
            let audio = obj.audio ? new FileUpload(obj.audio, `audioUrl${index}`) : null;
            index++;
            return new Card(null, image, audio);
        });
    }


    private _buildGameConfigForDemo() {
        let data = this.form.value;

        let gameConfig = new GameConfig();
        gameConfig.title = this.translationService.getTranslation(this.TRANSLATION.gameTitle.demo);
        gameConfig.singleCardPerPair = data[this.FORM_INPUT.card.singleCardPerPair] as boolean;
        gameConfig.addCustomSoundsPerCard = false;
        gameConfig.cards = [];

        const imageDirPath = 'assets/images/demo-game-cards';

        let numPairs: number = data.numPairs;

        for (let i = 1; i <= numPairs; i++) {
            let filename = `num${i}_draw.png`;
            let image = new FileUpload(`${imageDirPath}/draw/${filename}`, filename);
            gameConfig.cards.push(new Card(null, image, null));
        }

        if (!gameConfig.singleCardPerPair) {
            for (let i = 1; i <= numPairs; i++) {
                let filename = `num${i}_word.png`;
                let image = new FileUpload(`${imageDirPath}/words/${filename}`, filename);
                gameConfig.cards.push(new Card(null, image, null));
            }
        }

        return gameConfig;
    }

}
