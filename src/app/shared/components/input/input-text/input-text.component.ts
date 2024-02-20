import { Component, Input } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    styleUrls: [
        './input-text.component.scss',
        '../abstract-input.component.scss'
    ]
})
export class InputTextComponent extends AbstractInputComponent {

    @Input() placeholder = '';
    @Input() minLength: number;
    @Input() maxLength = 100;
    @Input() title = '';
    
    clear() {
        this.formControl.setValue(null);
    }

    sendChangeEvent($event) {
        if($event || !$event.target) {
            return;
        }

        this.onChange.emit($event.target.value);
    }

    protected _eventTypeDeleteContent($event: any) {
        return $event?.inputType === 'deleteContentBackward';
    }

}
