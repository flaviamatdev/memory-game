import { CardPositionIdTypeEnum } from "../enums/card-position-id-type.enum";

export class GameConfig {
    title: string;
    backgroundImgSrc: string;
    singleImgPerPair: boolean;
    pairImgSrcs: string[];
    cardPositionIdType: CardPositionIdTypeEnum;
}
