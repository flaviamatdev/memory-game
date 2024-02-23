import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { CardPositionIdTypeEnum } from 'src/app/shared/enums/card-position-id-type.enum';
import { Card } from 'src/app/shared/model/card';

@Component({
    selector: 'app-memory-card',
    templateUrl: './memory-card.component.html',
    styleUrls: ['./memory-card.component.scss']
})
export class MemoryCardComponent implements OnInit {

    readonly FRONT_ID_TYPE = CardPositionIdTypeEnum;

    @Input() card!: Card;

    @Output() onSelect = new EventEmitter<Card>();

    frontIdType: CardPositionIdTypeEnum;

    private _isRotated: boolean;

    constructor(private gameService: GameService) { }

    get isRotated(): boolean {
		return this._isRotated;
	}

    ngOnInit(): void {
        this.frontIdType = this.gameService.config.cardPositionIdType;
        this.gameService.getCoveredCards().subscribe(coveredCards => 
            coveredCards.map(card => this._isRotated = (card.id == this.card.id) ? false : this._isRotated)
        );
    }

    onClick() {
        this._isRotated = true;
        this.onSelect.emit(this.card);
    }

}
