import { ITranslation } from "../model/translation.model";

export class GameConfigError extends Error {
    constructor(public translation: ITranslation) {
        super('Game Config Error');
    }
}
