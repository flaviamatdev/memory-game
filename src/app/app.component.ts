import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from './services/dialog.service';
import { GameService } from './services/game.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    menuList: MenuItem[] = [];

    constructor(
        private router: Router,
        private gameService: GameService,
        private dialogService: DialogService,
    ) {}

    ngOnInit(): void {
        this._setMenu();
    }

    private _setMenu() {
        this.menuList = [
            {
                icon: 'home',
                text: 'Início',
                routerLink: '/',
            },
            {
                icon: 'construction',
                text: 'Crie seu jogo',
                routerLink: '/game-builder',
            },
            {
                icon: 'extension',
                text: 'Demo',
                routerLink: '/game-builder/demo',
            },
            {
                icon: 'copyright',
                text: 'Créditos',
                routerLink: '/credits',
            },
        ]
    }

    get toolbarTitle() {
        return this.gameService.toolbarTitle;
    }

    goTo(menuItem: MenuItem) {        
        if (this.gameService.isPlaying) {
            return this.dialogService.openLiveGameConfirmationDialog(() => {
                this.gameService.liveGame();
                this.router.navigateByUrl(menuItem.routerLink);
            });
        }

        this.router.navigateByUrl(menuItem.routerLink);
    }

}

class MenuItem {
    icon: string;
    text: string;
    routerLink: string;
}
