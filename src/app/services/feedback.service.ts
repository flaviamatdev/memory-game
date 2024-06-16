import { Injectable } from '@angular/core';
import { ToastService } from './toast.service';
import { DialogService } from './dialog.service';
import { TranslationService } from '../shared/components/translation/translation.service';
import { GameConfigError } from '../shared/error/game-config-error';
import { ERROR_MSG_TRANSLATION } from '../shared/constants/error-message.values';
import { ITranslation } from '../shared/model/translation.model';

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {

    constructor(
        private toastService: ToastService,
        private dialogService: DialogService,
        private translationService: TranslationService
    ) { }

    get dialog() {
        return this.dialogService;
    }

    handleError(error: any): ITranslation {
        if ( !(error instanceof GameConfigError) ) {
            return this.handleUnexpectedError();
        }

        this.toastErrorTranslation(error.translation);
        return error.translation;
    }

    handleUnexpectedError() {
        const errorTranslation = ERROR_MSG_TRANSLATION.unexpectedError;
        this.toastErrorTranslation(errorTranslation);
        return errorTranslation;
    }

    toastErrorTranslation(translation: ITranslation) {
        this.toastService.error(
            this.translationService.getTranslation(translation)
        );
    }
}
