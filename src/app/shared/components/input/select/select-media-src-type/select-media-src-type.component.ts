import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { MediaSourceTypeEnum } from 'src/app/shared/enums/media-src-type.enum';
import { SRC_TYPE_TRANSLATION_VALUES } from './select-media-src-type-values';

@Component({
    selector: 'app-select-media-src-type',
    templateUrl: './select-media-src-type.component.html',
    styleUrls: []
})
export class SelectMediaSrcTypeComponent extends SelectComponent implements OnInit {

    readonly TRANSLATION = SRC_TYPE_TRANSLATION_VALUES;

    ngOnInit(): void {
        let translation = (this.multiple ? 
            this.TRANSLATION.multiple : 
            this.TRANSLATION.nonMultiple
        );

        this.labelTranslate = translation.input;
        
        this.options = [
            { 
                id: MediaSourceTypeEnum.UPLOAD, 
                label: translation.options.upload
            },
            { 
                id: MediaSourceTypeEnum.URL, 
                label: translation.options.url
            },
        ];
    }

    // override
    onChangeSelection($eventValue: any) {
        this.onChange.emit($eventValue);
    }

}
