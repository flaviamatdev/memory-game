import { Component } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';
import { CardImage } from 'src/app/shared/model/card-image.model';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: []
})
export class UploadImageComponent extends UploadComponent {

    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    // override
    getUploadFile = (fileReaderEvent: any, file: File): CardImage => {
        return new CardImage(fileReaderEvent.target.result, file.name);
    }

}
