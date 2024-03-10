export enum CardIdTypeEnum {
    NUMBERS = 1,
    ROW_COLUMN,
    ICONS    
}

export class CardIdTypeHelper {

    static isValid(cardIdType: any): boolean {
        return typeof cardIdType == 'number' && Object.values(CardIdTypeEnum).includes(cardIdType);
    }
    
}

export const CardIdTypeNameTranslations = {
    [CardIdTypeEnum.NUMBERS]: {
        pt: 'Números',
        en: 'Numbers'
    },

    [CardIdTypeEnum.ROW_COLUMN]: { 
        pt: 'Linha/Coluna',
        en: 'Row/Column'
    },

    [CardIdTypeEnum.ICONS]: { 
        pt: 'Ícones',
        en: 'Icons'
    },
}
