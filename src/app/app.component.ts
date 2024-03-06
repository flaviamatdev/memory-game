import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MENUS } from './menu-values';
import { DialogService } from './services/dialog.service';
import { GameService } from './services/game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    readonly MENU_LIST = MENUS;

    constructor(
        private router: Router,
        private gameService: GameService,
        private dialogService: DialogService,
    ) {}

    ngOnInit(): void {
        this._resetToolbarTitle();
    }

    onChangeLanguage() {
        this._resetToolbarTitle();
    }

    private _resetToolbarTitle() {
        this.gameService.setToolbarTitleDefault();
    }

    get toolbarTitle() {
        return this.gameService.toolbarTitle;
    }

    goTo(menuItem: any) {        
        if (this.gameService.isPlaying) {
            return this.dialogService.openLiveGameConfirmationDialog(() => {
                this.gameService.liveGame();
                this.router.navigateByUrl(menuItem.routerLink);
            });
        }

        this._resetToolbarTitle();
        this.router.navigateByUrl(menuItem.routerLink);
    }

}
