import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

    @Input() title: string = 'Memory Game';

    constructor(private gameService: GameService) { }

    cards: Card[] = [];
    boardWidth: number;

    ngOnInit(): void {
        this.newGame();
    }

    newGame() {
        this.gameService.getCards().subscribe(cards => { 
            this.cards = cards;
            console.log(cards)
            // let numPairs = this.cardCount / 2;
            // this.boardWidth = numPairs * 100 + (numPairs - 1) * 16;
        });
    }

    goHome() {
        this.gameService.goHome();
    }

}
