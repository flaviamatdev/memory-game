import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AbstractInputComponent } from '../abstract-input.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends AbstractInputComponent {

    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;

    @ViewChild('uploadInput') private _inputElem: ElementRef;
    private _numFiles: number = 0;
    private _base64Arr: any[];

    constructor(
        private toastService: ToastService
    ) {
        super();
    }


    onSelectFiles($event: any) {
        this._base64Arr = [];
        let { files, allOk } = this._extractFiles($event?.target?.files);

        if (!allOk) {
            this._inputElem.nativeElement.value = "";
            const accept = this.ACCEPT_IMG.map(x => x.replace('image/', '')).join(', ');
            this.toastService.error(`Pelo menos 1 arquivo selecionado está fora dos formatos de imagem aceitos: ${accept}. Tente novamente!`);
            return;
        }

        files.forEach(file => this._readFile(file));
    }

    private _extractFiles(fileList: FileList) {
        this._numFiles = fileList?.length ?? 0;

        let files: File[] = [];
        let allOk = true;
        let i = 0;
        do {
            let file = fileList.item(i++);
            files.push(file);
            allOk = allOk && this.ACCEPT_IMG.includes(file.type);
        } while (allOk && i < this._numFiles);
        
        return {
            files: files, 
            allOk: allOk
        };
    }

    private _readFile(file: File) {
        const reader = new FileReader();
        reader.onload = (fileReaderEvent: any) => {
            this._base64Arr.push(fileReaderEvent.target.result);
            if (this._base64Arr.length == this._numFiles) {
                this.formControl.setValue(this._base64Arr);
            }
        }
        reader.readAsDataURL(file);
    }

}
