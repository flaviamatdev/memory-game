import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { BackgroundImageFormComponent } from './game-config-form/background-image-form/background-image-form.component';
import { GameConfigFormComponent } from './game-config-form/game-config-form.component';
import { CardImagesFormComponent } from './game-config-form/card-images-form/card-images-form.component';
import { HomeComponent } from './home/home.component';
import { CardImagesUrlInputComponent } from './game-config-form/card-images-url-input/card-images-url-input.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent, 
        GameConfigFormComponent,
        BackgroundImageFormComponent,
        CardImagesFormComponent,
        CardImagesUrlInputComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        ReactiveFormsModule,
        FormsModule,
        InputModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
