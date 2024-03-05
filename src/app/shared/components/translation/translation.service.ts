import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class TranslationService {

    private _browserLang: any;

    constructor(
        private translate: TranslateService,
    ) { 
        translate.addLangs(['en', 'pt']);
        this._browserLang = this._getBrowserLang();
        translate.use(this._browserLang?.match(/pt|en|es/) ? this._browserLang : 'pt');
    }

    private _getBrowserLang() {
        return this._storedLang || this.translate.getBrowserLang();
    }

    getTranslation(translationObj: any) {
        return this.translate.getParsedResult(translationObj, this._getBrowserLang());
    }

    getLang(): string {
        return (this._storedLang || this._browserLang).toUpperCase();
    }

    getAllLanguages() {
        return this.translate.getLangs();
    }

    private get _storedLang() {
        return localStorage.getItem("language");
    }

    setLang(lang: string) {
        localStorage.setItem("language", lang);
        this.translate.use(lang);
        this._browserLang = this._getBrowserLang();
    }
}
