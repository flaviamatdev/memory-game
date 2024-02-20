import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { AbstractInputComponent } from '../abstract-input.component';


@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent extends AbstractInputComponent implements OnInit, OnChanges {

    readonly ALL_OPTION = 'all';
    
    @Input() options: any[] = [];
    @Input() valueAttribute: string = 'id';
    @Input() labelAttribute: string = 'label';
    @Input() multiple = false;
    @Input() allOptionLabel: string;
    @Input() useFullOptionAsValue = false;

    @Output() onFinishedLoading = new EventEmitter<boolean>();

    showLoadingOptionsError: boolean = false;

    @ViewChild('allOption') 
    private _allOption: MatOption;
    
    private _allSelected = false;


    ngOnInit(): void {
        this.showLoadingOptionsError = false;
        this.checkForm();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.options && changes.options.currentValue == null) {
            this.showLoadingOptionsError = true;
        }
    }

    getOptionValue(option: any): any {
        if (this.useFullOptionAsValue) {
            return option;
        }
        return option[this.valueAttribute];
    }

    onChangeSelection($eventValue: any) {
        if (this.allOptionLabel && this.multiple) {
            this._onChangeSelectionMultiple($eventValue);
        }

        this.onChange.emit($eventValue);
    }

    private _onChangeSelectionMultiple($eventValue: any[]) {
        if (this._allSelected) {
            this.formControl.setValue([]);
            this._allSelected = false;
            return;
        }

        this._allSelected = $eventValue.includes(this.ALL_OPTION) || 
            $eventValue.length == this.options.length;

        if (this._allSelected) {
            this.formControl.setValue(
                this.options.map(option => option[this.valueAttribute])
            );
        }
    }

    get allOptionSelected() {
        return this._allOption?.selected || false;
    }

}
