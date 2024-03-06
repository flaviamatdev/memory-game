import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
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
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        TranslateModule,
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HomeModule { }
