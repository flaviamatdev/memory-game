import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';

@Component({
    selector: 'app-select-yes-no',
    templateUrl: './select-yes-no.component.html',
    styleUrls: []
})
export class SelectYesNoComponent extends SelectComponent implements OnInit {

    ngOnInit(): void {
        this.options = [
            { 
                id: true, 
                label: { 
                    pt: 'Sim', 
                    en: 'Yes' 
                } 
            },
            { 
                id: false, 
                label: {
                    pt: 'Não',
                    en: 'No'
                }
            }
        ];
    }

}
