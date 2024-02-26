import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ImagePreviewComponent } from './image/image-preview/image-preview.component';
import { UploadImageComponent } from './image/upload-image/upload-image.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RadioGroupModelComponent } from './radio-group-model/radio-group-model.component';
import { SelectImageSrcTypeComponent } from './select/select-image-src-type/select-image-src-type.component';
import { SelectComponent } from './select/select/select.component';
import { SelectYesNoComponent } from './select/select-yes-no/select-yes-no.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
    ],
    declarations: [
        InputLabelComponent,
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        UploadImageComponent,
        RadioGroupModelComponent,
        SelectImageSrcTypeComponent,
        SelectYesNoComponent,
        ImagePreviewComponent,
    ],
    exports: [
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        UploadImageComponent,
        RadioGroupModelComponent,
        SelectImageSrcTypeComponent,
        SelectYesNoComponent,
        ImagePreviewComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
