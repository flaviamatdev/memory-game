export const UPLOAD_TRANSLATION = {
    noFileChosen: {
        pt: 'Nenhum arquivo escolhido',
        en: 'No file chosen'
    },

    fileType: {
        regular: {
            pt: 'arquivo',
            en: 'file'
        },
        image: {
            pt: 'imagem',
            en: 'image'
        }        
    },

    nonMultiple: {
        btn: {
            pt: 'Escolher arquivo',
            en: 'Choose file'
        },
        acceptErrorMsg: {
            pt: 'O arquivo selecionado está fora dos formatos de {{ fileType }} aceitos: {{ accept }}. Tente novamente!',
            en: 'The selected file is outside the supported {{ fileType }} formats: {{ accept }}. Try again!'
        }
    },

    multiple: {
        btn: {
            pt: 'Escolher arquivos',
            en: 'Choose files'
        },
        acceptErrorMsg: {
            pt: 'Pelo menos 1 arquivo da pasta selecionada está fora dos formatos de {{ fileType }} aceitos: {{ accept }}. Tente novamente!',
            en: 'At least 1 file in the selected folder is outside the accepted {{ fileType }} formats: {{ accept }}. Try again!'
        },
        chosenFilesMsg: {
            pt: 'arquivo(s)',
            en: 'file(s)'
        }
    }
    
}
