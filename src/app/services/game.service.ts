import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Card } from '../shared/model/card';
import { tap, map, delay } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { GameConfig } from '../shared/model/game-config.model';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    selectedCard1: Card = null;
    selectedCard2: Card = null;

    private _gameConfig: GameConfig;
    private _pairCount: number = 0;
    private _coverCards = new BehaviorSubject<Card[]>([]);

    constructor(
        private http: HttpClient,
        private toastService: ToastService,
        private router: Router,
    ) { }

    goHome() {
        this.router.navigate(['']);
    }

    create(gameConfig: GameConfig) {
        this._gameConfig = gameConfig;
        this.router.navigate(['game']);
    }

    getTitle() {
        return this._gameConfig?.title ?? 'Memory Game';
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

    controlCards(choosen: Card) {
        if (this.selectedCard1 === null) {
            this.selectedCard1 = choosen;
            return;
        }

        if (choosen.id === this.selectedCard1.id) {
            return;
        }

        this.selectedCard2 = choosen;
        if (this.selectedCard1.code == this.selectedCard2.code) {
            this._pairCount--;
        } else {
            this._coverCards.next([this.selectedCard1, this.selectedCard2]);
        }

        this.selectedCard1 = null;
        this.selectedCard2 = null;

        setTimeout(() => {
            if (this._pairCount == 0) {
                this._win();
            }
        }, 200);
    }

    private _win() {
        this.toastService.success('Parabéns!');
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

}
