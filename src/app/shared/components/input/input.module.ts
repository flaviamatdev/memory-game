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
    ],
    exports: [
        InputNumberComponent,
        InputTextComponent,
        SelectComponent,
        UploadImageComponent,
        InputImageComponent,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputModule { }
