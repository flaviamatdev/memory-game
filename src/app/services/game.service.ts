import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BehaviorSubject } from 'rxjs';
import { delay } from "rxjs/operators";
import { TranslationService } from '../shared/components/translation/translation.service';
import { ERROR_MSG_TRANSLATION } from '../shared/constants/error-message.values';
import { VALUES } from '../shared/constants/global.values';
import { ICONS, NUM_ICONS } from '../shared/constants/icons';
import { AudioEnum } from '../shared/enums/audio.enum';
import { CardIdTypeEnum } from '../shared/enums/card-id-type.enum';
import { GameConfigError } from '../shared/error/game-config-error';
import { Card } from '../shared/model/card';
import { FileUpload } from '../shared/model/file-upload.model';
import { GameConfig } from '../shared/model/game-config.model';
import { ITranslation } from '../shared/model/translation.model';
import { ArrayUtil } from '../shared/util/array.util';
import { AudioService } from './audio.service';
import { GameConfigFileService } from './game-config-file.service';
import { ToastService } from './toast.service';

const IMG_FILENAME_SEP = VALUES.upload.fileNameSeparator;
const ERROR_TRANSLATION = ERROR_MSG_TRANSLATION;

@Injectable({
    providedIn: 'root'
})
export class GameService {

    private _toolbarTitle: string;
    private _playSound: boolean = true;
    private _gameConfig: GameConfig;
    private _pairCount: number = 0;
    private _foundPairCodes: string[] = []
    private _coverCards = new BehaviorSubject<Card[]>([]);
    private _selectedCard1: Card = null;
    private _selectedCard2: Card = null;

    constructor(
        library: FaIconLibrary,
        private router: Router,
        private translationService: TranslationService,
        private audioService: AudioService,
        private toastService: ToastService,
        private configFileService: GameConfigFileService,
    ) {
        library.addIcons(...ICONS);
    }

    get toolbarTitle() {
        return this._toolbarTitle;
    }

    setToolbarTitleDefault() {
        if (!this.isPlaying) {
            this._setDefaultToolbarTitle();
        }
    }

    private _setDefaultToolbarTitle() {
        this.translationService.getTranslationByKey('TOOLBAR_TITLE')
            .subscribe(toolbarTitle => this._toolbarTitle = toolbarTitle);
    }

    get config() {
        return this._gameConfig;
    }

    get isGameFinished(): boolean {
        return this._pairCount == 0;
    }

    get isPlaying(): boolean {
        return !!this._gameConfig && !this.isGameFinished;
    }

    liveGame() {
        this._setDefaultToolbarTitle();
        this._gameConfig = null;
        this._pairCount = 0;
        this._foundPairCodes = [];
    }

    goHome() {
        this.liveGame();
        this.router.navigate(['']);
    }

    downloadGameConfig(gameConfig: GameConfig) {
        this.configFileService.downloadGameConfig(gameConfig);
    }

    createGameFromUploadedConfigFile(uploadFile: FileUpload) {
        let gameConfig: GameConfig = null;
        try {
            gameConfig = this.configFileService.readUploadedConfigFile(uploadFile);
        } 
        catch (error) {
            this._handleCreateError(error);
            throw error;
        }

        this.create(gameConfig);
    }

    create(gameConfig: GameConfig) {
        this._gameConfig = gameConfig;
        try {
            let cards = this._getCards();
            this._toolbarTitle = gameConfig.title;
            this.audioService.load();
            this.router.navigate(['game'], {
                state: {
                    cards: cards
                }
            });
        } 
        catch (error) {
            this._handleCreateError(error);
        }
    }

    private _handleCreateError(error: any) {
        this._gameConfig = null;
        
        if ( !(error instanceof GameConfigError) ) {
            return this._toastErrorTranslation(ERROR_TRANSLATION.unexpectedError);
        }

        this._toastErrorTranslation(error.translation);
    }

    private _toastErrorTranslation(translationObj: any) {
        this.toastService.error(
            this.translationService.getTranslationObj(translationObj)
        );
    }

    private _getCards(): Card[] {
        this._reset();

        if (this._gameConfig.cardIdType === CardIdTypeEnum.ICONS && this._pairCount * 2 > NUM_ICONS) {
            throw new GameConfigError(ERROR_TRANSLATION.exceededMaxNumIcons);
        }

        if (!this._gameConfig.singleCardPerPair) {
            return this._getCardsForDifferentImagesPerPair();
        }
        return this._getCardsForSameImagePerPair();
    }

