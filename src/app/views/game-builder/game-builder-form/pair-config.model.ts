export class PairConfig {
    
    constructor(
        public numPairs: number,
        public singleImgPerPair: boolean,
    ) {}

    get numCards(): number {
        return this.numPairs * (this.singleImgPerPair ? 1 : 2);
    }
    
}
