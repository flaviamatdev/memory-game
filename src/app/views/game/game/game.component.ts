import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    soundIcon: any = {};

    private _cards: Card[];
    private _boardDim: BoardDim;

    constructor(
        private router: Router,
        private gameService: GameService,
        private dialogService: DialogService,
    ) {
        this._cards = this.router.getCurrentNavigation()?.extras?.state?.cards;
    }

    ngOnInit(): void {
        let gameConfig = this.gameService.config;
        if (!gameConfig || !(this._cards?.length)) {
            this._goHome();
            return;
        }

        this.title = gameConfig.title.toUpperCase();
        if (gameConfig.backgroundImgSrc) {
            this.backgroundStyle = `url(${gameConfig.backgroundImgSrc})`;
        }
        this._setBoardDim(gameConfig.numPairs * 2);
        this._setSoundIcon();
        this._startGame();
    }

    private _goHome() {
        this.gameService.goHome();
    }

    private _setBoardDim(numCards: number) {
        let numCols = (numCards % 5 == 0 ? 5 : 4);
        let numRows = numCards / numCols
        this._boardDim = new BoardDim(numRows, numCols);
    }
        
    private _setSoundIcon() {
        this.soundIcon = (this.gameService.playSound ? 
            { icon: 'volume_up', tooltip: 'Desligar sons' } :
            { icon: 'volume_off', tooltip: 'Ligar sons' }
        )
    }

    private _startGame() {
        this.cardRows = [];
        const numCols = this._boardDim.numCols;

        for (let r = 0; r < this._boardDim.numRows; r++) {
            let idx = r * numCols;
            let currCardRow = this._cards.slice(idx, idx + numCols);
            this.gameService.setIdAsRowColumn(r, currCardRow);
            this.cardRows.push(currCardRow);
        }
    }

    private _startNewGame() {
        this._cards = this.gameService.restartGame(this._cards);
        this._startGame();
    }

    
    swapPlaySound() {
        this.gameService.swapPlaySound();
        this._setSoundIcon();
    }

    newGame() {
        const callback = () => this._startNewGame();
        if (!this.gameService.isGameFinished) {
            return this.dialogService.openLiveGameConfirmationDialog(callback, 'Tem certeza que deseja iniciar novo jogo?');
        }
        callback();
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
    ) { }
}
