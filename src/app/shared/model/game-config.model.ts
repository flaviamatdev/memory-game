import { CardIdTypeEnum } from "../enums/card-id-type.enum";
import { CardImage } from "./card-image.model";

export class GameConfig {

    title: string;
    backgroundImgSrc?: string;
    singleImgPerPair: boolean;
    cardImages: CardImage[];
    cardIdType: CardIdTypeEnum;

    get numPairs(): number {
        let numPairImages = this.cardImages.length;
        if (!this.singleImgPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }

}
