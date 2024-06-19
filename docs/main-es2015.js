(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GitHub\memory-game\memory-game\src\main.ts */"zUnb");


/***/ }),

/***/ "1Zfe":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/translation/translation.module.ts ***!
  \*********************************************************************/
/*! exports provided: TranslationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationModule", function() { return TranslationModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _translation_menu_translation_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./translation-menu/translation-menu.component */ "gtzA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class TranslationModule {
}
TranslationModule.ɵfac = function TranslationModule_Factory(t) { return new (t || TranslationModule)(); };
TranslationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TranslationModule });
TranslationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TranslationModule, { declarations: [_translation_menu_translation_menu_component__WEBPACK_IMPORTED_MODULE_3__["TranslationMenuComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]], exports: [_translation_menu_translation_menu_component__WEBPACK_IMPORTED_MODULE_3__["TranslationMenuComponent"]] }); })();


/***/ }),

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "PSD3");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastService {
    success(message, milliseconds = 5000) {
        this._showToast(message, 'success', '#51A351', milliseconds);
    }
    error(message, milliseconds = 5000) {
        this._showToast(message, 'error', '#BD362F', milliseconds);
    }
    info(message, milliseconds = 5000) {
        this._showToast(message, 'info', '#389BB7', milliseconds);
    }
    warning(message, milliseconds = 5000) {
        this._showToast(message, 'warning', '#F89406', milliseconds);
    }
    close() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
    }
    showing() {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.isVisible();
    }
    _showToast(message, type, backgroundColor, milliseconds) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.mixin({
            toast: true,
            position: 'top',
            timer: milliseconds,
            showConfirmButton: false,
            showCloseButton: !milliseconds,
            customClass: {
                title: 'custom-toast-title'
            },
            background: backgroundColor,
        })
            .fire(message, '', type);
    }
    showInvalidFormError() {
        this.error('Preencha todos os campos obrigatórios');
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "2w9t":
/*!***************************************************!*\
  !*** ./src/app/shared/model/game-config.model.ts ***!
  \***************************************************/
/*! exports provided: GameConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfig", function() { return GameConfig; });
/* harmony import */ var _enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/card-id-type.enum */ "YzOW");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card */ "M6cH");
/* harmony import */ var _file_upload_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-upload.model */ "wufY");



class GameConfig {
    get numPairs() {
        let numPairImages = this.cards.length;
        if (!this.singleCardPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }
    isValid() {
        return this._hasAllRequiredValues() &&
            _enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_0__["CardIdTypeHelper"].isValid(this.cardIdType) &&
            this._isValidBackgroundImgSrc() &&
            this._isValidCards();
    }
    _hasAllRequiredValues() {
        var _a;
        return !!((_a = this.title) === null || _a === void 0 ? void 0 : _a.trim()) && ([
            this.cardIdType,
            this.singleCardPerPair,
            this.addCustomSoundsPerCard,
            this.cards,
        ]).every(value => value !== null && value !== undefined);
    }
    _isValidBackgroundImgSrc() {
        return !this.backgroundImgSrc || _file_upload_model__WEBPACK_IMPORTED_MODULE_2__["FileUpload"].isValidImageSrc(this.backgroundImgSrc);
    }
    _isValidCards() {
        return this.cards.length > 0 && this.cards.every(card => _card__WEBPACK_IMPORTED_MODULE_1__["Card"].hasValidFiles(card));
    }
}


/***/ }),

/***/ "3XNo":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/translation/translation-menu/translation-values.ts ***!
  \**************************************************************************************/
/*! exports provided: TRANSLATION_VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSLATION_VALUES", function() { return TRANSLATION_VALUES; });
const TRANSLATION_VALUES = {
    menuBtn: {
        tooltip: {
            pt: 'Escolher idioma',
            en: 'Choose language'
        }
    },
    language: {
        pt: {
            pt: 'Português',
            en: 'Inglês'
        },
        en: {
            pt: 'Portuguese',
            en: 'English'
        },
    }
};


/***/ }),

/***/ "7V7P":
/*!******************************************************************************************!*\
  !*** ./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog-data.ts ***!
  \******************************************************************************************/
/*! exports provided: ConfirmationDialogData, DialogHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogData", function() { return ConfirmationDialogData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogHeader", function() { return DialogHeader; });
class ConfirmationDialogData {
}
class DialogHeader {
}


/***/ }),

/***/ "AgV0":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/translation/translation.service.ts ***!
  \**********************************************************************/
/*! exports provided: TranslationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationService", function() { return TranslationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


class TranslationService {
    constructor(translate) {
        var _a;
        this.translate = translate;
        translate.addLangs(['en', 'pt']);
        this._browserLang = this._getBrowserLang();
        translate.use(((_a = this._browserLang) === null || _a === void 0 ? void 0 : _a.match(/pt|en/)) ? this._browserLang : 'en');
    }
    _getBrowserLang() {
        return this._storedLang || this.translate.getBrowserLang();
    }
    getTranslationByKey(key) {
        return this.translate.get(key);
    }
    getTranslation(translation, params) {
        return this.translate.getParsedResult(translation, this._getBrowserLang(), params);
    }
    getLang() {
        return (this._storedLang || this._browserLang);
    }
    getAllLanguages() {
        return this.translate.getLangs();
    }
    get _storedLang() {
        return localStorage.getItem("language");
    }
    setLang(lang) {
        localStorage.setItem("language", lang);
        this.translate.use(lang);
        this._browserLang = this._getBrowserLang();
    }
}
TranslationService.ɵfac = function TranslationService_Factory(t) { return new (t || TranslationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
TranslationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranslationService, factory: TranslationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "B3zb":
/*!******************************************************!*\
  !*** ./src/app/services/game-config-file.service.ts ***!
  \******************************************************/
