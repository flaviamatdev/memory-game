import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { CardIdTypeEnum } from 'src/app/shared/enums/card-id-type.enum';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { PairConfig } from './pair-config.model';

enum InputTypeEnum {
    MANUALLY = 1,
    CONFIG_FILE = 2
}

@Component({
    selector: 'app-game-config-form',
    templateUrl: './game-config-form.component.html',
    styleUrls: ['./game-config-form.component.scss']
})
export class GameConfigFormComponent implements OnInit {

    readonly INPUT_TYPE = InputTypeEnum;
    readonly CARD_IMG_SRC_TYPE = ImageSourceTypeEnum;
    readonly MIN_IMAGES = 4;
    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    form: FormGroup;
    inputType = InputTypeEnum.MANUALLY;
    options: { [key: string]: any[] } = {};
    flag: any = {};
    pairConfig: PairConfig;

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private toastService: ToastService,
    ) { }

    ngOnInit(): void {
        this.onChangeInputType(this.inputType);
    }

    onChangeInputType($value: InputTypeEnum) {
        this.inputType = $value;
        if (this.inputType == InputTypeEnum.CONFIG_FILE) {
            this.form = this.fb.group({});
            return;
        }
        
        this._initForm();
        this._setOptions();
    }

    private _initForm() {
        this.form = this.fb.group({
            title: new FormControl('Memory Game', Validators.required),
            cardIdType: new FormControl(CardIdTypeEnum.NUMBERS, Validators.required),
            singleImgPerPair: new FormControl(null, Validators.required),

            addBackgroundImg: new FormControl(false, Validators.required),
            backgroundImgSrc: new FormControl(null),

            cardImageSrcType: new FormControl(false, Validators.required),
            cardImages: new FormControl(null, Validators.required),
        });
    }

    private _setOptions() {
        this.options = {
            inputType: [
                { id: InputTypeEnum.MANUALLY, label: 'Inserir manualmente' },
                { id: InputTypeEnum.CONFIG_FILE, label: 'Inserir arquivo de configuração' },
            ],

            yesNo: [
                { id: true, label: 'Sim' },
                { id: false, label: 'Não' },
            ],

            cardId: [
                { id: CardIdTypeEnum.NUMBERS, label: 'Números' },
                { id: CardIdTypeEnum.IMAGES, label: 'Imagens' },
                { id: CardIdTypeEnum.ROW_COLUMN, label: 'Linhas e colunas' },
            ],

            cardImageSrcType: [
                { id: ImageSourceTypeEnum.URL, label: 'Links das imagens' },
                { id: ImageSourceTypeEnum.UPLOAD, label: 'Enviar arquivos de uma pasta' },
            ]
        }
    }


    onSelectConfigFile($event: any) {
        let file: File = $event?.target?.files[0];
        // TODO
        debugger
    }

    onChangeAddBackgroundImg($value: boolean) {
        this.flag.addBackgroundImg = $value;
        this.form.get('backgroundImgSrc').setValue(null);
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
            this.form.addControl('numPairs', new FormControl(null, [Validators.required, Validators.min(this.MIN_IMAGES)]));
        } else {
            this.form.removeControl('numPairs');
        }

        this._setPairConfig(0);
    }

    onInsertNumImages($value: number) {
        if ($value < this.MIN_IMAGES) {
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

    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            console.log(
                Object.entries(this.form.controls)
                    .filter(([key, control]) => control.invalid)
                    .map(([key, control]) => key)
            )//.
            return this.toastService.showInvalidFormError();
        }

        let data = {...this.form.value };

        let gameConfig = new GameConfig();
        gameConfig.title = data.title;
        gameConfig.singleImgPerPair = data.singleImgPerPair;
        gameConfig.cardIdType = data.cardIdType;
        gameConfig.backgroundImgSrc = data.backgroundImgSrc;
        gameConfig.cardImages = data.cardImages;
        
        this.gameService.create(gameConfig);
    }

}
