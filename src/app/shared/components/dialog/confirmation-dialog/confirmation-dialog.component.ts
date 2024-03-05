import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DIALOG_TRANSLATION } from '../dialog-values';
import { ConfirmationDialogData } from './confirmation-dialog-data';

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmation-dialog.component.html',
    styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {

    readonly TRANSLATION = DIALOG_TRANSLATION;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
    ) { }

}
