import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    title: string;
    cards: Card[] = [];
    backgroundStyle: any = '';

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        let gameConfig = this.gameService.config;
        if (!gameConfig) {
            this.goHome();
            return;
        }

        this.title = gameConfig.title.toUpperCase();
        if (gameConfig.backgroundImgSrc) {
            this.backgroundStyle = `url(${gameConfig.backgroundImgSrc})`;
        }
        this.newGame();
    }

    newGame() {
        this.cards = this.gameService.getCards();
        this._printPairs();//.
    }

    // TODO remover
    private _printPairs() {
        let numCards = this.cards.length;
        if (!numCards) {
            return;
        }

        let indices: number[] = [];
        let pairs: number[][] = [];

        this.cards.forEach( (card, i) => {
            if (indices.includes(i)) {
                return;
            }
            let j = this.cards.findIndex((c,j) => c.code === card.code && j != i);
            indices.push(...[i,j]);
            pairs.push([i+1, j+1]);
        })

        console.log(pairs);
    }

    goHome() {
        this.gameService.goHome();
    }

}
