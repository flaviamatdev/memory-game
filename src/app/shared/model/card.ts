import { CardImage } from "./card-image.model";

export class Card {
    id: string;
    icon?: any;

    constructor(
        public code: string,
        public img?: CardImage
    ) {}
}
