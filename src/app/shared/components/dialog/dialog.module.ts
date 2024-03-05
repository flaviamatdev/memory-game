import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

@NgModule({
    declarations: [
        ConfirmationDialogComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule,
    ]
})
export class DialogModule { }
