import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { CardIdTypeEnum } from 'src/app/shared/enums/card-id-type.enum';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-memory-card',
    templateUrl: './memory-card.component.html',
    styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

    @Input() card!: Card;

    @Output() onSelect = new EventEmitter<Card>();

    showFrontAsIcon: boolean;

    private _isRotated: boolean;

    constructor(private gameService: GameService) { }

    get isRotated(): boolean {
		return this._isRotated;
	}

    ngOnInit(): void {
        this.showFrontAsIcon = (this.gameService.config.cardIdType === CardIdTypeEnum.ICONS);

        this.gameService.getCoveredCards().subscribe(coveredCards => 
            coveredCards.map(card => this._isRotated = (card.id == this.card.id) ? false : this._isRotated)
        );
    }

    onClick() {
        this._isRotated = true;
        this.onSelect.emit(this.card);
    }

}
