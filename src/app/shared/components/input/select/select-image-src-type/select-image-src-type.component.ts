import { Component, OnInit } from '@angular/core';
import { SelectComponent } from '../select/select.component';
import { ImageSourceTypeEnum } from 'src/app/shared/enums/image-src-type.enum';

@Component({
    selector: 'app-select-image-src-type',
    templateUrl: './select-image-src-type.component.html',
    styleUrls: ['./select-image-src-type.component.scss']
})
export class SelectImageSrcTypeComponent extends SelectComponent implements OnInit {

    ngOnInit(): void {
        let labels = this._getLabels();
        this.label = this.label ?? labels.title;

        this.options = [
            { 
                id: ImageSourceTypeEnum.UPLOAD, 
                label: labels.upload
            },
            { 
                id: ImageSourceTypeEnum.URL, 
                label: labels.url
            },
        ];
    }

    private _getLabels() {
        let suffix = '', imgSuffix = 'm';
        if (this.multiple) {
            suffix = 's';
            imgSuffix = 'ns';
        }

        return {
            title: `Como deseja inserir a${suffix} image${imgSuffix}?`,
            url: `Inserir link${suffix} da${suffix} image${imgSuffix}`,
            upload: `Enviar arquivo${suffix}`
        }
    }

    // override
    onChangeSelection($eventValue: any) {
        this.onChange.emit($eventValue);
    }

}
