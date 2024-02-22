import { CardPositionIdTypeEnum } from "../enums/card-position-id-type.enum";
import { CardImg } from "./pair-image.model";

export class GameConfig {

    title: string;
    backgroundImgSrc?: string;
    singleImgPerPair: boolean;
    cardImages: CardImg[];
    cardPositionIdType: CardPositionIdTypeEnum;

    get numPairs(): number {
        let numPairImages = this.cardImages.length;
        if (!this.singleImgPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }

}
