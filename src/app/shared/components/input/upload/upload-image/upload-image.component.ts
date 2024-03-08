import { Component } from '@angular/core';
import { UploadComponent } from '../upload/upload.component';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: []
})
export class UploadImageComponent extends UploadComponent {

    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

}
