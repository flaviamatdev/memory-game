export class UrlPairConfig {
    
    constructor(
        public singleCardPerPair: boolean,
        public addCustomAudioPerPair: boolean,
        public numPairs: number,
    ) {}

    get numCards(): number {
        return this.numPairs * (this.singleCardPerPair ? 1 : 2);
    }
    
}