/*! exports provided: GameConfigFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfigFileService", function() { return GameConfigFileService; });
/* harmony import */ var _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/error/game-config-error */ "aWe5");
/* harmony import */ var _shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model/game-config.model */ "2w9t");
/* harmony import */ var _shared_util_file_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/util/file.util */ "mR2K");
/* harmony import */ var _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/error-message.values */ "Uc3y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





const ERROR_TRANSLATION = _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_3__["ERROR_MSG_TRANSLATION"].configFile;
class GameConfigFileService {
    downloadGameConfig(gameConfig) {
        _shared_util_file_util__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].downloadJson(gameConfig, gameConfig.title);
    }
    readUploadedConfigFile(uploadFile) {
        let json = this._readUploadedFile(uploadFile);
        let gameConfig = Object.assign(new _shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_1__["GameConfig"](), json);
        if (!gameConfig.isValid()) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_0__["GameConfigError"](ERROR_TRANSLATION.invalid);
        }
        return gameConfig;
    }
    _readUploadedFile(uploadFile) {
        try {
            return _shared_util_file_util__WEBPACK_IMPORTED_MODULE_2__["FileUtil"].uploadJson(uploadFile.src);
        }
        catch (error) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_0__["GameConfigError"](ERROR_TRANSLATION.upload);
        }
    }
}
GameConfigFileService.ɵfac = function GameConfigFileService_Factory(t) { return new (t || GameConfigFileService)(); };
GameConfigFileService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: GameConfigFileService, factory: GameConfigFileService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "CzQJ":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _shared_components_dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/components/dialog/confirmation-dialog/confirmation-dialog.component */ "hyiU");
/* harmony import */ var _shared_components_dialog_dialog_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog/dialog-values */ "H6Fa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/translation/translation.service */ "AgV0");





class DialogService {
    constructor(dialog, translationService) {
        this.dialog = dialog;
        this.translationService = translationService;
    }
    _getWidthAccordingScreen(widthPercent) {
        return (window.screen.width < 700 ?
            90 :
            widthPercent || 60) + '%';
    }
    openConfirmationDialog(data) {
        const dialogRef = this.dialog.open(_shared_components_dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmationDialogComponent"], {
            width: this._getWidthAccordingScreen(40),
            data: data
        });
        dialogRef.afterClosed().subscribe(confirm => {
            if (!confirm) {
                return;
            }
            data.okCallback();
        });
    }
    openLiveGameConfirmationDialog(callback, confirmQuestion) {
        this.openConfirmationDialog({
            header: {
                icon: 'pan_tool',
                iconColor: 'darkorange',
                title: this.translationService.getTranslation(_shared_components_dialog_dialog_values__WEBPACK_IMPORTED_MODULE_1__["DIALOG_TRANSLATION"].gameIsNotOverWarning)
            },
            bodyText: confirmQuestion !== null && confirmQuestion !== void 0 ? confirmQuestion : this.translationService.getTranslation(_shared_components_dialog_dialog_values__WEBPACK_IMPORTED_MODULE_1__["DIALOG_TRANSLATION"].liveGameConfirmation),
            okCallback: callback
        });
    }
    openCustomDialog(component, width, data = {}) {
        this.dialog.open(component, {
            width: this._getWidthAccordingScreen(width),
            data: data
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_4__["TranslationService"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Eoea":
/*!*******************************************!*\
  !*** ./src/app/shared/util/array.util.ts ***!
  \*******************************************/
/*! exports provided: ArrayUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayUtil", function() { return ArrayUtil; });
class ArrayUtil {
    static equals(arr1, arr2) {
        return (arr1.length === arr2.length &&
            arr1.every(x => arr2.includes(x)) &&
            arr2.every(x => arr1.includes(x)));
    }
    static getNumOccurrences(arr) {
        return arr.reduce(function (acc, curr) {
            return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc;
        }, {});
    }
}


/***/ }),

/***/ "H6Fa":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog-values.ts ***!
  \***********************************************************/
/*! exports provided: DIALOG_TRANSLATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIALOG_TRANSLATION", function() { return DIALOG_TRANSLATION; });
const DIALOG_TRANSLATION = {
    gameIsNotOverWarning: {
        pt: 'Espere! O jogo ainda não acabou!',
        en: 'Hang on! The game is not over yet!'
    },
    liveGameConfirmation: {
        pt: 'Tem certeza que deseja sair do jogo?',
        en: 'Are you sure you want to exit the game?'
    },
};


/***/ }),

/***/ "HdoK":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/icons.ts ***!
  \*******************************************/
