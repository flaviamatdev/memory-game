import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-abstract-input',
    template: '',
    styleUrls: []
})
export class AbstractInputComponent {

    @Input() labelTranslate: any;
    @Input() label: string;
    @Input() labelComment: string;
    @Input() form: FormGroup;
    @Input() controlName: string;
    @Input() flexDirectionRow = false;
    @Input() disabled = false;

    @Output() onChange = new EventEmitter<any>();
    
    protected _originalRequired: boolean;

    protected _setOriginalRequired() {
        this._originalRequired = this.isRequired;
    }

    protected checkForm() {
        if(!this.form) {
            this.controlName = 'model';

            this.form = new FormGroup({
                model: new FormControl()
            });
        }
    }

    get formControl() {
        return this.form?.controls[this.controlName];
    }

    get isRequired() {
        return this.formControl?.hasError('required') || false;
    }

    get isInvalid() {
        return this.hasError('invalid');
    }

    hasError(errorKey: string) {
        let formControl = this.formControl;
        return !this.isRequired && (formControl?.invalid || formControl?.hasError(errorKey));
    }

    get inputClass() {
        return {
            'd-flex-row': this.flexDirectionRow,
            'd-flex-col': !this.flexDirectionRow,
        }
    }

    get getSelectValue() {
        try {
            return this.formControl.value;
        } 
        catch (error) {
            return null;
        }
    }

    protected _setAsInvalid() {
        let control = this.formControl;
        control.setErrors({'invalid': true});
        control.markAsTouched();
    }

    protected _setAsValidByOriginalRequired() {
        let control = this.formControl;
        control.setErrors(this._originalRequired ? {'required': true} : null);
        control.markAsTouched();
    }

}
