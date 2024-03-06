import { VALUES } from "src/app/shared/constants/global.values";

const IMG_FILENAME_SEP = VALUES.upload.fileNameSeparator;

export const GAME_BUILDER_TRANSLATION = {
    pageTitle: {
        gameBuilder: {
            pt: 'Monte o seu jogo',
            en: 'Build your game'
        },
        demoBuilder: {
            pt: 'Jogo Demonstração',
            en: 'Demo Game'
        }
    },

    instruction: {
        pt: 'Preencha o formulário abaixo com as informações para o jogo:',
        en: 'Fill out the form below with the information for the game:'
    },

    sectionTitle: {
        mainData: {
            pt: 'Dados Principais',
            en: 'Main Data'
        },

        backgroundImg: {
            pt: 'Imagem de Fundo',
            en: 'Background image'
        },

        cardImages: {
            pt: 'Imagens das Cartas',
            en: 'Card Images'
        },
    },

    gameTitle: {
        demo: {
            pt: 'Jogo da Memória (Demo)',
            en: 'Demo Memory Game'
        }
    },

    input: {
        gameTitle: {
            pt: 'Título do jogo',
            en: 'Game title'
        },

        singleImgPerPair: {
            pt: 'Cada par possui imagens iguais?',
            en: 'Does each pair have the same images?'
        },

        numPairs: {
            pt: 'Nº de pares',
            en: 'Number of pairs'
        },

        numPairsComment: {
            pt: '(após preencher, clique no botão ao lado)',
            en: '(after filling out, click on the button next to it)'
        },

        cardIdType: {
            pt: 'Modo de identificação das cartas',
            en: 'Card identification mode'
        },

        backgroundImg: {
            add: {
                pt: 'Inserir imagem de fundo?',
                en: 'Insert background image?'
            },
            url: {
                pt: 'Link da imagem',
                en: 'Image link'
            },
            upload: {
                pt: 'Enviar arquivo',
                en: 'Upload image file'
            }
        },

        cardImages: {
            pair: {
                pt: 'Par nº',
                en: 'Pair #'
            },
            url: {
                addUrlsBtn: {
                    pt: 'Adicionar links',
                    en: 'Add links'
                },
                pairImageLink: {
                    pt: 'Link da Imagem do Par ',
                    en: 'Image Link of Pair #'
                },
                diffImages: {
                    pairImageLink1: {
                        pt: 'Link da Imagem 1 do Par ',
                        en: 'Image Link #1 of Pair #'
                    },
                    pairImageLink2: {
                        pt: 'Link da Imagem 2 do Par ',
                        en: 'Image Link #2 of Pair #'
                    },
                }
            },
            upload: {
                pickDirPath: {
                    pt: 'Selecione a pasta que contém as imagens das cartas',
                    en: 'Select the folder containing the card images'
                },
                diffImagesPerPair: {
                    warning: {
                        pt: `Envio de arquivos diferentes por par: os nomes dos arquivos referentes ao mesmo par devem ter o mesmo prefixo seguido de ${IMG_FILENAME_SEP} . Veja um exemplo `,
                        en: `Sending different files per pair: file names referring to the same pair must have the same prefix followed by ${IMG_FILENAME_SEP}. See an example `
                    },
                    warningLink: {
                        pt: 'aqui',
                        en: 'here'
                    }
                }
            },
        },
    },

    submitBtn: {
        createGame: {
            pt: 'Criar jogo',
            en: 'Create game'
        },
        playDemo: {
            pt: 'Jogar',
            en: 'Play'
        }
    },

    diffImagesPerPairDialog: {
        title: {
            pt: 'Envio de arquivos diferentes por par',
            en: 'Sending different files per pair'
        },
        instruction: {
            pt: 'Exemplo de nome para arquivos de images para cada par',
            en: 'Example name for image files for each pair'
        },
        pairName: {
            pt: 'nome do par',
            en: 'pair name'
        },
        imageId: {
            pt: 'identificacao da imagem',
            en: 'image identification'
        }
    },
}
