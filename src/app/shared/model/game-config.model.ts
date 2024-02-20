import { CardPositionIdTypeEnum } from "../enums/card-position-id-type.enum";

export class GameConfig {
    title: string;
    backgroundImgSrc: File;
    singleImgPerPair: boolean;
    pairImgFiles: File[];
    cardPositionIdType: CardPositionIdTypeEnum;
}
