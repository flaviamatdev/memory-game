import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { ToastService } from 'src/app/services/toast.service';
import { TranslationService } from 'src/app/shared/components/translation/translation.service';
import { CardIdTypeEnum } from 'src/app/shared/enums/card-id-type.enum';
import { Card } from 'src/app/shared/model/card';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { GameConfig } from 'src/app/shared/model/game-config.model';
import { AbstractGameBuilderFormComponent } from '../abstract-game-builder-form/abstract-game-builder-form.component';

@Component({
    selector: 'app-game-builder-form-demo',
    templateUrl: './game-builder-form-demo.component.html',
    styleUrls: ['./game-builder-form-demo.component.scss']
})
export class GameBuilderFormDemoComponent extends AbstractGameBuilderFormComponent implements OnInit {

    constructor(
        protected gameService: GameService,
        protected toastService: ToastService,
        private fb: FormBuilder,
        private translationService: TranslationService,
    ) {
        super(gameService, toastService);
    }

    // override
    protected _initForm() {
        this.form = this.fb.group({
            [this.FORM_INPUT.cardIdType]: new FormControl(CardIdTypeEnum.NUMBERS, Validators.required),
            [this.FORM_INPUT.card.singleCardPerPair]: new FormControl(null, Validators.required),
            [this.FORM_INPUT.card.numPairs]: new FormControl(null, Validators.required),
        });        
    }

    // override
    protected _setOptions() {
        super._setOptions();

        this.options.numPairs = [];
        ([4, 6, 8, 10]).forEach(value => this.options.numPairs.push({ id: value, label: value }));
    }

    // override
    protected _buildGameConfig() {
        let data = this.form.value;

        let gameConfig = new GameConfig();
        gameConfig.title = this.translationService.getTranslation(this.TRANSLATION.gameTitle.demo);
        gameConfig.cardIdType = data[this.FORM_INPUT.cardIdType] as number;
        gameConfig.singleCardPerPair = data[this.FORM_INPUT.card.singleCardPerPair] as boolean;
        gameConfig.addCustomSoundsPerCard = true;
        gameConfig.cards = [];

        let numPairs: number = data.numPairs;

        for (let i = 1; i <= numPairs; i++) {
            gameConfig.cards.push( this._buildCard(i, `num${i}_draw.png`, 'draw') );
        }

        if (!gameConfig.singleCardPerPair) {
            for (let i = 1; i <= numPairs; i++) {
                gameConfig.cards.push( this._buildCard(i, `num${i}_word.png`, 'words') );
            }
        }

        return gameConfig;
    }

    private _buildCard(i: number, imgFilename: string, imgSubDir: string) {
        const imageDirPath = 'assets/images/demo-game-cards';
        const audioDirPath = 'assets/audio/demo-game-audios';

        let image = new FileUpload(`${imageDirPath}/${imgSubDir}/${imgFilename}`, imgFilename);

        let audioFilename = `num${i}.mp3`;
        let audio = new FileUpload(`${audioDirPath}/${audioFilename}`, audioFilename);

        return new Card(null, image, audio);
    }

}
