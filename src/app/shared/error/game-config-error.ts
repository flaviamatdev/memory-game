import { ITranslation } from "../components/translation/translation.model";

export class GameConfigError extends Error {
    constructor(public translation: ITranslation) {
        super('Game Config Error');
    }
}
