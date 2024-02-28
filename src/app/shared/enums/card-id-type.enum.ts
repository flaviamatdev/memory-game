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