/*! exports provided: ICONS, NUM_ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_ICONS", function() { return NUM_ICONS; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");


const ICONS = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSun"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCloud"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStar"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBug"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHippo"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTree"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCar"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTruckMonster"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlane"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRocket"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFutbol"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandPaper"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faApple"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLeaf"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHome"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPencilAlt"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMusic"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChild"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGamepad"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPaintBrush"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGhost"],
];
const NUM_ICONS = ICONS.length;


/***/ }),

/***/ "KvXn":
/*!********************************!*\
  !*** ./src/app/menu-values.ts ***!
  \********************************/
/*! exports provided: MENUS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUS", function() { return MENUS; });
const MENUS = [
    {
        icon: 'home',
        text: {
            pt: 'Início',
            en: 'Home'
        },
        routerLink: '/',
    },
    {
        icon: 'construction',
        text: {
            pt: 'Crie seu jogo',
            en: 'Create your game'
        },
        routerLink: '/game-builder',
    },
    {
        icon: 'sports_esports',
        text: {
            pt: 'Demo',
            en: 'Demo'
        },
        routerLink: '/game-builder/demo',
    },
    {
        icon: 'copyright',
        text: {
            pt: 'Créditos',
            en: 'Credits'
        },
        routerLink: '/credits',
    },
];


/***/ }),

/***/ "M6cH":
/*!**************************************!*\
  !*** ./src/app/shared/model/card.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _file_upload_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload.model */ "wufY");

class Card {
    constructor(code, image, audio) {
        this.code = code;
        this.image = image;
        this.audio = audio;
    }
    static hasValidFiles(card) {
        return _file_upload_model__WEBPACK_IMPORTED_MODULE_0__["FileUpload"].isValidImage(card.image) && (!card.audio || _file_upload_model__WEBPACK_IMPORTED_MODULE_0__["FileUpload"].isValidAudio(card.audio));
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _menu_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-values */ "KvXn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/game.service */ "VdwR");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/dialog.service */ "CzQJ");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _shared_components_translation_translation_menu_translation_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/translation/translation-menu/translation-menu.component */ "gtzA");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function AppComponent_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_list_item_12_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const menu_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); _r0.close(); return ctx_r3.goTo(menu_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menu_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 2, "TRANSLATION", menu_r2.text));
} }
class AppComponent {
    constructor(router, gameService, dialogService) {
        this.router = router;
        this.gameService = gameService;
        this.dialogService = dialogService;
        this.MENU_LIST = _menu_values__WEBPACK_IMPORTED_MODULE_0__["MENUS"];
    }
    ngOnInit() {
        this._resetToolbarTitle();
    }
    onChangeLanguage() {
        this._resetToolbarTitle();
    }
    _resetToolbarTitle() {
        this.gameService.setToolbarTitleDefault();
    }
    get toolbarTitle() {
        return this.gameService.toolbarTitle;
    }
    goTo(menuItem) {
        if (this.gameService.isPlaying) {
            return this.dialogService.openLiveGameConfirmationDialog(() => {
                this.gameService.liveGame();
                this.router.navigateByUrl(menuItem.routerLink);
            });
        }
        this._resetToolbarTitle();
        this.router.navigateByUrl(menuItem.routerLink);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 2, consts: [["color", "primary"], ["mat-icon-button", "", "matTooltip", "Menu", "matTooltipPosition", "right", "aria-label", "Menu", 3, "click"], [1, "toolbar-title"], [3, "onChange"], [1, "sidenav"], ["sidenav", ""], [3, "click", 4, "ngFor", "ngForOf"], [1, "content"], [3, "click"], [1, "mb-0", "ms-1"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "app-translation-menu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onChange", function AppComponent_Template_app_translation_menu_onChange_7_listener() { return ctx.onChangeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-sidenav-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-sidenav", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AppComponent_mat_list_item_12_Template, 6, 5, "mat-list-item", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-sidenav-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.toolbarTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.MENU_LIST);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _shared_components_translation_translation_menu_translation_menu_component__WEBPACK_IMPORTED_MODULE_9__["TranslationMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatNavList"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]], styles: [".mat-toolbar-row[_ngcontent-%COMP%] {\n  height: 80px !important;\n  white-space: normal;\n}\n\n@media screen and (max-width: 540px) {\n  .mat-toolbar-row[_ngcontent-%COMP%] {\n    height: 65px !important;\n    padding: 0 8px;\n  }\n}\n\n.toolbar-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: auto;\n  font-family: Quicksand;\n  font-size: 48px;\n}\n\n@media screen and (max-width: 550px) {\n  .toolbar-title[_ngcontent-%COMP%] {\n    font-size: 30px;\n    line-height: 30px;\n  }\n}\n\n@media screen and (max-width: 360px) {\n  .toolbar-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n    line-height: 30px;\n  }\n}\n\n.sidenav[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\n@media screen and (max-width: 290px) {\n  .sidenav[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n\n.content[_ngcontent-%COMP%] {\n  height: calc(100vh - 11vh);\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx1QkFBQTtJQUNBLGNBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUE7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0Y7O0FBQ0E7RUFDSTtJQUNJLGVBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0FBQUo7O0FBRUE7RUFDSTtJQUNJLFdBQUE7RUFDTjtBQUNGOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxhQUFBO0FBQUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyLXJvdyB7XHJcbiAgICBoZWlnaHQ6IDgwcHggIWltcG9ydGFudDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgICAubWF0LXRvb2xiYXItcm93ICB7XHJcbiAgICAgICAgaGVpZ2h0OiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b29sYmFyLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIC50b29sYmFyLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIC50b29sYmFyLXRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogMjIwcHg7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjkwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExdmgpO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Uc3y":
/*!**********************************************************!*\
  !*** ./src/app/shared/constants/error-message.values.ts ***!
  \**********************************************************/
/*! exports provided: ERROR_MSG_TRANSLATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_MSG_TRANSLATION", function() { return ERROR_MSG_TRANSLATION; });
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons */ "HdoK");
/* harmony import */ var _enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/card-id-type.enum */ "YzOW");


const ICONS = _enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeNameTranslations"][_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ICONS];
const ERROR_MSG_TRANSLATION = {
    unexpectedError: {
        pt: 'Ops! Ocorreu um erro inesperado. Tente novamente.',
        en: 'Oops! An unexpected error has occurred. Try again.'
    },
    diffImagesPerPairFilename: {
        pt: 'Em caso de imagens diferentes por par, os nomes dos arquivos devem seguir o padrão informado.',
        en: 'In case of different images per pair, the file names must follow the pattern informed.'
    },
    configFile: {
        upload: {
            pt: 'Erro ao processar arquivo de configuração.',
            en: 'Error processing configuration file.'
        },
        invalid: {
            pt: 'O arquivo de configuração enviado é inválido.',
            en: 'The uploaded configuration file is invalid.'
        }
    },
    exceededMaxNumIcons: {
        pt: `Para identificar cartas com ${ICONS.pt}, o número máximo de cartas é ${_icons__WEBPACK_IMPORTED_MODULE_0__["NUM_ICONS"]}.`,
        en: `To identify cards with ${ICONS.en}, the maximum number of cards is ${_icons__WEBPACK_IMPORTED_MODULE_0__["NUM_ICONS"]}.`
    }
};


/***/ }),

/***/ "VdwR":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/constants/error-message.values */ "Uc3y");
/* harmony import */ var _shared_constants_global_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/global.values */ "nAIU");
/* harmony import */ var _shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/icons */ "HdoK");
/* harmony import */ var _shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/enums/audio.enum */ "dbfA");
/* harmony import */ var _shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/enums/card-id-type.enum */ "YzOW");
/* harmony import */ var _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/error/game-config-error */ "aWe5");
/* harmony import */ var _shared_model_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/model/card */ "M6cH");
/* harmony import */ var _shared_util_array_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/util/array.util */ "Eoea");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _feedback_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback.service */ "kcTb");
/* harmony import */ var _shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/components/translation/translation.service */ "AgV0");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./audio.service */ "jHbz");
/* harmony import */ var _game_config_file_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./game-config-file.service */ "B3zb");

















