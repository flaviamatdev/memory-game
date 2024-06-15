import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { TranslationService } from 'src/app/shared/components/translation/translation.service';
import { CardIdTypeEnum, CardIdTypeNameTranslations } from 'src/app/shared/enums/card-id-type.enum';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GAME_BUILDER_TRANSLATION } from '../game-builder-values';
import { GameBuilderComponent } from '../game-builder/game-builder.component';

const FORM_INPUT = {
    cardIdType: 'cardIdType',
    addBackgroundImg: 'addBackgroundImg',
    backgroundImgSrc: 'backgroundImgSrc',
    card: {
        singleCardPerPair: 'singleCardPerPair',
        addCustomSoundsPerCard: 'addCustomSoundsPerCard',
        cardImageSrcType: 'cardImageSrcType',
        cardImages: 'cardImages',
        numPairs: 'numPairs',
    }
}

@Component({
    selector: 'app-game-builder-form',
    templateUrl: './game-builder-form.component.html',
    styleUrls: ['./game-builder-form.component.scss']
})
export class GameBuilderFormComponent implements OnInit {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION;
    readonly FORM_INPUT = FORM_INPUT;
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
            [FORM_INPUT.cardIdType]: new FormControl(CardIdTypeEnum.NUMBERS, Validators.required),

            [FORM_INPUT.addBackgroundImg]: new FormControl(false, Validators.required),
            [FORM_INPUT.backgroundImgSrc]: new FormControl(null),

            [FORM_INPUT.card.singleCardPerPair]: new FormControl(null, Validators.required),
            [FORM_INPUT.card.addCustomSoundsPerCard]: new FormControl(true, Validators.required),  // TODO value null
            [FORM_INPUT.card.cardImageSrcType]: new FormControl(null, Validators.required),
            [FORM_INPUT.card.cardImages]: new FormControl(null, Validators.required),
        });

        if (this._isDemo) {
            this.form.addControl(FORM_INPUT.card.numPairs, new FormControl(null, Validators.required));
            this.form.removeControl(FORM_INPUT.addBackgroundImg);
            this.form.removeControl(FORM_INPUT.backgroundImgSrc);
            this.form.removeControl(FORM_INPUT.card.addCustomSoundsPerCard);
            this.form.removeControl(FORM_INPUT.card.cardImageSrcType);
            this.form.removeControl(FORM_INPUT.card.cardImages);
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
        this.form.get(FORM_INPUT.backgroundImgSrc).setValue(null);
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
        console.log(this.form.value);
        if (this._isInvalidForm) {
            console.log(Object.entries(this.form.controls).filter(entry => entry[1].invalid));//.
            return this.toastService.showInvalidFormError();
        }
        return;

        let gameConfig = this._buildGameConfig();
        if (this._isDemo) {
            gameConfig.title = this.translationService.getTranslationObj(this.TRANSLATION.gameTitle.demo);
            this._setDemoCardImages(gameConfig);
        }
        
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
        gameConfig.cardImages = data.cardImages;
        return gameConfig;
    }

    private _setDemoCardImages(gameConfig: GameConfig) {
        gameConfig.cardImages = [];

        const dirPath = 'assets/images/demo-game-cards';

        let numPairs: number = this.form.value.numPairs;

        for (let i = 1; i <= numPairs; i++) {
            let filename = `num${i}_draw.png`;
            gameConfig.cardImages.push(new FileUpload(`${dirPath}/draw/${filename}`, filename));
        }

        if (!gameConfig.singleCardPerPair) {
            for (let i = 1; i <= numPairs; i++) {
                let filename = `num${i}_word.png`;               
                gameConfig.cardImages.push(new FileUpload(`${dirPath}/words/${filename}`, filename));
            }
        }
    }

}
