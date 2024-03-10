import { NUM_ICONS } from "./icons";
import { CardIdTypeEnum, CardIdTypeNameTranslations } from "../enums/card-id-type.enum";

const ICONS = CardIdTypeNameTranslations[CardIdTypeEnum.ICONS];

export const ERROR_MSG_TRANSLATION = {

    unexpectedError: {
        pt: 'Ops! Ocorreu um erro inesperado. Tente novamente.',
        en: 'Oops! An unexpected error has occurred. Try again.'
    },

    diffImagesPerPairFilename: {
        pt: 'Em caso de imagens diferentes por par, os nomes dos arquivos devem seguir o padrão informado.',
        en: 'In case of different images per pair, the file names must follow the pattern informed.'
    },

    configFile: {
        upload: {
            pt: 'Erro ao processar arquivo de configuração.',
            en: 'Error processing configuration file.'
        },
        invalid: {
            pt: 'O arquivo de configuração enviado é inválido.',
            en: 'The uploaded configuration file is invalid.'
        }
    },

    exceededMaxNumIcons: {
        pt: `Para identificar cartas com ${ICONS.pt}, o número máximo de cartas é ${NUM_ICONS}.`,
        en: `To identify cards with ${ICONS.en}, the maximum number of cards is ${NUM_ICONS}.`
    }

}