const IMG_FILENAME_SEP = _shared_constants_global_values__WEBPACK_IMPORTED_MODULE_3__["VALUES"].upload.fileNameSeparator;
const ERROR_TRANSLATION = _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_2__["ERROR_MSG_TRANSLATION"];
class GameService {
    constructor(library, router, feedbackService, translationService, audioService, configFileService) {
        this.router = router;
        this.feedbackService = feedbackService;
        this.translationService = translationService;
        this.audioService = audioService;
        this.configFileService = configFileService;
        this._playSound = true;
        this._pairCount = 0;
        this._foundPairCodes = [];
        this._coverCards = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this._selectedCard1 = null;
        this._selectedCard2 = null;
        library.addIcons(..._shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__["ICONS"]);
    }
    get toolbarTitle() {
        return this._toolbarTitle;
    }
    setToolbarTitleDefault() {
        if (!this.isPlaying) {
            this._setDefaultToolbarTitle();
        }
    }
    _setDefaultToolbarTitle() {
        this.translationService.getTranslationByKey('TOOLBAR_TITLE')
            .subscribe(toolbarTitle => this._toolbarTitle = toolbarTitle);
    }
    get config() {
        return this._gameConfig;
    }
    get isGameFinished() {
        return this._pairCount == 0;
    }
    get isPlaying() {
        return !!this._gameConfig && !this.isGameFinished;
    }
    liveGame() {
        this._setDefaultToolbarTitle();
        this._gameConfig = null;
        this._pairCount = 0;
        this._foundPairCodes = [];
    }
    goHome() {
        this.liveGame();
        this.router.navigate(['']);
    }
    downloadGameConfig(gameConfig) {
        this.configFileService.downloadGameConfig(gameConfig);
    }
    createGameFromUploadedConfigFile(uploadFile) {
        let gameConfig = null;
        try {
            gameConfig = this.configFileService.readUploadedConfigFile(uploadFile);
        }
        catch (error) {
            this._handleCreateError(error);
            throw error;
        }
        this.create(gameConfig);
    }
    create(gameConfig) {
        this._gameConfig = gameConfig;
        try {
            let cards = this._getCards();
            this._toolbarTitle = gameConfig.title;
            this._loadAudios(cards);
            this.router.navigate(['game'], {
                state: {
                    cards: cards
                }
            });
        }
        catch (error) {
            this._handleCreateError(error);
        }
    }
    _loadAudios(cards) {
        let cardAudios = null;
        if (this._gameConfig.addCustomSoundsPerCard) {
            cardAudios = cards.map(card => card.audio);
        }
        this.audioService.load(cardAudios);
    }
    _handleCreateError(error) {
        this._gameConfig = null;
        this.feedbackService.handleError(error);
    }
    _getCards() {
        this._reset();
        if (this._gameConfig.cardIdType === _shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_6__["CardIdTypeEnum"].ICONS && this._pairCount * 2 > _shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__["NUM_ICONS"]) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_7__["GameConfigError"](ERROR_TRANSLATION.exceededMaxNumIcons);
        }
        if (!this._gameConfig.singleCardPerPair) {
            return this._getCardsForDifferentImagesPerPair();
        }
        return this._getCardsForSameImagePerPair();
    }
    _reset() {
        this._pairCount = this._gameConfig.numPairs;
        this._foundPairCodes = [];
        this._coverCards.next([]);
    }
    _getCardsForSameImagePerPair() {
        let cards = this._gameConfig.cards.map((card, i) => new _shared_model_card__WEBPACK_IMPORTED_MODULE_8__["Card"](`${i + 1}`, card.image, card.audio));
        return this._getFinalShuffledCardsWithId([
            ...this._shuffleCards(cards),
            ...this._shuffleCards(JSON.parse(JSON.stringify(cards)))
        ]);
    }
    _getFinalShuffledCardsWithId(cards) {
        cards.forEach((card, i) => card.id = `${i + 1}`);
        if (this._gameConfig.cardIdType === _shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_6__["CardIdTypeEnum"].ICONS) {
            cards.forEach((card, i) => card.icon = _shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__["ICONS"][i]);
        }
        return cards;
    }
    _getCardsForDifferentImagesPerPair() {
        /* Espera-se que as imagens dos mesmos pares tenham o nome com o mesmo prefixo antes do SEP */
        let originalCards = this._gameConfig.cards;
        let keys = this._getFilenamePrefixForDiffImagesPerPair(originalCards.map(card => card.image));
        let cards = [];
        keys.forEach(key => {
            originalCards
                .filter(card => this._getCardImageFilenamePrefix(card.image) === key)
                .forEach(card => cards.push(new _shared_model_card__WEBPACK_IMPORTED_MODULE_8__["Card"](key, card.image, card.audio)));
        });
        return this._getFinalShuffledCardsWithId(this._shuffleCards(cards));
    }
    _getFilenamePrefixForDiffImagesPerPair(cardImages) {
        let filenames = cardImages.map(cardImage => this._getCardImageFilenamePrefix(cardImage));
        let occurrences = _shared_util_array_util__WEBPACK_IMPORTED_MODULE_9__["ArrayUtil"].getNumOccurrences(filenames);
        let keys = Object.keys(occurrences);
        if (keys.length !== filenames.length / 2 ||
            Object.values(occurrences).some(count => count != 2)) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_7__["GameConfigError"](ERROR_TRANSLATION.diffImagesPerPairFilename);
        }
        return keys;
    }
    _getCardImageFilenamePrefix(cardImage) {
        return cardImage.filename.split(IMG_FILENAME_SEP)[0];
    }
    _shuffleCards(cards) {
        for (let index = 0; index < cards.length; index++) {
            const temp = cards[index];
            const newIdx = Math.floor(Math.random() * cards.length);
            cards[index] = cards[newIdx];
            cards[newIdx] = temp;
        }
        return cards;
    }
    setIdAsRowColumn(cards, numCols) {
        if (this._gameConfig.cardIdType == _shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_6__["CardIdTypeEnum"].ROW_COLUMN) {
            let numRows = cards.length / numCols;
            for (let r = 0; r < numRows; r++) {
                let idx = r * numCols;
                let currCardRow = cards.slice(idx, idx + numCols);
                currCardRow.forEach((card, col) => card.id = `${this._getLetter(r)}${col + 1}`);
            }
        }
    }
    _getLetter(index) {
        return String.fromCharCode('A'.charCodeAt(0) + index);
    }
    onChooseCard(choosen) {
        var _a, _b;
        if (this.isGameFinished || this._foundPairCodes.includes(choosen.code)) {
            if (this._playSound && choosen.audio) {
                this.audioService.play(choosen.audio.filename);
            }
            return;
        }
        if (this._playSound) {
            this.audioService.play((_b = (_a = choosen.audio) === null || _a === void 0 ? void 0 : _a.filename) !== null && _b !== void 0 ? _b : _shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].TURN_CARD);
        }
        if (this._selectedCard1 === null) {
            this._selectedCard1 = choosen;
            return;
        }
        if (choosen.id === this._selectedCard1.id) {
            return;
        }
        this._selectedCard2 = choosen;
        if (this._selectedCard1.code == this._selectedCard2.code) {
            this._handleFoundPair(choosen);
        }
        else {
            this._coverCards.next([this._selectedCard1, this._selectedCard2]);
        }
        this._selectedCard1 = null;
        this._selectedCard2 = null;
        let win = this.isGameFinished;
        if (win && this.playSound) {
            setTimeout(() => {
                this.audioService.play(_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].WIN);
            }, _shared_constants_global_values__WEBPACK_IMPORTED_MODULE_3__["VALUES"].winNotificationTimeout / 2);
        }
        return win;
    }
    _handleFoundPair(choosen) {
        this._pairCount--;
        this._foundPairCodes.push(choosen.code);
        if (this._playSound) {
            setTimeout(() => {
                this.audioService.play(_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].CORRECT);
            }, 100);
        }
    }
    restartGame(cards) {
        this._reset();
        return this._getFinalShuffledCardsWithId(this._shuffleCards(cards));
    }
    getCoveredCards() {
        return this._coverCards.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(1200));
    }
    get playSound() {
        return this._playSound;
    }
    swapPlaySound() {
        this._playSound = !this._playSound;
    }
    /* Game Config Building */
    validateCardUploads(images, audios) {
        if (images.length !== audios.length) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_7__["GameConfigError"]({
                pt: 'A quantidade de arquivos de Imagem e Áudio não são iguais',
                en: 'The number of Image and Audio files are not the same'
            });
        }
        let numMismatch = images.filter(image => !audios.some(audio => audio.hasSameName(image)));
        if (numMismatch.length) {
            throw new _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_7__["GameConfigError"]({
                pt: `Existe(m) ${numMismatch} arquivo(s) de imagem sem arquivo de audio com mesmo nome.`,
                en: `There are ${numMismatch} image files without an audio file with the same name.`
            });
        }
    }
    buildCardsFromValidUploads(images, audios) {
        if (!(audios === null || audios === void 0 ? void 0 : audios.length)) {
            return images.map(image => new _shared_model_card__WEBPACK_IMPORTED_MODULE_8__["Card"](null, image, null));
        }
        return images.map(image => {
            let audio = audios.find(x => x.hasSameName(image));
            return new _shared_model_card__WEBPACK_IMPORTED_MODULE_8__["Card"](null, image, audio);
        });
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_feedback_service__WEBPACK_IMPORTED_MODULE_13__["FeedbackService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_14__["TranslationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_audio_service__WEBPACK_IMPORTED_MODULE_15__["AudioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵinject"](_game_config_file_service__WEBPACK_IMPORTED_MODULE_16__["GameConfigFileService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "YzOW":
/*!***************************************************!*\
  !*** ./src/app/shared/enums/card-id-type.enum.ts ***!
  \***************************************************/
/*! exports provided: CardIdTypeEnum, CardIdTypeHelper, CardIdTypeNameTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardIdTypeEnum", function() { return CardIdTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardIdTypeHelper", function() { return CardIdTypeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardIdTypeNameTranslations", function() { return CardIdTypeNameTranslations; });
var CardIdTypeEnum;
(function (CardIdTypeEnum) {
    CardIdTypeEnum[CardIdTypeEnum["NUMBERS"] = 1] = "NUMBERS";
    CardIdTypeEnum[CardIdTypeEnum["ROW_COLUMN"] = 2] = "ROW_COLUMN";
    CardIdTypeEnum[CardIdTypeEnum["ICONS"] = 3] = "ICONS";
})(CardIdTypeEnum || (CardIdTypeEnum = {}));
class CardIdTypeHelper {
    static isValid(cardIdType) {
        return typeof cardIdType == 'number' && Object.values(CardIdTypeEnum).includes(cardIdType);
    }
}
const CardIdTypeNameTranslations = {
    [CardIdTypeEnum.NUMBERS]: {
        pt: 'Números',
        en: 'Numbers'
    },
    [CardIdTypeEnum.ROW_COLUMN]: {
        pt: 'Linha/Coluna',
        en: 'Row/Column'
    },
    [CardIdTypeEnum.ICONS]: {
        pt: 'Ícones',
        en: 'Icons'
    },
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "mqiu");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _shared_components_translation_translation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/translation/translation.module */ "1Zfe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












function HttpLoaderFactory(httpClient) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](httpClient, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]]
                }
            }),
            _shared_components_translation_translation_module__WEBPACK_IMPORTED_MODULE_9__["TranslationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _shared_components_translation_translation_module__WEBPACK_IMPORTED_MODULE_9__["TranslationModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"]] }); })();


/***/ }),

