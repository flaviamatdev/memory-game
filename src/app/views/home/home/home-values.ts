import { NUM_ICONS } from "src/app/shared/constants/icons";
import { CardIdTypeEnum, CardIdTypeNameTranslations } from "src/app/shared/enums/card-id-type.enum";

const CARD_ID_PATH = 'assets/images/card-id/card_id_';

export const HOME_TRANSLATIONS = {
    texts: [
        {
            pt: 'Este é um espaço para você criar um jogo da memória customizado para jogar coletivamente.',
            en: 'This is a space for you to create a customized memory game to play collectively.'
        },
        {
            pt: 'As cartas possuem identificadores para facilitar a interação entre o mediador e os jogadores.',
            en: 'The cards have identifiers to facilitate interaction between the mediator and the players.'
        },
        {
            pt: 'Temos 3 tipos de identificadores para as cartas:',
            en: 'We have 3 types of identifiers for cards:'
        },
    ],

    cardIds: [
        {
            src: `${CARD_ID_PATH}numbers.png`,
            text: {
                title: CardIdTypeNameTranslations[CardIdTypeEnum.NUMBERS],
                bottom: {
                    pt: 'Padrão',
                    en: 'Standard'
                }
            }
        },
        {
            src: `${CARD_ID_PATH}row_column.png`,
            text: {
                title: CardIdTypeNameTranslations[CardIdTypeEnum.ROW_COLUMN],
                bottom: {
                    pt: 'Explorar localização no plano',
                    en: 'To explore location on the plane'
                }
            }
        },
        {
            src: `${CARD_ID_PATH}icons.png`,
            text: {
                title: CardIdTypeNameTranslations[CardIdTypeEnum.ICONS],
                bottom: {
                    pt: `Para crianças ainda não alfabetizadas (máximo ${NUM_ICONS} cartas)`,
                    en: `For children who are not yet literate (maximum ${NUM_ICONS} cards)`
                }
            }
        }
    ],

    btn: {
        buildGame: {
            pt: 'Crie seu jogo',
            en: 'Create your game',
        },
        playDemo: {
            pt: 'Jogar Demo',
            en: 'Play Demo',
        },
    }
}
