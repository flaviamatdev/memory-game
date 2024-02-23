import { CardImage } from "./card-image.model";

export class Card {
    id: number;
    iconType?: string;

    constructor(
        public code: string,
        public img?: CardImage
    ) {}
}