/***/ "aWe5":
/*!***************************************************!*\
  !*** ./src/app/shared/error/game-config-error.ts ***!
  \***************************************************/
/*! exports provided: GameConfigError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfigError", function() { return GameConfigError; });
class GameConfigError extends Error {
    constructor(translation) {
        super('Game Config Error');
        this.translation = translation;
    }
}


/***/ }),

/***/ "dbfA":
/*!********************************************!*\
  !*** ./src/app/shared/enums/audio.enum.ts ***!
  \********************************************/
/*! exports provided: AudioEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioEnum", function() { return AudioEnum; });
var AudioEnum;
(function (AudioEnum) {
    AudioEnum["CORRECT"] = "correct";
    AudioEnum["TURN_CARD"] = "turnCard";
    AudioEnum["WIN"] = "win";
})(AudioEnum || (AudioEnum = {}));


/***/ }),

/***/ "gtzA":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/translation/translation-menu/translation-menu.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: TranslationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslationMenuComponent", function() { return TranslationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _translation_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./translation-values */ "3XNo");
/* harmony import */ var _translation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../translation.service */ "AgV0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");










function TranslationMenuComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TranslationMenuComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const langBtn_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.changeLanguage(langBtn_r2.lang); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const langBtn_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, langBtn_r2.tooltip, ctx_r1.VALUES.language));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", langBtn_r2.flag, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", langBtn_r2.lang);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](langBtn_r2.title);
} }
class TranslationMenuComponent {
    constructor(service) {
        this.service = service;
        this.VALUES = _translation_values__WEBPACK_IMPORTED_MODULE_1__["TRANSLATION_VALUES"];
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.languages = [];
    }
    ngOnInit() {
        this._setSelectedLang();
        this.languages = this.service.getAllLanguages().map(lang => this._getLangObj(lang));
    }
    _setSelectedLang() {
        this.selectedLanguage = this.service.getLang().toUpperCase();
    }
    _getLangObj(lang) {
        return {
            lang: lang,
            title: lang.toUpperCase(),
            flag: `assets/images/lang-flags/${lang}-icon-lang.png`,
            tooltip: `TRANSLATION_ACRONYM.${lang}`
        };
    }
    changeLanguage(lang) {
        this.service.setLang(lang);
        this._setSelectedLang();
        this.onChange.emit(lang);
    }
}
TranslationMenuComponent.ɵfac = function TranslationMenuComponent_Factory(t) { return new (t || TranslationMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_translation_service__WEBPACK_IMPORTED_MODULE_2__["TranslationService"])); };
TranslationMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TranslationMenuComponent, selectors: [["app-translation-menu"]], outputs: { onChange: "onChange" }, decls: 8, vars: 7, consts: [["mat-button", "", "aria-label", "Choose Lang", "matTooltipPosition", "right", 1, "material-icons-outlined", 3, "matMenuTriggerFor", "matTooltip"], ["langMenu", ""], ["mat-menu-item", "", "matTooltipPosition", "right", 3, "matTooltip", "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", "matTooltipPosition", "right", 3, "matTooltip", "click"], [1, "lang-menu-item-list"], ["width", "100%", 3, "src", "alt"]], template: function TranslationMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TranslationMenuComponent_button_7_Template, 7, 7, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 4, "TRANSLATION", ctx.VALUES.menuBtn.tooltip));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selectedLanguage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: ["@media screen and (max-width: 400px) {\n  .mat-button[_ngcontent-%COMP%] {\n    padding: 0 8px;\n  }\n}\n.lang-menu-item-list[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.lang-menu-item-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRyYW5zbGF0aW9uLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSTtJQUNJLGNBQUE7RUFDTjtBQUNGO0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUVJO0VBQ0ksb0JBQUE7QUFBUiIsImZpbGUiOiJ0cmFuc2xhdGlvbi1tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIC5tYXQtYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxhbmctbWVudS1pdGVtLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "hyiU":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _dialog_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dialog-values */ "H6Fa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirmation_dialog_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog-data */ "7V7P");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");