    private _reset() {
        this._pairCount = this._gameConfig.numPairs;
        this._foundPairCodes = [];
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

        if (this._gameConfig.cardIdType === CardIdTypeEnum.ICONS) {
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

    private _getFilenamePrefixForDiffImagesPerPair(cardImages: FileUpload[]) {
        let filenames = cardImages.map(img => this._getCardImageFilenamePrefix(img));
        let occurrences = ArrayUtil.getNumOccurrences(filenames);
        let keys = Object.keys(occurrences);

        if (keys.length !== filenames.length / 2 ||
            Object.values(occurrences).some(count => count != 2)
        ) {
            throw new GameConfigError(ERROR_TRANSLATION.diffImagesPerPairFilename);
        }

        return keys;
    }

    private _getCardImageFilenamePrefix(cardImage: FileUpload) {
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

    setIdAsRowColumn(cards: Card[], numCols: number) {
        if (this._gameConfig.cardIdType == CardIdTypeEnum.ROW_COLUMN) {
            let numRows = cards.length / numCols;
            for (let r = 0; r < numRows; r++) {
                let idx = r * numCols;
                let currCardRow = cards.slice(idx, idx + numCols);
                currCardRow.forEach((card, col) => card.id = `${this._getLetter(r)}${col+1}`);
            }
        }
    }

    private _getLetter(index: number) {
        return String.fromCharCode('A'.charCodeAt(0) + index);
    }


    onChooseCard(choosen: Card): boolean {
        if (this.isGameFinished || this._foundPairCodes.includes(choosen.code)) {
            return;
        }

        if (this._playSound) {
            this.audioService.play(AudioEnum.TURN_CARD);
        }        

        if (this._selectedCard1 === null) {
            this._selectedCard1 = choosen;
            return;
        }

        if (choosen.id === this._selectedCard1.id) {
            return;
        }

        this._selectedCard2 = choosen;
        if (this._selectedCard1.code == this._selectedCard2.code) {
            this._handleFoundPair(choosen);
        } else {
            this._coverCards.next([this._selectedCard1, this._selectedCard2]);
        }

        this._selectedCard1 = null;
        this._selectedCard2 = null;

        let win = this.isGameFinished;

        if (win && this.playSound) {
            setTimeout(() => {
                this.audioService.play(AudioEnum.WIN);
            }, VALUES.winNotificationTimeout / 2);
        }

        return win;
    }

    private _handleFoundPair(choosen: Card) {
        this._pairCount--;
        this._foundPairCodes.push(choosen.code);
        if (this._playSound) {
            setTimeout(() => {
                this.audioService.play(AudioEnum.CORRECT);
            }, 100);
        }
    }


    restartGame(cards: Card[]) {
        this._reset();
        return this._getFinalShuffledCardsWithId( this._shuffleCards(cards) );
    }

    getCoveredCards() {
        return this._coverCards.asObservable().pipe(delay(1200));
    }

    get playSound() {
        return this._playSound;
    }

    swapPlaySound() {
        this._playSound = !this._playSound;
    }

    /* Game Config Building */

    validateCardUploads(images: FileUpload[], audios: FileUpload[]): ITranslation { 
        if (images.length !== audios.length) {
            let translation = {
                pt: 'A quantidade de arquivos de Imagem e Áudio não são iguais',
                en: 'The number of Image and Audio files are not the same'
            }
            this._toastErrorTranslation(translation);
            return translation;
        }

        let numMismatch = images.filter(image => !audios.some(audio => audio.hasSameName(image)));
        if (numMismatch.length) {
            console.log(numMismatch.map(x => x.filename));//.
            let translation = {
                pt: `Existe(m) ${numMismatch} arquivo(s) de imagem sem arquivo de audio com mesmo nome.`,
                en: `There are ${numMismatch} image files without an audio file with the same name.`
            }
            this._toastErrorTranslation(translation);
            return translation;
        }

        return null;
    }

    buildCardsFromUploads(images: FileUpload[], audios?: FileUpload[]): Card[] {
        if (!(audios.length)) {
            return images.map(image => new Card(null, image));
        }

        let n = images.length;
        if (n !== audios.length) {
            throw new GameConfigError({
                pt: 'A quantidade de arquivos de Imagem e Áudio não são iguais',
                en: 'The number of Image and Audio files are not the same'
            });
        }

        let cards: Card[] = [];

        for (let i = 0; i < n; i++) {
            let image = images[i];
            let audio = audios.find(x => x.hasSameName(image));
            if (!audio) { // should not happen => need handle this case?
                throw new GameConfigError({
                    pt: `Existe arquivo de imagem sem arquivo de audio com mesmo nome.`,
                    en: `There are image file without an audio file with the same name.`
                });
            }

            cards.push(new Card(null, image, audio));
        }

        return cards;
    }

}
