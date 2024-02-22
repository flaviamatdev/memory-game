import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ConfirmationDialogComponent } from './live-game-confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [
        ConfirmationDialogComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
    ]
})
export class DialogModule { }
