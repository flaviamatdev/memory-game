import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { GameService } from 'src/app/services/game.service';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    title: string;
    cards: Card[] = [];
    backgroundStyle: any = '';

    constructor(
        private gameService: GameService,
        private dialogService: DialogService,
    ) { }

    ngOnInit(): void {
        let gameConfig = this.gameService.config;
        if (!gameConfig) {
            this._goHome();
            return;
        }

        this.title = gameConfig.title.toUpperCase();
        if (gameConfig.backgroundImgSrc) {
            this.backgroundStyle = `url(${gameConfig.backgroundImgSrc})`;
        }
        this.newGame();
    }

    newGame() {
        this._checkGameFinishedAndDoIt(
            'Tem certeza que deseja iniciar novo jogo?',
            () => this._startNewGame()
        );
    }

    private _startNewGame() {
        this.cards = this.gameService.getCards();
        this._printPairs();//.
    }

    // TODO remover
    private _printPairs() {
        let numCards = this.cards.length;
        if (!numCards) {
            return;
        }

        let indices: number[] = [];
        let pairs: number[][] = [];

        this.cards.forEach( (card, i) => {
            if (indices.includes(i)) {
                return;
            }
            let j = this.cards.findIndex((c,j) => c.code === card.code && j != i);
            indices.push(...[i,j]);
            pairs.push([i+1, j+1]);
        })

        console.log(pairs);
    }

    goHome() {
        this._checkGameFinishedAndDoIt(
            'Tem certeza que deseja sair do jogo?', 
            () => this._goHome()
        );
    }

    private _goHome() {
        this.gameService.goHome();
    }


    private _checkGameFinishedAndDoIt(confirmQuestion: string, callback: Function) {
        if (!this.gameService.isGameFinished) {
            this._openConfirmationDialog(confirmQuestion, callback);
            return;
        }

        callback();
    }

    private _openConfirmationDialog(confirmQuestion: string, callback: Function) {
        this.dialogService.openConfirmationDialog({
            header: {
                icon: 'pan_tool',
                iconColor: 'darkorange',
                title: 'Espere! O jogo ainda não acabou!'
            },
            bodyText: confirmQuestion,
            okCallback: callback
        });
    }

    onChooseCard($card: Card) {
        let win = this.gameService.onChooseCard($card);
        if (win) {
            setTimeout(() => {
                this._openNewGameDialog();
            }, 200);
        }
    }

    private _openNewGameDialog() {
        this.dialogService.openConfirmationDialog({
            header: {
                icon: 'mood',
                iconColor: 'limegreen',
                title: 'Parabéns!'
            },
            bodyText: 'Deseja jogar novamente?',
            okCallback: () => this._startNewGame()
        });
    }

}
