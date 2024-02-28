import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardIdTypeEnum, CardIdTypeName } from 'src/app/shared/enums/card-id-type.enum';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    cardIds: any[] = [];

    constructor(private router: Router) { }

    ngOnInit() {
        this._setCardIdInfo();
    }

    private _setCardIdInfo() {
        const imgPath = 'assets/images/card-id/card_id_';
        const cardIdTypeName = CardIdTypeName;
        
        this.cardIds = [
            {
                src: `${imgPath}numbers.png`,
                text: {
                    title: cardIdTypeName[CardIdTypeEnum.NUMBERS],
                    bottom: 'padrão'
                }
            },
            {
                src: `${imgPath}row_column.png`,
                text: {
                    title: cardIdTypeName[CardIdTypeEnum.ROW_COLUMN],
                    bottom: 'explorar localização no plano'
                }
            },
            {
                src: `${imgPath}icons.png`,
                text: {
                    title: cardIdTypeName[CardIdTypeEnum.ICONS],
                    bottom: 'para crianças ainda não alfabetizadas'
                }
            }
        ]
    }

    buildGame() {
        this.router.navigateByUrl('builder');
    }

}
