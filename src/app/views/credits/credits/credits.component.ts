import { Component } from '@angular/core';

@Component({
    selector: 'app-credits',
    templateUrl: './credits.component.html',
    styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {

    readonly CREDITS = [
        {
            text: 'Código fonte do controle do jogo e das animações adaptado de ',
            url: 'https://bariscanyilmaz.github.io/memory-game-angular'
        },
        {
            text: 'Efeitos sonoros: ',
            url: 'https://pixabay.com/sound-effects'
        },
    ];

}
