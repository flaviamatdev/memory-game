import { Component, Input } from '@angular/core';
import { GameComponent } from '../game/game.component';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    @Input() parent: GameComponent;

}
