import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { ImagePreviewComponent } from './image/image-preview/image-preview.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SelectImageSrcTypeComponent } from './select/select-image-src-type/select-image-src-type.component';
import { SelectYesNoComponent } from './select/select-yes-no/select-yes-no.component';
import { SelectComponent } from './select/select/select.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        TranslateModule,
    ],
    declarations: [
        InputLabelComponent,
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        SelectImageSrcTypeComponent,
        SelectYesNoComponent,
        ImagePreviewComponent,
        UploadComponent,
    ],
    exports: [
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        SelectImageSrcTypeComponent,
        SelectYesNoComponent,
        ImagePreviewComponent,
        UploadComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
