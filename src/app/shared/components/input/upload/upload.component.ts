import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { TranslationService } from '../../translation/translation.service';
import { AbstractInputComponent } from '../abstract-input.component';
import { UPLOAD_TRANSLATION } from './upload-values';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss', '../abstract-input.component.scss']
})
export class UploadComponent extends AbstractInputComponent implements OnInit {

    readonly TRANSLATION = UPLOAD_TRANSLATION;

    @Input() isImage: boolean = false;
    @Input() accept: any;
    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;

    @Output() onClearInput = new EventEmitter();
    @Output() onUpload = new EventEmitter();

    btnTranslation: any;
    singleChosedFileName: string;

    @ViewChild('uploadInput') private _inputElem: ElementRef;
    
    private _numFiles: number = 0;
    private _fileUploads: FileUpload[];
    private _fileTypeTranslationParamKey: string = 'regular';

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

        if (this.isImage) {
            this.accept = FileUpload.ACCEPT_IMG;
            this._fileTypeTranslationParamKey = 'image';
        }
    }

    reset() {
        this._fileUploads = [];
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
        this._fileUploads = [];
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
            allOk = allOk && (!this.accept || this.accept.includes(file.type));
        } while (allOk && i < this._numFiles);
        
        return {
            files: files, 
            allOk: allOk
        };
    }

    private _showOutAcceptErrorMsg() {
        let accept = this.accept.join(', ');
        let fileType = this.translationService.getTranslationObj(this.TRANSLATION.fileType[this._fileTypeTranslationParamKey]);
        let translation = (this.multiple ?
            this.TRANSLATION.multiple.acceptErrorMsg :
            this.TRANSLATION.nonMultiple.acceptErrorMsg
        );
        let msg = this.translationService.getTranslationObj(translation, { 
            fileType: fileType,
            accept: accept 
        });
        this.toastService.error(msg, 7000);
    }

    private _readFile(file: File) {
        const reader = new FileReader();
        reader.onload = (fileReaderEvent: any) => {
            this._fileUploads.push(new FileUpload(fileReaderEvent.target.result, file.name));
            if (this._fileUploads.length == this._numFiles) {
                this._finishReadFiles();
            }
        }
        reader.readAsDataURL(file);
    }

    private _finishReadFiles() {
        this.formControl?.setValue(this._fileUploads);
        this.onUpload.emit(this._fileUploads);
        this.singleChosedFileName = this._fileUploads[0].filename;
    }

}
