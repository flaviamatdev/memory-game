import { AbstractControl, Validators } from "@angular/forms";

export class FormUtil {

    static setFormControlAsRequiredOrNot(control: AbstractControl, required: boolean) {
        if (required) {
            this.setFormControlAsRequired(control);
        } else {
            this.setFormControlAsNotRequired(control);
        }
    }

    static setFormControlAsRequired(control: AbstractControl) {
        control.reset();
        control.setValidators(Validators.required);
        control.updateValueAndValidity();
    }

    static setFormControlAsNotRequired(control: AbstractControl) {
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity();
    }

}
