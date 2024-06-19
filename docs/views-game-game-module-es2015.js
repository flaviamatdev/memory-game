(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-game-game-module"],{

/***/ "0lAV":
/*!***************************************************!*\
  !*** ./src/app/views/game/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/constants/global.values */ "nAIU");
/* harmony import */ var _game_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-values */ "jUCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/game.service */ "VdwR");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/dialog.service */ "CzQJ");
/* harmony import */ var src_app_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/components/translation/translation.service */ "AgV0");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../memory-card/memory-card.component */ "jCeu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");













function GameComponent_app_memory_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-memory-card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onSelect", function GameComponent_app_memory_card_13_Template_app_memory_card_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.onChooseCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("card", card_r1);
} }
/* Values in pixels defined at component scss */
const STYLE = {
    minWindowWidth: 768,
    cardWidth: 100,
    cardMargin: 10,
    gapBetweenCards: 16,
};
class GameComponent {
    constructor(router, gameService, dialogService, translationService) {
        var _a, _b, _c, _d;
        this.router = router;
        this.gameService = gameService;
        this.dialogService = dialogService;
        this.translationService = translationService;
        this.TRANSLATION = _game_values__WEBPACK_IMPORTED_MODULE_1__["GAME_TRANSLATION"];
        this.backgroundImgSrc = '';
        this.boardStyle = {};
        this.soundIcon = {};
        this._cards = [];
        this._numCols = 0;
        this._cards = (_d = (_c = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.cards) !== null && _d !== void 0 ? _d : [];
    }
    get cards() {
        return this._cards;
    }
    ngOnInit() {
        var _a;
        let gameConfig = this.gameService.config;
        if (!gameConfig || !((_a = this._cards) === null || _a === void 0 ? void 0 : _a.length)) {
            this.gameService.goHome();
            return;
        }
        if (gameConfig.backgroundImgSrc) {
            this.backgroundImgSrc = `url(${gameConfig.backgroundImgSrc})`;
        }
        this._setWidth(window.screen.width);
        this._setSoundIcon();
    }
    _setWidth(windowWidth) {
        if (windowWidth < STYLE.minWindowWidth) {
            this.boardStyle = {
                board: {},
                card: {}
            };
            return;
        }
        let numCards = this._cards.length;
        this._numCols = ([5, 4, 3]).filter(n => numCards % n == 0)[0];
        let boardWidth = ((STYLE.cardWidth + 2 * STYLE.cardMargin) * this._numCols) + ((this._numCols - 1) * STYLE.gapBetweenCards);
        this.boardStyle = { width: `${boardWidth}px` };
        this.gameService.setIdAsRowColumn(this._cards, this._numCols);
    }
    onResize($event) {
        this._setWidth($event.target.innerWidth);
    }
    _setSoundIcon() {
        this.soundIcon = (this.gameService.playSound ?
            { icon: 'volume_up', tooltip: this.TRANSLATION.btn.sound.turnOnTooltip } :
            { icon: 'volume_off', tooltip: this.TRANSLATION.btn.sound.turnOffTooltip });
    }
    swapPlaySound() {
        this.gameService.swapPlaySound();
        this._setSoundIcon();
    }
    newGame() {
        const callback = () => this._startNewGame();
        if (!this.gameService.isGameFinished) {
            return this.dialogService.openLiveGameConfirmationDialog(callback, this.translationService.getTranslation(this.TRANSLATION.startNewGameConfirmation));
        }
        callback();
    }
    _startNewGame() {
        let cards = this._cards;
        this._cards = [];
        setTimeout(() => {
            this._cards = this.gameService.restartGame(cards);
            this.gameService.setIdAsRowColumn(this._cards, this._numCols);
        }, 1);
    }
    onChooseCard($card) {
        let win = this.gameService.onChooseCard($card);
        if (win) {
            setTimeout(() => {
                this._openNewGameDialog();
            }, src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_0__["VALUES"].winNotificationTimeout);
        }
    }
    _openNewGameDialog() {
        this.dialogService.openConfirmationDialog({
            header: {
                icon: 'mood',
                iconColor: 'limegreen',
                title: this.translationService.getTranslation(this.TRANSLATION.finishGame.congratulations)
            },
            bodyText: this.translationService.getTranslation(this.TRANSLATION.finishGame.playAgain),
            okCallback: () => this._startNewGame()
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_components_translation_translation_service__WEBPACK_IMPORTED_MODULE_6__["TranslationService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], hostBindings: function GameComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("resize", function GameComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 13, consts: [[1, "board-background"], [1, "buttons"], ["mat-icon-button", "", "color", "primary", 3, "matTooltip", "click"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "board", 3, "ngStyle"], [1, "cards"], [3, "card", "onSelect", 4, "ngFor", "ngForOf"], [3, "card", "onSelect"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameComponent_Template_button_click_2_listener() { return ctx.swapPlaySound(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function GameComponent_Template_button_click_6_listener() { return ctx.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, GameComponent_app_memory_card_13_Template, 1, 1, "app-memory-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("background-image", ctx.backgroundImgSrc);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("matTooltip", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 7, "TRANSLATION", ctx.soundIcon.tooltip));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.soundIcon.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 10, "TRANSLATION", ctx.TRANSLATION.btn.newGame), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.boardStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_11__["MemoryCardComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], styles: [".control-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n}\n.control-panel.card-count[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.control-panel.btn-new-game[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.board-background[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 1rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.board-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding: 0 1rem;\n}\n.board[_ngcontent-%COMP%] {\n  --card-width: 100px;\n  --card-margin: 10px;\n  --card-id-font-size: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto;\n  opacity: 1 !important;\n}\n@media screen and (max-width: 767px) {\n  .board[_ngcontent-%COMP%] {\n    --card-width: 80px;\n    --card-id-font-size: 40px;\n  }\n}\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 1rem;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFDSTtFQUNJLGtCQUFBO0FBQ1I7QUFFSTtFQUNJLGlCQUFBO0FBQVI7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFESjtBQUlBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FBREo7QUFJQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUFESjtBQUlBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUZKO0FBSUE7RUFDSTtJQUNJLGtCQUFBO0lBQ0EseUJBQUE7RUFETjtBQUNGO0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FBRkoiLCJmaWxlIjoiZ2FtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250cm9sLXBhbmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcblxyXG4gICAgJi5jYXJkLWNvdW50IHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5idG4tbmV3LWdhbWUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm9hcmQtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5ib2FyZC1iYWNrZ3JvdW5kOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpXHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZzogMCAxcmVtO1xyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gICAgLS1jYXJkLXdpZHRoOiAxMDBweDtcclxuICAgIC0tY2FyZC1tYXJnaW46IDEwcHg7XHJcbiAgICAtLWNhcmQtaWQtZm9udC1zaXplOiA1MHB4O1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5ib2FyZCB7XHJcbiAgICAgICAgLS1jYXJkLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIC0tY2FyZC1pZC1mb250LXNpemU6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ArG+":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.module.ts ***!
  \***********************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "hyiU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class DialogModule {
}
DialogModule.ɵfac = function DialogModule_Factory(t) { return new (t || DialogModule)(); };
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateModule"]] }); })();


/***/ }),

/***/ "DMmz":
/*!*******************************************!*\
  !*** ./src/app/views/game/game.module.ts ***!
  \*******************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ "vvyD");
/* harmony import */ var src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.module */ "ArG+");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "0lAV");
/* harmony import */ var _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memory-card/memory-card.component */ "jCeu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    {
        path: '',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"]
    }
];
class GameModule {
}
GameModule.ɵfac = function GameModule_Factory(t) { return new (t || GameModule)(); };
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
        _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_6__["MemoryCardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_4__["DialogModule"]] }); })();


/***/ }),

