import { CardIdTypeEnum, CardIdTypeHelper } from "../enums/card-id-type.enum";
import { Card } from "./card";
import { FileUpload } from "./file-upload.model";

export class GameConfig {

    title: string;
    cardIdType: CardIdTypeEnum;
    backgroundImgSrc?: string;
    singleCardPerPair: boolean;
    addCustomSoundsPerCard: boolean;
    cards: Card[];
    cardImages: FileUpload[]; // TODO remover

    get numPairs(): number {
        let numPairImages = this.cards.length;
        if (!this.singleCardPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }

    isValid(): boolean {
        return this._hasAllRequiredValues() && 
            CardIdTypeHelper.isValid(this.cardIdType) &&
            this._isValidBackgroundImgSrc() && 
            this._isValidCards();
    }

    private _hasAllRequiredValues(): boolean {
        return !!(this.title?.trim()) && ([
            this.cardIdType,
            this.singleCardPerPair,
            this.addCustomSoundsPerCard,
            this.cards,
        ]).every(value => value !== null && value !== undefined);
    }

    private _isValidBackgroundImgSrc(): boolean {
        return !this.backgroundImgSrc || FileUpload.isValidImageSrc(this.backgroundImgSrc);
    }

    private _isValidCards(): boolean {
        return this.cards.length > 0 && this.cards.every(card => Card.hasValidFiles(card));
    }

}
