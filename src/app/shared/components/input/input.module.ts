import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputLabelComponent } from './input-label/input-label.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { SelectComponent } from './select/select.component';
import { UploadImageComponent } from './image/upload-image/upload-image.component';
import { InputImageComponent } from './image/input-image/input-image.component';
import { RadioGroupModelComponent } from './radio-group-model/radio-group-model.component';
import { InputImageUrlMultipleComponent } from './image/input-image-url-multiple/input-image-url-multiple.component';
import { ImagePreviewComponent } from './image/image-preview/image-preview.component';

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
        InputImageUrlMultipleComponent,
        ImagePreviewComponent,
    ],
    exports: [
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        UploadImageComponent,
        InputImageComponent,
        RadioGroupModelComponent,
        InputImageUrlMultipleComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
