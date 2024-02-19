import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/model/card';
import { GameService } from '../services/game.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

    constructor(private gameService: GameService) { }

    cardCount: number = 8;
    cards: Card[] = [];
    boardWidth: number;

    ngOnInit(): void {
        this.newGame();
    }

    newGame() {
        this.gameService.getCards(this.cardCount).subscribe(cards => { 
            this.cards = cards;
            console.log(cards)
            this.boardWidth = this.cardCount / 2 * 90;
        });
    }

    changeCount($value: number) {
        this.cardCount = $value;
    }

}
