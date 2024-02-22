import { CardImg } from "./pair-image.model";

export class Card {
    id: number;
    iconType?: string;

    constructor(
        public code: string,
        public img?: CardImg
    ) {}
}
