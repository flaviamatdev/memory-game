import { CardPositionIdEnum } from "../enums/card-position-id.enum";

export class GameConfig {
    title: string;
    backgroundImgSrc: any;
    eachPairHasSameImg: boolean;
    pairImgSrcs: any[];
    cardPositionId: CardPositionIdEnum;
}
