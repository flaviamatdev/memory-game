import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from "sweetalert2";

@Injectable({
    providedIn: 'root'
})
export class ToastService {

    success(message: string, milliseconds = 5000) {
        this._showToast(message, 'success', '#51A351', milliseconds);
    }

    error(message: string, milliseconds = 5000) {
        this._showToast(message, 'error', '#BD362F', milliseconds);
    }

    info(message: string, milliseconds: number = 5000) {
        this._showToast(message, 'info', '#389BB7', milliseconds);
    }

    warning(message: string, milliseconds = 5000) {
        this._showToast(message, 'warning', '#F89406', milliseconds);
    }

    close() {
        Swal.close();
    }

    showing() {
        return Swal.isVisible();
    }

    private _showToast(message: string, type: SweetAlertIcon, backgroundColor: string, milliseconds: number) {
        Swal.mixin({
            toast: true,
            position: 'top',
            timer: milliseconds,
            showConfirmButton: false,
            showCloseButton: !milliseconds,
            customClass : {
                title: 'custom-toast-title'
            },
            background: backgroundColor,
        })
        .fire(message, '', type);
    }

    showInvalidFormError() {
        this.error('Preencha todos os campos obrigatórios');
    }
    
}
