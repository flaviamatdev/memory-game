import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { CardSourceTypeEnum } from 'src/app/shared/enums/card-src-type.enum';
import { SRC_TYPE_TRANSLATION_VALUES } from './select-image-src-type-values';

@Component({
    selector: 'app-select-image-src-type',
    templateUrl: './select-image-src-type.component.html',
    styleUrls: ['./select-image-src-type.component.scss']
})
export class SelectImageSrcTypeComponent extends SelectComponent implements OnInit {

    readonly TRANSLATION = SRC_TYPE_TRANSLATION_VALUES;

    ngOnInit(): void {
        let translation = (this.multiple ? 
            this.TRANSLATION.multiple : 
            this.TRANSLATION.nonMultiple
        );

        this.labelTranslate = translation.input;
        
        this.options = [
            { 
                id: CardSourceTypeEnum.UPLOAD, 
                label: translation.options.upload
            },
            { 
                id: CardSourceTypeEnum.URL, 
                label: translation.options.url
            },
        ];
    }

    // override
    onChangeSelection($eventValue: any) {
        this.onChange.emit($eventValue);
    }

}
