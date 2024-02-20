import { Component, Input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
    selector: 'app-input-number',
    templateUrl: './input-number.component.html',
    styleUrls: [
        './input-number.component.scss',
        '../abstract-input.component.scss'
    ]
})
export class InputNumberComponent extends AbstractInputComponent {

    @Input() min: number = null;
    @Input() max: number = null;

    sendValueChange($event: any) {
        let value: number = $event?.target?.valueAsNumber;
        if(isNaN(value)) {
            value = null;
        }
        this.onChange.emit(value);
    }

}
