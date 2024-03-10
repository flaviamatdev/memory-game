export class GameConfigError extends Error {
    constructor(public translation: any) {
        super('Game Config Error');
    }
}
