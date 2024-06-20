import { VALUES } from "src/app/shared/constants/global.values";

const IMG_FILENAME_SEP = VALUES.upload.fileNameSeparator;

const DOWNLOAD_CONFIG_FILE = {
    pt: 'Baixar arquivo',
    en: 'Download game file'
}

export const GAME_BUILDER_TRANSLATION = {
    pageTitle: {
        gameBuilder: {
            pt: 'Monte o seu jogo',
            en: 'Create your game'
        },
        demoBuilder: {
            pt: 'Jogo Demonstração',
            en: 'Demo Game'
        }
    },

    instruction: {
        pt: 'Preencha o formulário abaixo com as informações para o jogo',
        en: 'Fill out the form below with the information for the game'
    },

    uploadConfigFile: {
        checkboxLabel: {
            pt: 'Prefiro enviar arquivo de configuração',
            en: 'I prefer upload configuration file'
        },
        instruction: {
            pt: `(gerado ao clicar em "${DOWNLOAD_CONFIG_FILE.pt}" no pé da página)`,
            en: `(generated by clicking "${DOWNLOAD_CONFIG_FILE.en}" at page bottom)`
        }
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

        cards: {
            pt: 'Cartas',
            en: 'Cards'
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

        singleCardPerPair: {
            pt: 'Cada par possui cartas iguais?',
            en: 'Does each pair have the same card?'
        },

        addCustomSoundsPerCard: {
            pt: 'Adicionar sons customizados ao abrir cada carta',
            en: 'Add custom sounds when opening each card'
        },

        numPairs: {
            pt: 'Nº de pares',
            en: 'Number of pairs'
        },

        cardIdType: {
            pt: 'Como identificar as cartas',
            en: 'How to identify the cards'
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

        cards: {
            pair: {
                pt: 'Par nº ',
                en: 'Pair #'
            },
            getCardPair: (ordinal: any) => {
                return {
                    pt: `Carta ${ordinal} do Par `,
                    en: `Card #${ordinal} of Pair #`
                }
            },

            url: {
                image: {
                    pairLink: {
                        pt: 'Link da Imagem do Par ',
                        en: 'Image Link of Pair #'
                    },

                    getPairLink: (ordinal: any) => {
                        return {
                            pt: `Link da Imagem ${ordinal} do Par `,
                            en: `Image Link #${ordinal} of Pair #`
                        }
                    },
                },

                audio: {
                    pairLink: {
                        pt: 'Link do Áudio do Par ',
                        en: 'Audio Link of Pair #'
                    },

                    getPairLink: (ordinal: any) => {
                        return {
                            pt: `Link do Áudio ${ordinal} do Par `,
                            en: `Audio Link #${ordinal} of Pair #`
                        }
                    },
                },
            },

            upload: {
                images: {
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
                
                audios: {
                    pickDirPath: {
                        pt: 'Selecione a pasta que contém os áudios das cartas',
                        en: 'Select the folder containing the card audios'
                    },
                    instruction: {
                        pt: `O nome de cada arquivo de áudio de cada carta deve ser igual ao nome do arquivo de imagem correspondente. Por exemplo: 'bola.png' e 'bola.mp3'`,
                        en: `The name of each audio file for each card must be the same as the name of the corresponding image file. For example: 'ball.png' and 'ball.mp3'`
                    }
                }
            },
        },
    },

    btn: {
        submit: {
            createGame: {
                pt: 'Criar jogo',
                en: 'Create game'
            },
            playDemo: {
                pt: 'Jogar',
                en: 'Play'
            }
        },
        download: {
            label: DOWNLOAD_CONFIG_FILE,
            comment: {
                pt: 'Para jogar depois',
                en: 'For play later'
            }
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
