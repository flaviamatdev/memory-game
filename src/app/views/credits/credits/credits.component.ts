import { Component } from '@angular/core';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {

    readonly TITLE = {
        pt: 'Créditos',
        en: 'Credits'
    }

    readonly CREDITS = [
        {
            text: {
                pt: 'Código fonte do controle do jogo e das animações adaptado de: ',
                en: 'Source code for game control and animations adapted from: '
            },
            url: 'https://bariscanyilmaz.github.io/memory-game-angular'
        },
        {
            text: {
                pt: 'Efeitos sonoros: ',
                en: 'Sound effects: '
            },
            url: 'https://pixabay.com/sound-effects'
        },
    ];

}
