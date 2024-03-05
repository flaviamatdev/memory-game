import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HOME_TRANSLATIONS } from './home-values';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {

    readonly TRANSLATIONS = HOME_TRANSLATIONS;

    constructor(private router: Router) { }   

    buildGame() {
        this.router.navigateByUrl('game-builder');
    }

    playDemo() {
        this.router.navigateByUrl('game-builder/demo');
    }

}
