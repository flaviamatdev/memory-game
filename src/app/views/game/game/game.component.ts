import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { GameService } from 'src/app/services/game.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    title: string;
    backgroundStyle: any = '';
    cardRows: Card[][] = [];

    private _boardDim: BoardDim;

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
        this._setBoardDim(gameConfig.numPairs * 2);
        this._startNewGame();
    }

    private _goHome() {
        this.gameService.goHome();
    }

    private _setBoardDim(numCards: number) {
        let numCols = (numCards % 5 == 0 ? 5 : 4);
        this._boardDim = new BoardDim(numCards / numCols, numCols);
    }

    private _startNewGame() {
        this.cardRows = [];
        let cards = this.gameService.getCards();

        const numCols = this._boardDim.numCols;
        for (let r = 0; r < this._boardDim.numRows; r++) {
            let idx = r*numCols;
            this.cardRows.push(cards.slice(idx, idx+numCols));
        }

        this._printPairs();//.
    }

    // TODO remover
    private _printPairs() {
        let numCards = this.cardRows.length;
        if (!numCards) {
            return;
        }

        let indices: number[] = [];
        let pairs: number[][] = [];

        let cards: Card[] = [];
        this.cardRows.forEach(rowCards => cards.push(...rowCards));

        cards.forEach( (card, i) => {
            if (indices.includes(i)) {
                return;
            }
            let j = cards.findIndex((c,j) => c.code === card.code && j != i);
            indices.push(...[i,j]);
            pairs.push([i+1, j+1]);
        })

        console.log('pairs', pairs);
    }
    

    newGame() {
        this._checkGameFinishedAndDoIt(
            'Tem certeza que deseja iniciar novo jogo?',
            () => this._startNewGame()
        );
    }

    goHome() {
        this._checkGameFinishedAndDoIt(
            'Tem certeza que deseja sair do jogo?', 
            () => this._goHome()
        );
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
            }, VALUES.winNotificationTimeout);
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

class BoardDim {
    constructor(
        public numRows: number,
        public numCols: number,
    ) {}
}
