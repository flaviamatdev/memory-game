import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { GameBuilderFormDemoComponent } from './game-builder-form-demo/game-builder-form-demo.component';
import { BackgroundImageFormComponent } from './game-builder-form/background-image-form/background-image-form.component';
import { CardFormComponent } from './game-builder-form/cards/card-form/card-form.component';
import { CardImageFilenameExampleDialogComponent } from './game-builder-form/cards/card-image-filename-example-dialog/card-image-filename-example-dialog.component';
import { CardPairUrlInputsComponent } from './game-builder-form/cards/card-urls/card-pair-url-inputs/card-pair-url-inputs.component';
import { CardUrlsInputComponent } from './game-builder-form/cards/card-urls/card-urls.component';
import { GameBuilderFormComponent } from './game-builder-form/game-builder-form.component';
import { GameBuilderComponent } from './game-builder/game-builder.component';

const routes: Routes = [
    {
        path: '',
        component: GameBuilderComponent,
    },
    {
        path: 'demo',
        component: GameBuilderFormDemoComponent,
    }
]

@NgModule({
    declarations: [
        GameBuilderComponent,
        GameBuilderFormComponent,
        BackgroundImageFormComponent,
        CardFormComponent,
        CardImageFilenameExampleDialogComponent,
        CardUrlsInputComponent,
        CardPairUrlInputsComponent,
        GameBuilderFormDemoComponent,
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
