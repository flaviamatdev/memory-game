import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Card } from '../shared/model/card';
import { tap, map, delay } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';
import { GameConfig } from '../shared/model/game-config.model';

@Injectable({
    providedIn: 'root'
})
export class GameService {

    selectedCard1: Card = null;
    selectedCard2: Card = null;

    totalCards: number = 8; // vindo da home
    cardCount: number = 0;
    moveCount: number = 0;

    cards: Card[] = [];
    card = new BehaviorSubject<Card>(null);

    private _coverCards = new BehaviorSubject<Card[]>([]);
    private _remainingCardPairs = new BehaviorSubject<number>(8);
    private _doneMoves = new BehaviorSubject<number>(0);

    constructor(private http: HttpClient) { }

    create(gameConfig: GameConfig) {
        debugger
    }

    getCards() {
        this.cardCount = this.totalCards;
        this.moveCount = 0;

        this._remainingCardPairs.next(this.cardCount);
        this._doneMoves.next(0);

        return this.http.get<Card[]>('assets/cards.json').pipe(
            tap((cardArr) => {
                this.shuffleCards(cardArr);
            }), 
            map(d => {
                let arr = d.slice(0, this.totalCards);
                return this.shuffleCards([...arr, ...this.shuffleCards(arr)]);
            }
        ));
    }

    shuffleCards(arr: Card[]) {
        for (let index = 0; index < arr.length; index++) {
            const temp = arr[index];
            const newIdx = Math.floor(Math.random() * arr.length);
            arr[index] = arr[newIdx];
            arr[newIdx] = temp;
        }
        return arr;
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
            this.cardCount--;
            this._remainingCardPairs.next(this.cardCount);
        } else {
            this._coverCards.next([this.selectedCard1, this.selectedCard2]);
        }

        this.selectedCard1 = null;
        this.selectedCard2 = null;
        this.moveCount++;
        setTimeout(() => {
            this._doneMoves.next(this.moveCount);
            if (this.cardCount == 0) {
                alert('Parabens!'); // TODO
            }
        }, 1000);
    }

    getRemainingCardPairs() {
        return this._remainingCardPairs.asObservable();
    }

    getDoneMoves() {
        return this._doneMoves.asObservable();
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

}
