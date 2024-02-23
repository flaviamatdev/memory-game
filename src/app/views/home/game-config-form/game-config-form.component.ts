import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { CardPositionIdTypeEnum } from 'src/app/shared/enums/card-position-id-type.enum';
import { GameConfig } from 'src/app/shared/model/game-config.model';

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
    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    form: FormGroup;
    inputType = InputTypeEnum.MANUALLY;
    numImagesPerPairOptions: any[] = [];
    cardPositionOptions: any[] = [];

    constructor(
        private fb: FormBuilder,
        private gameService: GameService,
        private toastService: ToastService,
    ) { }

    ngOnInit(): void {
        this.onChangeInputType();
    }

    onChangeInputType() {
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
            backgroundImgSrc: new FormControl(null),
            singleImgPerPair: new FormControl(null, Validators.required),
            cardImages: new FormControl(null, Validators.required),
            cardPositionIdType: new FormControl(CardPositionIdTypeEnum.NUMBERS, Validators.required),
        });
    }

    private _setOptions() {
        this.cardPositionOptions = [
            { id: CardPositionIdTypeEnum.NUMBERS, label: 'Números' },
            { id: CardPositionIdTypeEnum.IMAGES, label: 'Imagens' },
            { id: CardPositionIdTypeEnum.ROW_COLUMN, label: 'Linhas e colunas (Batalha Naval)' },
        ]

        this.numImagesPerPairOptions = [
            { id: true, label: 'Sim' },
            { id: false, label: 'Não' },
        ]
    }

    onSelectConfigFile($event: any) {
        let file: File = $event?.target?.files[0];
        // TODO
        debugger
    }

    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return this.toastService.showInvalidFormError();
        }
        this.gameService.create(Object.assign(new GameConfig(), this.form.value));
    }

}
