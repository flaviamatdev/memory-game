import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BehaviorSubject } from 'rxjs';
import { delay } from "rxjs/operators";
import { VALUES } from '../shared/constants/global.values';
import { ICONS } from '../shared/constants/icons';
import { AudioEnum } from '../shared/enums/audio.enum';
import { CardIdTypeEnum } from '../shared/enums/card-id-type.enum';
import { GameConfigError } from '../shared/error/game-config-error';
import { Card } from '../shared/model/card';
import { CardImage } from '../shared/model/card-image.model';
import { GameConfig } from '../shared/model/game-config.model';
import { ArrayUtil } from '../shared/util/array.util';
import { AudioService } from './audio.service';
import { ToastService } from './toast.service';

const IMG_FILENAME_SEP = '_';

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
        library: FaIconLibrary,
        private router: Router,
        private audioService: AudioService,
        private toastService: ToastService,
    ) {
        library.addIcons(...ICONS);
    }

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
        try {
            let cards = this._getCards();
            this.audioService.load();
            this.router.navigate(['game'], {
                state: {
                    cards: cards
                }
            });
        } 
        catch (error) {
            this._gameConfig = null;
            if ( !(error instanceof GameConfigError) ) {
                return this.toastService.error('Ops! Ocorreu um erro inesperado. Tente novamente.');
            }
            this.toastService.error(error.message);
        }
    }

    private _getCards(): Card[] {
        this._reset();

        if (!this._gameConfig.singleImgPerPair) {
            return this._getCardsForDifferentImagesPerPair();
        }
        return this._getCardsForSameImagePerPair();
    }

    private _reset() {
        this._pairCount = this._gameConfig.numPairs;
        this._coverCards.next([]);
    }

    private _getCardsForSameImagePerPair(): Card[] {
        let cards = this._gameConfig.cardImages.map((img, i) => new Card(`${i + 1}`, img));

        return this._getFinalShuffledCardsWithId([
            ...this._shuffleCards(cards),
            ...this._shuffleCards(JSON.parse(JSON.stringify(cards)))
        ]);
    }

    private _getFinalShuffledCardsWithId(cards: Card[]) {
        cards.forEach((card, i) => card.id = `${i + 1}`);

        if (this._gameConfig.cardIdType === CardIdTypeEnum.IMAGES) {
            cards.forEach((card, i) => card.icon = ICONS[i]);
        }

        return cards;
    }

    private _getCardsForDifferentImagesPerPair(): Card[] {
        // Espera-se que as imagens dos mesmos pares tenham o nome com o mesmo prefixo antes do SEP
        let cardImages = this._gameConfig.cardImages;
        let keys = this._getFilenamePrefixForDiffImagesPerPair(cardImages);
        let cards: Card[] = [];

        keys.forEach(key => {
            cardImages
                .filter(img => this._getCardImageFilenamePrefix(img) === key)
                .forEach(img => cards.push(new Card(key, img)));
        });

        return this._getFinalShuffledCardsWithId(this._shuffleCards(cards));
    }

    private _getFilenamePrefixForDiffImagesPerPair(cardImages: CardImage[]) {
        let filenames = cardImages.map(img => this._getCardImageFilenamePrefix(img));
        let occurrences = ArrayUtil.getNumOccurrences(filenames);
        let keys = Object.keys(occurrences);

        if (keys.length !== filenames.length / 2 ||
            Object.values(occurrences).some(count => count != 2)
        ) {
            throw new GameConfigError('Em caso de imagens diferentes por par, os nomes dos arquivos devem seguir o padrão informado');
        }

        return keys;
    }

    private _getCardImageFilenamePrefix(cardImage: CardImage) {
        return cardImage.filename.split(IMG_FILENAME_SEP)[0];
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


    setIdAsRowColumn(rowIndex: number, currCardRow: Card[]) {
        if (this._gameConfig.cardIdType == CardIdTypeEnum.ROW_COLUMN) {
            currCardRow.forEach((card, col) => card.id = `${this._getLetter(rowIndex)}${col+1}`);
        }
    }

    private _getLetter(index: number) {
        return String.fromCharCode('A'.charCodeAt(0) + index);
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

    restartGame(cards: Card[]) {
        this._reset();
        return this._getFinalShuffledCardsWithId( this._shuffleCards(cards) );
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

}
