import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../translation.service';
import { TRANSLATION_VALUES } from './translation-values';

@Component({
    selector: 'app-translation-menu',
    templateUrl: './translation-menu.component.html',
    styleUrls: ['./translation-menu.component.scss']
})
export class TranslationMenuComponent implements OnInit {

    readonly VALUES = TRANSLATION_VALUES;

    languages: any[] = [];
    selectedLanguage: string;

    constructor(
        private service: TranslationService
    ) { }

    ngOnInit(): void {
        this._setSelectedLang();
        this.languages = this.service.getAllLanguages().map(lang => this._getLangObj(lang));
    }

    private _setSelectedLang() {
        this.selectedLanguage = this.service.getLang().toUpperCase();
    }

    private _getLangObj(lang: string) {
        return {
            lang: lang,
            title: lang.toUpperCase(),
            flag: `assets/images/lang-flags/${lang}-icon-lang.png`,
            tooltip: `TRANSLATION_ACRONYM.${lang}`
        }
    }

    changeLanguage(lang: string) {
        this.service.setLang(lang);
        this._setSelectedLang();
    }

}
