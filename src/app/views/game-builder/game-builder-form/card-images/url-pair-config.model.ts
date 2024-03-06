export class UrlPairConfig {
    
    constructor(
        public numPairs: number,
        public singleImgPerPair: boolean,
    ) {}

    get numCards(): number {
        return this.numPairs * (this.singleImgPerPair ? 1 : 2);
    }
    
}
