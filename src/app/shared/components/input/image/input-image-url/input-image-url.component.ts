import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-image-url',
    templateUrl: './input-image-url.component.html',
    styleUrls: ['./input-image-url.component.scss']
})
export class InputImageUrlComponent implements OnInit {

    @Input() labelTranslate: any;
    @Input() label: string;
    @Input() form: FormGroup;
    @Input() controlName: string;

    formControl: AbstractControl;

    constructor() { }

    ngOnInit(): void {
        this.formControl = this.form.get(this.controlName);
    }

    deleteUrl() {
        this.formControl.setValue(null);
    }

}