class ConfirmationDialogComponent {
    constructor(data) {
        this.data = data;
        this.TRANSLATION = _dialog_values__WEBPACK_IMPORTED_MODULE_1__["DIALOG_TRANSLATION"];
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 19, vars: 11, consts: [[1, "dialog-header"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-center", "mb-2"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "mat-dialog-close", "", "id", "modal-cancel-btn", "color", "primary"], ["mat-raised-button", "", "mat-dialog-close", "ok", "id", "modal-ok-btn", "color", "primary"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.data.header.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.header.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.data.header.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.data.bodyText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 7, "ANSWER.NO"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 9, "ANSWER.YES"), " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogClose"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]], styles: [".dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1.25em;\n}\n.dialog-header[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%], .dialog-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  padding: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLG9CQUFBO0FBQ1I7QUFHQTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xyXG5cclxuICAgIC5tYXQtZGlhbG9nLXRpdGxlLCAubWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "jHbz":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/enums/audio.enum */ "dbfA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


const AUDIO_DIR_PATH = 'assets/audio';
const AUDIO_SRC = {
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_0__["AudioEnum"].CORRECT]: 'correct.mp3',
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_0__["AudioEnum"].TURN_CARD]: 'page-turn.mp3',
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_0__["AudioEnum"].WIN]: 'tada.mp3',
};
class AudioService {
    load(cardAudios) {
        this._audioMap = {};
        Object.entries(AUDIO_SRC).forEach(([key, src]) => {
            this._audioMap[key] = this._load(`${AUDIO_DIR_PATH}/${src}`);
        });
        if (cardAudios) {
            delete this._audioMap[_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_0__["AudioEnum"].TURN_CARD];
            cardAudios.forEach(cardAudio => {
                this._audioMap[cardAudio.filename] = this._load(cardAudio.src);
            });
        }
    }
    _load(src) {
        let audio = new Audio(src);
        audio.load();
        return audio;
    }
    play(audioEnumOrFilename) {
        var _a;
        (_a = (this._audioMap[audioEnumOrFilename])) === null || _a === void 0 ? void 0 : _a.play();
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kcTb":
/*!**********************************************!*\
  !*** ./src/app/services/feedback.service.ts ***!
  \**********************************************/
/*! exports provided: FeedbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackService", function() { return FeedbackService; });
/* harmony import */ var _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/error/game-config-error */ "aWe5");
/* harmony import */ var _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/constants/error-message.values */ "Uc3y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast.service */ "2g2N");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog.service */ "CzQJ");
/* harmony import */ var _shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/translation/translation.service */ "AgV0");






