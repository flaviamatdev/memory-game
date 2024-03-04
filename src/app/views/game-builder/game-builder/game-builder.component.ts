import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-game-builder',
    templateUrl: './game-builder.component.html',
    styleUrls: ['./game-builder.component.scss']
})
export class GameBuilderComponent implements OnInit {

    pageTitle: string = 'Monte o seu jogo';

    private _isDemo: boolean;

    constructor(
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.route.data?.subscribe(data => {
            this._isDemo = data.demo ?? false;
            if (this._isDemo) {
                this.pageTitle = 'Demo'
            }
        });
    }

    get isDemo() {
        return this._isDemo;
    }
    
}