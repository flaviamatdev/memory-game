import { Component } from '@angular/core';
import { VALUES } from 'src/app/shared/constants/global.values';
import { GAME_BUILDER_TRANSLATION } from '../../../game-builder-values';

@Component({
    selector: 'app-card-image-filename-example-dialog',
    templateUrl: './card-image-filename-example-dialog.component.html',
    styleUrls: ['./card-image-filename-example-dialog.component.scss']
})
export class ImageFilenameExampleDialogComponent {

    readonly TRANSLATION = GAME_BUILDER_TRANSLATION.diffImagesPerPairDialog;
    readonly SEP = VALUES.upload.fileNameSeparator;
    
}
