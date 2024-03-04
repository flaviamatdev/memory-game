import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/material.module';
import { DialogModule } from 'src/app/shared/components/dialog/dialog.module';
import { GameComponent } from './game/game.component';
import { MemoryCardComponent } from './memory-card/memory-card.component';

const routes: Routes = [
    {
        path: '',
        component: GameComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FontAwesomeModule,
        MaterialModule,
        DialogModule,
    ],
    declarations: [
        GameComponent,
        MemoryCardComponent,
    ],
})
export class GameModule { }
