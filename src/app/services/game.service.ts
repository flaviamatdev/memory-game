import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { delay } from "rxjs/operators";
import { AudioEnum } from '../shared/enums/audio.enum';
import { Card } from '../shared/model/card';
import { GameConfig } from '../shared/model/game-config.model';
import { AudioService } from './audio.service';
import { ToastService } from './toast.service';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private _gameConfig: GameConfig;
    private _pairCount: number = 0;
    private _coverCards = new BehaviorSubject<Card[]>([]);
    private _selectedCard1: Card = null;
    private _selectedCard2: Card = null;

    constructor(
        private router: Router,
        private toastService: ToastService,
        private audioService: AudioService,
    ) { }

    get config() {
        return this._gameConfig;
    }

    goHome() {
        this.router.navigate(['']);
    }

    create(gameConfig: GameConfig) {
        this._gameConfig = gameConfig;
        this.audioService.load();
        this.router.navigate(['game']);
    }

    getCards(): Card[] {
        if (!this._gameConfig) {
            this.goHome();
            return [];
        }

        let numPairs = this._gameConfig.numPairs;
        this._pairCount = numPairs;

        let cardImages = this._gameConfig.pairImgSrcs;
        let code = 1;
        let cards = cardImages.map(img => new Card(`${code++}`, img));

        return [
            ...this._shuffleCards(cards), 
            ...this._shuffleCards(Object.assign([], cards)) 
        ];
    }

    private _shuffleCards(cards: Card[]) {
        for (let index = 0; index < cards.length; index++) {
            const temp = cards[index];
            const newIdx = Math.floor(Math.random() * cards.length);
            cards[index] = cards[newIdx];
            cards[newIdx] = temp;
        }
        return cards;
    }

    onChooseCard(choosen: Card) {
        if (this._pairCount == 0) {
            return;
        }
        
        this.audioService.play(AudioEnum.TURN_CARD);

        if (this._selectedCard1 === null) {
            this._selectedCard1 = choosen;
            return;
        }

        if (choosen.id === this._selectedCard1.id) {
            return;
        }

        this._selectedCard2 = choosen;
        if (this._selectedCard1.code == this._selectedCard2.code) {
            this._pairCount--;
            setTimeout(() => {
                this.audioService.play(AudioEnum.CORRECT);
            }, 100);
        } 
        else {
            this._coverCards.next([this._selectedCard1, this._selectedCard2]);
        }

        this._selectedCard1 = null;
        this._selectedCard2 = null;

        setTimeout(() => {
            if (this._pairCount == 0) {
                this._win();
            }
        }, 200);
    }

    private _win() {
        this.toastService.success('Parabéns!');
        this.audioService.play(AudioEnum.WIN);
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

}
