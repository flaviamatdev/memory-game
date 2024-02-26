import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { InputModule } from 'src/app/shared/components/input/input.module';
import { GameConfigFormComponent } from './game-config-form/game-config-form.component';
import { InputImageUrlsComponent } from './game-config-form/input-image-urls/input-image-urls.component';
import { HomeComponent } from './home/home.component';

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
        InputImageUrlsComponent
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
