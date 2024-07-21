import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ToastService } from 'src/app/services/toast.service';
import { FileUpload } from 'src/app/shared/model/file-upload.model';
import { FileUploadTypeEnum } from '../../../enums/file-upload-type.enum';
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

    @Input() fileType: FileUploadTypeEnum = FileUploadTypeEnum.IMAGE;
    @Input() multiple: boolean = false;
    @Input() selectAllDir: boolean = false;

    @Output() onClearInput = new EventEmitter();
    @Output() onUpload = new EventEmitter();

    accept: string;
    btnTranslation: any;
    singleChosedFileName: string;

    @ViewChild('uploadInput') private _inputElem: ElementRef;
    
    private _numFiles: number = 0;
    private _fileUploads: FileUpload[];

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
        this._setAccept();
        this.multiple = this.multiple || this.selectAllDir;
        this.btnTranslation = (this.multiple ? 
            this.TRANSLATION.multiple.btn : 
            this.TRANSLATION.nonMultiple.btn
        );
    }

    private _setAccept() {
        this.accept = ({
            [FileUploadTypeEnum.AUDIO]: 'audio/*',
            [FileUploadTypeEnum.IMAGE]: 'image/*',
            [FileUploadTypeEnum.JSON]:  'application/json',
        })[this.fileType];
    }

    reset() {
        this._fileUploads = [];
        this._clearInput();
        this.formControl?.reset();
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
        
        let { files, typeOk } = this._extractFiles(fileList);
        if (!typeOk) {
            this._clearInput();
            this._showOutAcceptErrorMsg();
            return;
        }

        files.sort((a,b) => a.name.localeCompare(b.name))
            .forEach(file => this._readFile(file));
    }

    private _extractFiles(fileList: FileList) {
        this._numFiles = fileList.length ?? 0;
        
        const accept = this.accept.replace('*', '');
        let files: File[] = [];
        let typeOk = true;
        let i = 0;
        do {
            let file = fileList.item(i++);
            files.push(file);
            typeOk = typeOk && file.type.startsWith(accept);
        } while (typeOk && i < this._numFiles);
        
        return {
            files: files, 
            typeOk: typeOk
        };
    }

    private _showOutAcceptErrorMsg() {
        let translation = (this.multiple ?
            this.TRANSLATION.multiple.acceptErrorMsg :
            this.TRANSLATION.nonMultiple.acceptErrorMsg
        );
        let fileTypeTranslation = this.translationService.getTranslation(this.TRANSLATION.fileType[this.fileType]);
        let msg = this.translationService.getTranslation(translation, { 
            fileType: fileTypeTranslation,
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
        this.singleChosedFileName = this._fileUploads[0].filename;
        this.onUpload.emit(this._fileUploads);
    }

}
