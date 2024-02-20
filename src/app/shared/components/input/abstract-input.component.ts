import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-abstract-input',
    template: '',
    styleUrls: []
})
export class AbstractInputComponent {

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
        return this.form.controls[this.controlName];
    }

    get isRequired() {
        return this.formControl?.hasError('required') || false;
    }

    get isInvalid() {
        return this.hasError('invalid');
    }

    hasError(errorKey: string) {
        let formControl = this.formControl;
        return !this.isRequired && (formControl.invalid || formControl.hasError(errorKey));
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
        this._setFormControlAsInvalid(this.formControl);
    }

    protected _setFormControlAsInvalid(control: AbstractControl) {
        control.setErrors({'invalid': true});
        control.markAsTouched();
    }

    protected _setAsValidByOriginalRequired() {
        if (!this._originalRequired) {
            this._setAsValid();
            return;
        }

        this._setAsRequired();
    }

    protected _setAsValid() {
        this._setFormControlAsValid(this.formControl);
    }

    protected _setFormControlAsValid(control: AbstractControl) {
        control.setErrors(null);
        control.markAsTouched();
    }

    protected _setAsRequired(){
        this._setFormControlAsRequired(this.formControl);
    }

    protected _setFormControlAsRequired(control: AbstractControl){
        control.setErrors({'required': true});
        control.markAsTouched();
    }

}
