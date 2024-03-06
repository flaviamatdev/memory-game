import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { CardImage } from 'src/app/shared/model/card-image.model';
import { TranslationService } from '../../../translation/translation.service';
import { AbstractInputComponent } from '../../abstract-input.component';
import { UPLOAD_TRANSLATION } from './upload-image-values';

@Component({
    selector: 'app-upload-image',
    templateUrl: './upload-image.component.html',
    styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent extends AbstractInputComponent implements OnInit {

    readonly TRANSLATION = UPLOAD_TRANSLATION;
    readonly ACCEPT_IMG = [ 'image/png', 'image/jpeg' ];

    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;

    @Output() onClearInput = new EventEmitter();

    btnTranslation: any;
    singleChosedFileName: string;

    @ViewChild('uploadInput') private _inputElem: ElementRef;
    
    private _numFiles: number = 0;
    private _images: CardImage[];

    constructor(
        private toastService: ToastService,
        private translationService: TranslationService,
    ) {
        super();
    }

    get numFiles() {
        return this._numFiles;
    }

    ngOnInit(): void {
        this.multiple = this.multiple || this.selectAllDir;
        this.btnTranslation = (this.multiple ? 
            this.TRANSLATION.multiple.btn : 
            this.TRANSLATION.nonMultiple.btn
        );
    }

    reset() {
        this._images = [];
        this._clearInput();
        this.formControl.reset();
        this.singleChosedFileName = null;
    }

    private _clearInput() {
        this._numFiles = 0;
        this._inputElem.nativeElement.value = "";
    }

    openInputFile() {
        this._inputElem.nativeElement.click();
    }

    onSelectFiles($event: any) {        
        this._images = [];
        let fileList: FileList = $event?.target?.files;

        if ( !(fileList?.length) || fileList.item(0) == null ) {
            this._clearInput();
            this.onClearInput.emit();
            return;
        }
        
        let { files, allOk } = this._extractFiles(fileList);
        if (!allOk) {
            this._clearInput();
            this._showOutAcceptErrorMsg();
            return;
        }

        files.forEach(file => this._readFile(file));
    }

    private _extractFiles(fileList: FileList) {
        this._numFiles = fileList.length ?? 0;

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

    private _showOutAcceptErrorMsg() {
        const accept = this.ACCEPT_IMG.map(x => x.replace('image/', '')).join(', ');
        let translation = (this.multiple ?
            this.TRANSLATION.multiple.acceptErrorMsg :
            this.TRANSLATION.nonMultiple.acceptErrorMsg
        );
        let msg = this.translationService.getTranslationObj(translation, { accept: accept });
        this.toastService.error(msg, 7000);
    }

    private _readFile(file: File) {
        const reader = new FileReader();
        reader.onload = (fileReaderEvent: any) => {
            this._images.push(new CardImage(fileReaderEvent.target.result, file.name));
            if (this._images.length == this._numFiles) {
                this._finishReadFiles();
            }
        }
        reader.readAsDataURL(file);
    }

    private _finishReadFiles() {
        this.formControl.setValue(this._images);
        this.singleChosedFileName = this._images[0].filename;
    }

}
