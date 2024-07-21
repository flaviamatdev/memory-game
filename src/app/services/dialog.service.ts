import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogData } from '../shared/components/dialog/confirmation-dialog/confirmation-dialog-data';
import { ConfirmationDialogComponent } from '../shared/components/dialog/confirmation-dialog/confirmation-dialog.component';
import { DIALOG_TRANSLATION } from '../shared/components/dialog/dialog-values';
import { TranslationService } from '../shared/components/translation/translation.service';

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private dialog: MatDialog,
        private translationService: TranslationService,
    ) { }

    private _getWidthAccordingScreen(widthPercent?: number) {
        return (window.screen.width < 700 ? 
            90 : 
            widthPercent || 60
        ) + '%';
    }

    openConfirmationDialog(data: ConfirmationDialogData) {
        const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
            width: this._getWidthAccordingScreen(40),
            data: data
        });

        dialogRef.afterClosed().subscribe(confirm => {
            if (!confirm) {
                return;
            }
            data.okCallback();
        });
    }

    openLiveGameConfirmationDialog(callback: Function, confirmQuestion?: string) {
        this.openConfirmationDialog({
            header: {
                icon: 'pan_tool',
                iconColor: 'darkorange',
                title: this.translationService.getTranslation(DIALOG_TRANSLATION.gameIsNotOverWarning)
            },
            bodyText: confirmQuestion ?? this.translationService.getTranslation(DIALOG_TRANSLATION.liveGameConfirmation),
            okCallback: callback
        });
    }

    openCustomDialog(component: any, width: number, data: any = {}) {
        this.dialog.open(component, {
            width: this._getWidthAccordingScreen(width),
            data: data
        });
    }

}
