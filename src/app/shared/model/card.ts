export class Card {
    id: number;
    type?: string;

    constructor(
        public code: string,
        public img?: string
    ) {}
}