class FeedbackService {
    constructor(toastService, dialogService, translationService) {
        this.toastService = toastService;
        this.dialogService = dialogService;
        this.translationService = translationService;
    }
    get dialog() {
        return this.dialogService;
    }
    handleError(error) {
        if (!(error instanceof _shared_error_game_config_error__WEBPACK_IMPORTED_MODULE_0__["GameConfigError"])) {
            return this.handleUnexpectedError();
        }
        this.toastErrorTranslation(error.translation);
        return error.translation;
    }
    handleUnexpectedError() {
        const errorTranslation = _shared_constants_error_message_values__WEBPACK_IMPORTED_MODULE_1__["ERROR_MSG_TRANSLATION"].unexpectedError;
        this.toastErrorTranslation(errorTranslation);
        return errorTranslation;
    }
    toastErrorTranslation(translation) {
        this.toastService.error(this.translationService.getTranslation(translation));
    }
}
FeedbackService.ɵfac = function FeedbackService_Factory(t) { return new (t || FeedbackService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_5__["TranslationService"])); };
FeedbackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: FeedbackService, factory: FeedbackService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mR2K":
/*!******************************************!*\
  !*** ./src/app/shared/util/file.util.ts ***!
  \******************************************/
/*! exports provided: FileUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUtil", function() { return FileUtil; });
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);

class FileUtil {
    static downloadJson(data, filenameNoExtension) {
        let link = document.createElement('a');
        link.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 4)], { type: 'application/json' }));
        link.download = `${filenameNoExtension}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    static uploadJson(base64) {
        const base64SubStr = ';base64,';
        let base64Index = base64.indexOf(base64SubStr) + base64SubStr.length;
        return JSON.parse(buffer__WEBPACK_IMPORTED_MODULE_0__["Buffer"].from(base64.substring(base64Index), 'base64').toString());
    }
}


/***/ }),

