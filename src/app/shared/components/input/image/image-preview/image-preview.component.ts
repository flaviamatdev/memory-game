import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-image-preview',
    templateUrl: './image-preview.component.html',
    styleUrls: ['./image-preview.component.scss']
})
export class ImagePreviewComponent {

    @Input() src: string;

    @Output() onDelete = new EventEmitter();

    deleteFile() {
        this.src = null;
        this.onDelete.emit();
    }

}
