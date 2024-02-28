import { Component } from '@angular/core';
import { VALUES } from 'src/app/shared/constants/global.values';

@Component({
    selector: 'app-card-image-filename-example-dialog',
    templateUrl: './card-image-filename-example-dialog.component.html',
    styleUrls: ['./card-image-filename-example-dialog.component.scss']
})
export class ImageFilenameExampleDialogComponent {

    readonly SEP = VALUES.upload.fileNameSeparator;
    
}
