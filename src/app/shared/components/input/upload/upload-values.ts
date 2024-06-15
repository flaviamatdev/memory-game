import { FileUploadTypeEnum } from "../../../enums/file-upload-type.enum";

export const UPLOAD_TRANSLATION = {
    noFileChosen: {
        pt: 'Nenhum arquivo escolhido',
        en: 'No file chosen'
    },

    nonMultiple: {
        btn: {
            pt: 'Escolher arquivo',
            en: 'Choose file'
        },
        acceptErrorMsg: {
            pt: 'O arquivo selecionado não é {{ fileType }}. Tente novamente!',
            en: 'The selected file is not {{ fileType }}. Try again!'
        }
    },

    multiple: {
        btn: {
            pt: 'Escolher arquivos',
            en: 'Choose files'
        },
        acceptErrorMsg: {
            pt: 'Pelo menos 1 arquivo da pasta selecionada não é {{ fileType }}. Tente novamente!',
            en: 'At least 1 file in the selected folder is not {{ fileType }} type. Try again!'
        },
        chosenFilesMsg: {
            pt: 'arquivo(s)',
            en: 'file(s)'
        }
    },

    fileType: {
        [FileUploadTypeEnum.IMAGE]: {
            pt: 'uma imagem',
            en: 'an image'
        },
        [FileUploadTypeEnum.AUDIO]: {
            pt: 'um áudio',
            en: 'an audio'
        },
        [FileUploadTypeEnum.JSON]: {
            pt: 'válido',
            en: 'valid'
        },
    },
    
}