/***/ "nAIU":
/*!***************************************************!*\
  !*** ./src/app/shared/constants/global.values.ts ***!
  \***************************************************/
/*! exports provided: VALUES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VALUES", function() { return VALUES; });
const VALUES = {
    winNotificationTimeout: 500,
    upload: {
        fileNameSeparator: '_',
    },
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | views-home-home-module */ "views-home-home-module").then(__webpack_require__.bind(null, /*! ./views/home/home.module */ "XWda")).then(m => m.HomeModule)
    },
    {
        path: 'game-builder',
        loadChildren: () => __webpack_require__.e(/*! import() | views-game-builder-game-builder-module */ "views-game-builder-game-builder-module").then(__webpack_require__.bind(null, /*! ./views/game-builder/game-builder.module */ "S4pq")).then(m => m.GameBuilderModule)
    },
    {
        path: 'game',
        loadChildren: () => __webpack_require__.e(/*! import() | views-game-game-module */ "views-game-game-module").then(__webpack_require__.bind(null, /*! ./views/game/game.module */ "DMmz")).then(m => m.GameModule)
    },
    {
        path: 'credits',
        loadChildren: () => __webpack_require__.e(/*! import() | views-credits-credits-module */ "views-credits-credits-module").then(__webpack_require__.bind(null, /*! ./views/credits/credits.module */ "O2yI")).then(m => m.CreditsModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/core */ "fXoL");










































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵdefineInjector"]({ imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_41__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_8__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_11__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_35__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_20__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_23__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_32__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_31__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_37__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_38__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_39__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_40__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] }); })();


/***/ }),

/***/ "wufY":
/*!***************************************************!*\
  !*** ./src/app/shared/model/file-upload.model.ts ***!
  \***************************************************/
/*! exports provided: FileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
const IMAGE_BASE_64_REGEX = new RegExp('data\:image\/(png|jpeg)\;base64,([^\"]+)');
const AUDIO_BASE_64_REGEX = new RegExp('data\:audio\/(.+)\;base64,([^\"]+)');
class FileUpload {
    constructor(src, /* base64 or url */ filename) {
        this.src = src;
        this.filename = filename;
    }
    hasSameName(fileUpload) {
        let name = this.filename.split('.')[0];
        let name2 = fileUpload.filename.split('.')[0];
        return name === name2;
    }
    static isValidAudio(fileUpload) {
        var _a;
        return this._isValidSrc(fileUpload.src, AUDIO_BASE_64_REGEX) && !!((_a = fileUpload.filename) === null || _a === void 0 ? void 0 : _a.trim());
    }
    static isValidImage(fileUpload) {
        var _a;
        return this.isValidImageSrc(fileUpload.src) && !!((_a = fileUpload.filename) === null || _a === void 0 ? void 0 : _a.trim());
    }
    static isValidImageSrc(src) {
        return this._isValidSrc(src, IMAGE_BASE_64_REGEX);
    }
    static _isValidSrc(src, base64Regex) {
        return this._isValidUrl(src) || base64Regex.test(src);
    }
    static _isValidUrl(url) {
        return (new RegExp('^(https?:\\/\\/)?' + // validate protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
            '(\\#[-a-z\\d_]*)?$', 'i') // validate fragment locator
        ).test(url);
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map