import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { BackgroundImageFormComponent } from './game-builder-form/background-image-form/background-image-form.component';
import { ImageFilenameExampleDialogComponent } from './game-builder-form/card-images/card-image-filename-example-dialog/card-image-filename-example-dialog.component';
import { CardFormComponent } from './game-builder-form/card-images/card-form/card-form.component';
import { CardImagesUrlInputComponent } from './game-builder-form/card-images/card-images-url-input/card-images-url-input.component';
import { GameBuilderFormComponent } from './game-builder-form/game-builder-form.component';
import { GameBuilderComponent } from './game-builder/game-builder.component';
import { CardUrlsComponent } from './game-builder-form/card-images/card-urls/card-urls.component';

const routes: Routes = [
    {
        path: '',
        component: GameBuilderComponent,
    },
    {
        path: 'demo',
        component: GameBuilderComponent,
        data: { demo: true }
    }
]

@NgModule({
    declarations: [
        GameBuilderComponent,
        GameBuilderFormComponent,
        BackgroundImageFormComponent,
        CardFormComponent,
        CardImagesUrlInputComponent,
        ImageFilenameExampleDialogComponent,
        CardUrlsComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        TranslateModule,
        InputModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class GameBuilderModule { }
