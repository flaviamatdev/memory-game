import { CardIdTypeEnum, CardIdTypeHelper } from "../enums/card-id-type.enum";
import { FileUpload } from "./file-upload.model";

export class GameConfig {

    title: string;
    cardIdType: CardIdTypeEnum;
    backgroundImgSrc?: string;
    singleImgPerPair: boolean;
    cardImages: FileUpload[];

    get numPairs(): number {
        let numPairImages = this.cardImages.length;
        if (!this.singleImgPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }

    isValid(): boolean {
        return this._hasAllRequiredValues() && 
            CardIdTypeHelper.isValid(this.cardIdType) &&
            this._isValidBackgroundImgSrc() && 
            this._isValidCardImages();
    }

    private _hasAllRequiredValues(): boolean {
        return !!(this.title?.trim()) && ([
            this.cardIdType,
            this.singleImgPerPair,
            this.cardImages,
        ]).every(value => value !== null && value !== undefined);
    }

    private _isValidBackgroundImgSrc(): boolean {
        return !this.backgroundImgSrc || FileUpload.isValidSrc(this.backgroundImgSrc);
    }

    private _isValidCardImages(): boolean {
        return this.cardImages.every(img => new FileUpload(img.src, img.filename).isValid());
    }

}
