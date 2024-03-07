import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/services/dialog.service';
import { GameService } from 'src/app/services/game.service';
import { TranslationService } from 'src/app/shared/components/translation/translation.service';
import { VALUES } from 'src/app/shared/constants/global.values';
import { Card } from 'src/app/shared/model/card';
import { GAME_TRANSLATION } from './game-values';

/* Values in pixels defined at component scss */
const STYLE = {
    minWindowWidth: 768,
    cardWidth: 100,
    cardMargin: 10,
    gapBetweenCards: 16, /* 1rem */
}

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    readonly TRANSLATION = GAME_TRANSLATION;

    backgroundImgSrc: any = '';
    boardStyle: any= {};
    soundIcon: any = {};

    private _cards: Card[] = [];

    constructor(
        private router: Router,
        private gameService: GameService,
        private dialogService: DialogService,
        private translationService: TranslationService,
    ) {
        this._cards = this.router.getCurrentNavigation()?.extras?.state?.cards ?? [];
    }

    get cards() {
        return this._cards;
    }

    ngOnInit(): void {
        let gameConfig = this.gameService.config;
        if (!gameConfig || !(this._cards?.length)) {
            this.gameService.goHome();
            return;
        }

        if (gameConfig.backgroundImgSrc) {
            this.backgroundImgSrc = `url(${gameConfig.backgroundImgSrc})`;
        }
        this._setWidth(window.screen.width);
        this._setSoundIcon();
    }

    private _setWidth(windowWidth: number) {
        if (windowWidth < STYLE.minWindowWidth) {
            this.boardStyle = {
                board: {},
                card: {}
            }
            return;
        }

        let numCards = (this.gameService.config.numPairs * 2);
        let numCols = ([5,4,3]).filter(n => numCards % n == 0)[0];
        let boardWidth = ((STYLE.cardWidth + 2*STYLE.cardMargin) * numCols) + ((numCols-1) * STYLE.gapBetweenCards);
        this.boardStyle = { width: `${boardWidth}px` };
    }

    @HostListener('window:resize', ['$event'])
    onResize($event) {
        this._setWidth($event.target.innerWidth);
    }

    private _setSoundIcon() {
        this.soundIcon = (this.gameService.playSound ? 
            { icon: 'volume_up',  tooltip: this.TRANSLATION.btn.sound.turnOnTooltip } :
            { icon: 'volume_off', tooltip: this.TRANSLATION.btn.sound.turnOffTooltip }
        );
    }

    swapPlaySound() {
        this.gameService.swapPlaySound();
        this._setSoundIcon();
    }

    newGame() {
        const callback = () => this._startNewGame();
        if (!this.gameService.isGameFinished) {
            return this.dialogService.openLiveGameConfirmationDialog(
                callback, 
                this.translationService.getTranslationObj(this.TRANSLATION.startNewGameConfirmation)
            );
        }
        callback();
    }

    private _startNewGame() {
        let cards = this._cards;
        this._cards = [];
        setTimeout(() => {
            this._cards = this.gameService.restartGame(cards);
        }, 1);
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
                title: this.translationService.getTranslationObj(this.TRANSLATION.finishGame.congratulations)
            },
            bodyText: this.translationService.getTranslationObj(this.TRANSLATION.finishGame.playAgain),
            okCallback: () => this._startNewGame()
        });
    }

}
