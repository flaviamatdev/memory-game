export class UrlPairConfig {
    
    constructor(
        public numPairs: number,
        public singleCardPerPair: boolean,
        public addCustomAudioPerPair: boolean,
    ) {}

    get numCards(): number {
        return this.numPairs * (this.singleCardPerPair ? 1 : 2);
    }
    
}
