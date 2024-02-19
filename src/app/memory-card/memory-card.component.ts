import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';
import { Card } from '../shared/model/card';

@Component({
    selector: 'app-memory-card',
    templateUrl: './memory-card.component.html',
    styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit, DoCheck {

    constructor(private gameService: GameService) { }

    @Input() card!: Card;
    @Input() id: number;

    icon: string[] = [];
    private _isRotated: boolean;

    get isRotated(): boolean {
		return this._isRotated;
	}

    ngOnInit(): void {
        this._setIcon();
        this.gameService.getCoveredCards().subscribe(coveredCards => 
            coveredCards.map(card => this._isRotated = (card.id == this.id) ? false : this._isRotated)
        );
    }

    ngDoCheck(): void {
        this._setIcon();
    }

    private _setIcon() {
        this.icon = [this.card?.type, this.card?.code];
    }

    onClick() {
        this._isRotated = true;
        this.gameService.controlCards({ 
            id: this.id, 
            code: this.card?.code,
            type: this.card?.type 
        });
    }

}
