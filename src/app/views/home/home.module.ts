import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { GameConfigFormComponent } from './game-config-form/game-config-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/components/input/input.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent, 
        GameConfigFormComponent
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
