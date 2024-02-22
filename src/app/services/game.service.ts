import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { delay } from "rxjs/operators";
import { VALUES } from '../shared/constants/global.values';
import { AudioEnum } from '../shared/enums/audio.enum';
import { Card } from '../shared/model/card';
import { GameConfig } from '../shared/model/game-config.model';
import { AudioService } from './audio.service';
import { CardImg } from '../shared/model/pair-image.model';

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
        private audioService: AudioService,
    ) { }

    get config() {
        return this._gameConfig;
    }

    get isGameFinished() {
        return this._pairCount == 0;
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

        this._pairCount = this._gameConfig.numPairs;

        if (!this._gameConfig.singleImgPerPair) {
            return this._getCardsForDifferentImagesPerPair();
        }
        return this._getCardsForSameImagePerPair();
    }

    private _getCardsForSameImagePerPair(): Card[] {
        let cardImages = this._gameConfig.cardImages;
        let cards = cardImages.map((img, i) => new Card(`${i+1}`, img));

        let finalCards = [
            ...this._shuffleCards(cards), 
            ...this._shuffleCards(JSON.parse(JSON.stringify(cards))) 
        ];
        finalCards.forEach((card, i) => card.id = i+1);
        return finalCards;
    }

    private _getCardsForDifferentImagesPerPair(): Card[] {
        // espera-se q as imagens dos mesmos pares tenham o nome com o mesmo prefixo antes de _
        let cardImages = this._gameConfig.cardImages;
        // TODO
        return [];
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

    onChooseCard(choosen: Card): boolean {
        if (this.isGameFinished) {
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

        let win = this.isGameFinished;

        setTimeout(() => {
            if (win) {
                this.audioService.play(AudioEnum.WIN);
            }
        }, VALUES.winNotificationTimeout / 2);

        return win;
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

}
