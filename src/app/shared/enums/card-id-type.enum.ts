export enum CardIdTypeEnum {
    NUMBERS = 1,
    ROW_COLUMN,
    ICONS    
}

export const CardIdTypeName = {
    [CardIdTypeEnum.NUMBERS]: 'Números',
    [CardIdTypeEnum.ROW_COLUMN]: 'Linha/Coluna',
    [CardIdTypeEnum.ICONS]: 'Ícones',
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
