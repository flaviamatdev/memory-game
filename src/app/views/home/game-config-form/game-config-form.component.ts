import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CardPositionIdEnum } from 'src/app/shared/enums/card-position-id.enum';

@Component({
    selector: 'app-game-config-form',
    templateUrl: './game-config-form.component.html',
    styleUrls: ['./game-config-form.component.scss']
})
export class GameConfigFormComponent implements OnInit {

    form: FormGroup;
    insertConfigFile: boolean;
    numImagesPerPairOptions: any[] = [];
    cardPositionOptions: any[] = [];

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {
        
    }

    changeInputType($event: boolean) {
        this.insertConfigFile = $event;
        if (this.insertConfigFile) {
            this.form = this.fb.group({});
        } else {
            this._initForm();
            this._setOptions();
        }
    }

    private _initForm() {
        this.form = this.fb.group({
            title: new FormControl('Memory Game', Validators.required),
            backgroundImgInputFile: new FormControl(null, Validators.required),

            eachPairHasSameImg: new FormControl(null, Validators.required),
            pairsImgDirPath: new FormControl(null, Validators.required),

            cardPositionType: new FormControl(CardPositionIdEnum.NUMBERS, Validators.required),
        })
    }

    private _setOptions() {
        this.cardPositionOptions = [
            { id: CardPositionIdEnum.NUMBERS, label: 'Números' },
            { id: CardPositionIdEnum.IMAGES, label: 'Imagens' },
            { id: CardPositionIdEnum.ROW_COLUMN, label: 'Linhas e colunas (Batalha Naval)' },
        ]

        this.numImagesPerPairOptions = [
            { id: true, label: 'Sim' },
            { id: false, label: 'Não' },
        ]
    }

    onChangeFile($event) {

    }

}
