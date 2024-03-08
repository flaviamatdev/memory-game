import { CardIdTypeEnum } from "../enums/card-id-type.enum";
import { FileUpload } from "./file-upload.model";

export class GameConfig {

    title: string;
    backgroundImgSrc?: string;
    singleImgPerPair: boolean;
    cardImages: FileUpload[];
    cardIdType: CardIdTypeEnum;

    get numPairs(): number {
        let numPairImages = this.cardImages.length;
        if (!this.singleImgPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }

}
