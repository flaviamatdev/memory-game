import { Component, Input, OnInit } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends AbstractInputComponent implements OnInit {

    readonly ACCEPT_IMG = ['image/png', 'image/jpeg'];

    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;

    constructor() {
        super();
    }

    ngOnInit(): void {
    }

    onSelectFiles($event: any) {
        let files: File[] = $event?.target?.files;
        this.formControl.setValue(this.multiple || this.selectAllDir ? files : files[0]);
    }

}
