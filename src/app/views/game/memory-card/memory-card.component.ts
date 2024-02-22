import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-memory-card',
    templateUrl: './memory-card.component.html',
    styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

    constructor(private gameService: GameService) { }

    @Input() card!: Card;

    @Output() onSelect = new EventEmitter<Card>();

    private _isRotated: boolean;

    get isRotated(): boolean {
		return this._isRotated;
	}

    ngOnInit(): void {
        this.gameService.getCoveredCards().subscribe(coveredCards => 
            coveredCards.map(card => this._isRotated = (card.id == this.card.id) ? false : this._isRotated)
        );
    }

    onClick() {
        this._isRotated = true;
        this.onSelect.emit(this.card);
    }

}
