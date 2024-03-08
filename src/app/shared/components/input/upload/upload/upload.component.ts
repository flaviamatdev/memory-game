import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { UploadFile } from 'src/app/shared/model/upload-file.model';
import { TranslationService } from '../../../translation/translation.service';
import { AbstractInputComponent } from '../../abstract-input.component';
import { UPLOAD_TRANSLATION } from '../upload-image-values';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.scss', '../../abstract-input.component.scss']
})
export class UploadComponent extends AbstractInputComponent implements OnInit {

    readonly TRANSLATION = UPLOAD_TRANSLATION;

    @Input() accept: any;
    @Input() fileTypeTranslationParamKey: string = 'regular';
    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;
    @Input() getUploadFileFn: Function;

    @Output() onClearInput = new EventEmitter();
    @Output() onUpload = new EventEmitter();

    btnTranslation: any;
    singleChosedFileName: string;

    @ViewChild('uploadInput') protected _inputElem: ElementRef;
    
    protected _numFiles: number = 0;
    protected _uploadFiles: UploadFile[];

    constructor(
        protected toastService: ToastService,
        protected translationService: TranslationService,
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
        this.getUploadFileFn = this.getUploadFileFn ?? this._getUploadFile
    }

    reset() {
        this._uploadFiles = [];
        this._clearInput();
        this.formControl.reset();
        this.singleChosedFileName = null;
    }

    protected _clearInput() {
        this._numFiles = 0;
        this._inputElem.nativeElement.value = "";
    }

    openInputFile() {
        this._inputElem.nativeElement.click();
    }

    onSelectFiles($event: any) {        
        this._uploadFiles = [];
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

    protected _extractFiles(fileList: FileList) {
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

    protected _showOutAcceptErrorMsg() {
        let accept = this.accept.join(', ');
        let fileType = this.translationService.getTranslationObj(this.TRANSLATION.fileType[this.fileTypeTranslationParamKey]);
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

    protected _readFile(file: File) {
        const reader = new FileReader();
        reader.onload = (fileReaderEvent: any) => {
            this._uploadFiles.push(this.getUploadFileFn(fileReaderEvent, file));
            if (this._uploadFiles.length == this._numFiles) {
                this._finishReadFiles();
            }
        }
        reader.readAsDataURL(file);
    }

    protected _getUploadFile = (fileReaderEvent: any, file: File): UploadFile => {
        return new UploadFile(fileReaderEvent.target.result, file.name);
    }

    protected _finishReadFiles() {
        this.formControl?.setValue(this._uploadFiles);
        this.onUpload.emit(this._uploadFiles);
        this.singleChosedFileName = this._uploadFiles[0].filename;
    }

}
