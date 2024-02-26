import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-radio-group-model',
    templateUrl: './radio-group-model.component.html',
    styleUrls: ['./radio-group-model.component.scss']
})
export class RadioGroupModelComponent implements OnInit {

    @Input() options: any[] = [];
    @Input() defaultOptionValue: any;
    @Input() flexDirectionRow: boolean = false;

    @Output() onChange = new EventEmitter();

    model: any;
    optionsClass: any;


    ngOnInit(): void {
        this.model = this.defaultOptionValue;
        this.optionsClass = {
            'd-flex-row': this.flexDirectionRow,
            'd-flex-col': !this.flexDirectionRow,
        }
    }

    onSelectValue($value: any) {
        this.onChange.emit($value);
    }

}
