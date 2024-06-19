import { Component } from '@angular/core';
import { ITranslation } from 'src/app/shared/components/translation/translation.model';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {

    readonly TITLE = {
        pt: 'Créditos',
        en: 'Credits'
    } as ITranslation;

    readonly CREDITS = [
        {
            text: {
                pt: 'Código fonte do controle do jogo e das animações adaptado de: ',
                en: 'Source code for game control and animations adapted from: '
            } as ITranslation,
            url: 'https://bariscanyilmaz.github.io/memory-game-angular'
        },
        {
            text: {
                pt: 'Efeitos sonoros (não customizados): ',
                en: 'Sound effects (not customized): '
            } as ITranslation,
            url: 'https://pixabay.com/sound-effects'
        },
    ];

}
