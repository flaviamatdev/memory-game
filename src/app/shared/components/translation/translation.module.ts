import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { TranslationMenuComponent } from './translation-menu/translation-menu.component';

@NgModule({
    declarations: [
        TranslationMenuComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TranslateModule,
    ],
    exports: [
        TranslationMenuComponent
    ]
})
export class TranslationModule { }
