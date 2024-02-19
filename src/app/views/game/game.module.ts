import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { GameComponent } from './game/game.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    declarations: [
        GameComponent,
        MemoryCardComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        MaterialModule,
    ],
    exports: [
        GameComponent
    ]
})
export class GameModule { }
