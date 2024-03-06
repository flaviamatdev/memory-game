import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
    {
        path: '',
        component: CreditsComponent
    }
]

@NgModule({
    declarations: [
        CreditsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        TranslateModule,
    ]
})
export class CreditsModule { }
