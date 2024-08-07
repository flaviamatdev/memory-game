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
                pt: 'Efeitos sonoros das cartas (não customizados): ',
                en: 'Card sound effects (not customized): '
            } as ITranslation,
            url: 'https://pixabay.com/sound-effects'
        },
        {
            text: {
                pt: 'Efeitos sonoros das cartas do jogo demo (one, two, ...): ',
                en: 'Demo game card sound effects (one, two, ...): '
            } as ITranslation,
            url: 'https://ssl.gstatic.com/dictionary/static/sounds/oxford/one--_us_1.mp3'
        },
    ];

}