/***/ "jCeu":
/*!*****************************************************************!*\
  !*** ./src/app/views/game/memory-card/memory-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCardComponent", function() { return MemoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/card-id-type.enum */ "YzOW");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "VdwR");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function MemoryCardComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.card.image.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemoryCardComponent_fa_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 8);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.card.icon);
} }
function MemoryCardComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.card.id);
} }
const _c0 = function (a0) { return { rotated: a0 }; };
class MemoryCardComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isRotated() {
        return this._isRotated;
    }
    ngOnInit() {
        this.showFrontAsIcon = (this.gameService.config.cardIdType === src_app_shared_enums_card_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardIdTypeEnum"].ICONS);
        this.gameService.getCoveredCards().subscribe(coveredCards => coveredCards.map(card => this._isRotated = (card.id == this.card.id) ? false : this._isRotated));
    }
    onClick() {
        this._isRotated = true;
        this.onSelect.emit(this.card);
    }
}
MemoryCardComponent.ɵfac = function MemoryCardComponent_Factory(t) { return new (t || MemoryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
MemoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemoryCardComponent, selectors: [["app-memory-card"]], inputs: { card: "card" }, outputs: { onSelect: "onSelect" }, decls: 8, vars: 6, consts: [[1, "card", 3, "ngClass", "click"], [1, "card-inner"], [1, "front"], ["alt", "card", 3, "src", 4, "ngIf"], [1, "back", "bg-primary"], ["size", "3x", 3, "icon", 4, "ngIf", "ngIfElse"], ["showCardId", ""], ["alt", "card", 3, "src"], ["size", "3x", 3, "icon"], [1, "card-id-number", "quicksand"]], template: function MemoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryCardComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MemoryCardComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MemoryCardComponent_fa_icon_5_Template, 1, 1, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MemoryCardComponent_ng_template_6_Template, 2, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isRotated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFrontAsIcon)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".card-id-number[_ngcontent-%COMP%] {\n  font-size: var(--card-id-font-size);\n  font-weight: bold;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: var(--card-width);\n  width: var(--card-width);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: var(--card-margin);\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: var(--card-width);\n  height: auto;\n  border-radius: 4px;\n}\n\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backface-visibility: hidden;\n}\n\n.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: white;\n}\n\n.card-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n\n.rotated[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWVtb3J5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNJO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjs7QUFFSTs7RUFFSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFBUjs7QUFHSTtFQUNJLFlBQUE7QUFEUjs7QUFJSTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUFGUjs7QUFNQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMENBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FBSEo7O0FBT0k7RUFDSSwwQkFBQTtBQUpSIiwiZmlsZSI6Im1lbW9yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtaWQtbnVtYmVyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC1pZC1mb250LXNpemUpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIGhlaWdodDogdmFyKC0tY2FyZC13aWR0aCk7XHJcbiAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiB2YXIoLS1jYXJkLW1hcmdpbik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJvbnQsXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mcm9udCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWlubmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4ucm90YXRlZCB7XHJcbiAgICAuY2FyZC1pbm5lciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "jUCe":
/*!************************************************!*\
  !*** ./src/app/views/game/game/game-values.ts ***!
  \************************************************/
/*! exports provided: GAME_TRANSLATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAME_TRANSLATION", function() { return GAME_TRANSLATION; });
const GAME_TRANSLATION = {
    btn: {
        sound: {
            turnOnTooltip: {
                pt: 'Desligar sons',
                en: 'Turn off sounds'
            },
            turnOffTooltip: {
                pt: 'Ligar sons',
                en: 'Turn on sounds'
            }
        },
        newGame: {
            pt: 'Novo jogo',
            en: 'New game'
        }
    },
    startNewGameConfirmation: {
        pt: 'Tem certeza que deseja iniciar novo jogo?',
        en: 'Are you sure you want to start a new game?'
    },
    finishGame: {
        congratulations: {
            pt: 'Parabéns!',
            en: 'Congratulations!'
        },
        playAgain: {
            pt: 'Deseja jogar novamente?',
            en: 'Do you want to play again?'
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=views-game-game-module-es2015.js.map