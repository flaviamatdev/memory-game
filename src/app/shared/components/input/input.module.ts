import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { ImagePreviewComponent } from './image/image-preview/image-preview.component';
import { InputImageComponent } from './image/input-image/input-image.component';
import { UploadImageComponent } from './image/upload-image/upload-image.component';
import { InputLabelComponent } from './input-label/input-label.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { RadioGroupModelComponent } from './radio-group-model/radio-group-model.component';
import { SelectComponent } from './select/select/select.component';
import { SelectImageSrcTypeComponent } from './select/select-image-src-type/select-image-src-type.component';

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
        InputImageComponent,
        RadioGroupModelComponent,
        ImagePreviewComponent,
        SelectImageSrcTypeComponent,
    ],
    exports: [
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        UploadImageComponent,
        InputImageComponent,
        RadioGroupModelComponent,
        SelectImageSrcTypeComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
