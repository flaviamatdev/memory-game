(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/home/home.module */ "./src/app/views/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: 'game',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./views/game/game.module */ "./src/app/views/game/game.module.ts")).then(m => m.GameModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".content[_ngcontent-%COMP%] {\n  height: calc(100vh - 11vh);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRjpcXEdpdEh1YlxcbWVtb3J5LWdhbWVcXG1lbW9yeS1nYW1lLWFuZ3VsYXIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDExdmgpO1xyXG59XHJcbiIsIi5jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTF2aCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _views_game_game_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/game/game.module */ "./src/app/views/game/game.module.ts");
/* harmony import */ var _views_home_home_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/home/home.module */ "./src/app/views/home/home.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
            _views_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
            _views_game_game_module__WEBPACK_IMPORTED_MODULE_7__["GameModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
        _views_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
        _views_game_game_module__WEBPACK_IMPORTED_MODULE_7__["GameModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                    _views_home_home_module__WEBPACK_IMPORTED_MODULE_8__["HomeModule"],
                    _views_game_game_module__WEBPACK_IMPORTED_MODULE_7__["GameModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");











































class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
        ],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                ],
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_4__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_6__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_1__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_36__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_28__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_29__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_31__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/audio.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/*! exports provided: AudioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioService", function() { return AudioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/enums/audio.enum */ "./src/app/shared/enums/audio.enum.ts");



const AUDIO_DIR_PATH = 'assets/audio';
const AUDIO_SRC = {
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_1__["AudioEnum"].CORRECT]: 'correct.mp3',
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_1__["AudioEnum"].TURN_CARD]: 'page-turn.mp3',
    [_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_1__["AudioEnum"].WIN]: 'tada.mp3',
};
class AudioService {
    constructor() {
        this._allLoaded = false;
    }
    load() {
        if (this._allLoaded) {
            return;
        }
        this._audioMap = {};
        Object.entries(AUDIO_SRC).forEach(([key, src]) => {
            this._audioMap[key] = this._load(src);
        });
        this._allLoaded = true;
    }
    _load(src) {
        let audio = new Audio(`${AUDIO_DIR_PATH}/${src}`);
        audio.load();
        return audio;
    }
    play(audioKey) {
        (this._audioMap[audioKey]).play();
    }
}
AudioService.ɵfac = function AudioService_Factory(t) { return new (t || AudioService)(); };
AudioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AudioService, factory: AudioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/dialog/confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");




class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    _getWidthAccordingScreen(widthPercent) {
        return (window.screen.width < 700 ?
            90 :
            widthPercent || 60) + '%';
    }
    openConfirmationDialog(data) {
        const dialogRef = this.dialog.open(_shared_components_dialog_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmationDialogComponent"], {
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
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_constants_global_values__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/constants/global.values */ "./src/app/shared/constants/global.values.ts");
/* harmony import */ var _shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/constants/icons */ "./src/app/shared/constants/icons.ts");
/* harmony import */ var _shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/enums/audio.enum */ "./src/app/shared/enums/audio.enum.ts");
/* harmony import */ var _shared_model_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/model/card */ "./src/app/shared/model/card.ts");
/* harmony import */ var _shared_util_array_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/util/array.util */ "./src/app/shared/util/array.util.ts");
/* harmony import */ var _shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/enums/card-position-id-type.enum */ "./src/app/shared/enums/card-position-id-type.enum.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _audio_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./audio.service */ "./src/app/services/audio.service.ts");













const IMG_FILENAME_SEP = '_';
class GameService {
    constructor(library, router, audioService) {
        this.router = router;
        this.audioService = audioService;
        this._pairCount = 0;
        this._coverCards = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this._selectedCard1 = null;
        this._selectedCard2 = null;
        library.addIcons(..._shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__["ICONS"]);
    }
    get config() {
        return this._gameConfig;
    }
    get isGameFinished() {
        return this._pairCount == 0;
    }
    goHome() {
        this.router.navigate(['']);
    }
    create(gameConfig) {
        this._gameConfig = gameConfig;
        this.audioService.load();
        this.router.navigate(['game']);
    }
    getCards() {
        if (!this._gameConfig) {
            this.goHome();
            return [];
        }
        this._pairCount = this._gameConfig.numPairs;
        if (!this._gameConfig.singleImgPerPair) {
            return this._getCardsForDifferentImagesPerPair();
        }
        return this._getCardsForSameImagePerPair();
    }
    _getCardsForSameImagePerPair() {
        let cards = this._gameConfig.cardImages.map((img, i) => new _shared_model_card__WEBPACK_IMPORTED_MODULE_6__["Card"](`${i + 1}`, img));
        return this._getFinalShuffledCardsWithId([
            ...this._shuffleCards(cards),
            ...this._shuffleCards(JSON.parse(JSON.stringify(cards)))
        ]);
    }
    _getFinalShuffledCardsWithId(cards) {
        cards.forEach((card, i) => card.id = i + 1);
        if (this._gameConfig.cardPositionIdType === _shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_8__["CardPositionIdTypeEnum"].IMAGES) {
            cards.forEach((card, i) => card.icon = _shared_constants_icons__WEBPACK_IMPORTED_MODULE_4__["ICONS"][i]);
        }
        return cards;
    }
    _getCardsForDifferentImagesPerPair() {
        // Espera-se que as imagens dos mesmos pares tenham o nome com o mesmo prefixo antes do SEP
        let cardImages = this._gameConfig.cardImages;
        let keys = this._getFilenamePrefixForDiffImagesPerPair(cardImages);
        let cards = [];
        keys.forEach(key => {
            cardImages
                .filter(img => this._getCardImageFilenamePrefix(img) === key)
                .forEach(img => cards.push(new _shared_model_card__WEBPACK_IMPORTED_MODULE_6__["Card"](key, img)));
        });
        return this._getFinalShuffledCardsWithId(this._shuffleCards(cards));
    }
    _getFilenamePrefixForDiffImagesPerPair(cardImages) {
        let filenames = cardImages.map(img => this._getCardImageFilenamePrefix(img));
        let occurrences = _shared_util_array_util__WEBPACK_IMPORTED_MODULE_7__["ArrayUtil"].getNumOccurrences(filenames);
        let keys = Object.keys(occurrences);
        if (keys.length !== filenames.length / 2 ||
            Object.values(occurrences).some(count => count != 2)) {
            throw new Error('Em caso de imagens diferentes por par, os nomes dos arquivos devem seguir o padrão informado');
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
    onChooseCard(choosen) {
        if (this.isGameFinished) {
            return;
        }
        this.audioService.play(_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].TURN_CARD);
        if (this._selectedCard1 === null) {
            this._selectedCard1 = choosen;
            return;
        }
        if (choosen.id === this._selectedCard1.id) {
            return;
        }
        this._selectedCard2 = choosen;
        if (this._selectedCard1.code == this._selectedCard2.code) {
            this._pairCount--;
            setTimeout(() => {
                this.audioService.play(_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].CORRECT);
            }, 100);
        }
        else {
            this._coverCards.next([this._selectedCard1, this._selectedCard2]);
        }
        this._selectedCard1 = null;
        this._selectedCard2 = null;
        let win = this.isGameFinished;
        setTimeout(() => {
            if (win) {
                this.audioService.play(_shared_enums_audio_enum__WEBPACK_IMPORTED_MODULE_5__["AudioEnum"].WIN);
            }
        }, _shared_constants_global_values__WEBPACK_IMPORTED_MODULE_3__["VALUES"].winNotificationTimeout / 2);
        return win;
    }
    getCoveredCards() {
        return this._coverCards.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1200));
    }
}
GameService.ɵfac = function GameService_Factory(t) { return new (t || GameService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconLibrary"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_audio_service__WEBPACK_IMPORTED_MODULE_11__["AudioService"])); };
GameService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameService, factory: GameService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconLibrary"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] }, { type: _audio_service__WEBPACK_IMPORTED_MODULE_11__["AudioService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/toast.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);



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
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.close();
    }
    showing() {
        return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.isVisible();
    }
    _showToast(message, type, backgroundColor, milliseconds) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.mixin({
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
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog-data.ts":
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

/***/ "./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationDialogComponent", function() { return ConfirmationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _confirmation_dialog_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirmation-dialog-data */ "./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog-data.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class ConfirmationDialogComponent {
    constructor(data) {
        this.data = data;
    }
}
ConfirmationDialogComponent.ɵfac = function ConfirmationDialogComponent_Factory(t) { return new (t || ConfirmationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationDialogComponent, selectors: [["app-confirmation-dialog"]], decls: 17, vars: 5, consts: [[1, "dialog-header"], ["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-center", "mb-2"], ["mat-dialog-actions", ""], ["mat-stroked-button", "", "mat-dialog-close", "", "id", "modal-cancel-btn", "color", "primary"], ["mat-raised-button", "", "mat-dialog-close", "ok", "id", "modal-ok-btn", "color", "primary"]], template: function ConfirmationDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "thumb_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " N\u00E3o ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "thumb_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("color", ctx.data.header.iconColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.header.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.header.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.bodyText, " ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 1.25em;\n}\n.dialog-header[_ngcontent-%COMP%]   .mat-dialog-title[_ngcontent-%COMP%], .dialog-header[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  margin: 0 !important;\n}\n.mat-dialog-actions[_ngcontent-%COMP%] {\n  justify-content: space-evenly;\n  padding: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cvRjpcXEdpdEh1YlxcbWVtb3J5LWdhbWVcXG1lbW9yeS1nYW1lLWFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZGlhbG9nXFxjb25maXJtYXRpb24tZGlhbG9nXFxjb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9kaWFsb2cvY29uZmlybWF0aW9uLWRpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQ0k7RUFDSSxvQkFBQTtBQ0NSO0FER0E7RUFDSSw2QkFBQTtFQUNBLGVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2RpYWxvZy9jb25maXJtYXRpb24tZGlhbG9nL2NvbmZpcm1hdGlvbi1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlhbG9nLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xyXG5cclxuICAgIC5tYXQtZGlhbG9nLXRpdGxlLCAubWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1hY3Rpb25zIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG59XHJcbiIsIi5kaWFsb2ctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XG59XG4uZGlhbG9nLWhlYWRlciAubWF0LWRpYWxvZy10aXRsZSwgLmRpYWxvZy1oZWFkZXIgLm1hdC1pY29uIHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtZGlhbG9nLWFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZzogMXJlbSAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirmation-dialog',
                templateUrl: './confirmation-dialog.component.html',
                styleUrls: ['./confirmation-dialog.component.scss']
            }]
    }], function () { return [{ type: _confirmation_dialog_data__WEBPACK_IMPORTED_MODULE_2__["ConfirmationDialogData"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/dialog/dialog.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/dialog/dialog.module.ts ***!
  \***********************************************************/
/*! exports provided: DialogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogModule", function() { return DialogModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation-dialog/confirmation-dialog.component */ "./src/app/shared/components/dialog/confirmation-dialog/confirmation-dialog.component.ts");





class DialogModule {
}
DialogModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DialogModule });
DialogModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DialogModule_Factory(t) { return new (t || DialogModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DialogModule, { declarations: [_confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _confirmation_dialog_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationDialogComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/input/abstract-input.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/input/abstract-input.component.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractInputComponent", function() { return AbstractInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class AbstractInputComponent {
    constructor() {
        this.flexDirectionRow = false;
        this.disabled = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    _setOriginalRequired() {
        this._originalRequired = this.isRequired;
    }
    checkForm() {
        if (!this.form) {
            this.controlName = 'model';
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                model: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
            });
        }
    }
    get formControl() {
        return this.form.controls[this.controlName];
    }
    get isRequired() {
        var _a;
        return ((_a = this.formControl) === null || _a === void 0 ? void 0 : _a.hasError('required')) || false;
    }
    get isInvalid() {
        return this.hasError('invalid');
    }
    hasError(errorKey) {
        let formControl = this.formControl;
        return !this.isRequired && (formControl.invalid || formControl.hasError(errorKey));
    }
    get inputClass() {
        return {
            'd-flex-row': this.flexDirectionRow,
            'd-flex-col': !this.flexDirectionRow,
        };
    }
    get getSelectValue() {
        try {
            return this.formControl.value;
        }
        catch (error) {
            return null;
        }
    }
    _setAsInvalid() {
        this._setFormControlAsInvalid(this.formControl);
    }
    _setFormControlAsInvalid(control) {
        control.setErrors({ 'invalid': true });
        control.markAsTouched();
    }
    _setAsValidByOriginalRequired() {
        if (!this._originalRequired) {
            this._setAsValid();
            return;
        }
        this._setAsRequired();
    }
    _setAsValid() {
        this._setFormControlAsValid(this.formControl);
    }
    _setFormControlAsValid(control) {
        control.setErrors(null);
        control.markAsTouched();
    }
    _setAsRequired() {
        this._setFormControlAsRequired(this.formControl);
    }
    _setFormControlAsRequired(control) {
        control.setErrors({ 'required': true });
        control.markAsTouched();
    }
}
AbstractInputComponent.ɵfac = function AbstractInputComponent_Factory(t) { return new (t || AbstractInputComponent)(); };
AbstractInputComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AbstractInputComponent, selectors: [["app-abstract-input"]], inputs: { label: "label", labelComment: "labelComment", form: "form", controlName: "controlName", flexDirectionRow: "flexDirectionRow", disabled: "disabled" }, outputs: { onChange: "onChange" }, decls: 0, vars: 0, template: function AbstractInputComponent_Template(rf, ctx) { }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbstractInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-abstract-input',
                template: '',
                styleUrls: []
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelComment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], flexDirectionRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/input-label/input-label.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/input/input-label/input-label.component.ts ***!
  \******************************************************************************/
/*! exports provided: InputLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputLabelComponent", function() { return InputLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function InputLabelComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.comment);
} }
class InputLabelComponent {
    constructor() {
        this.required = true;
    }
}
InputLabelComponent.ɵfac = function InputLabelComponent_Factory(t) { return new (t || InputLabelComponent)(); };
InputLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputLabelComponent, selectors: [["app-input-label"]], inputs: { label: "label", required: "required", comment: "comment" }, decls: 5, vars: 3, consts: [["class", "input-label-comment", 4, "ngIf"], [1, "input-label-required"], [1, "input-label-comment"]], template: function InputLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputLabelComponent_span_2_Template, 2, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.comment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.required ? "*" : "", "");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["mat-label[_ngcontent-%COMP%] {\n  display: block;\n  font-family: Rawline, Raleway, sans-serif;\n}\n\n.input-label-required[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.input-label-comment[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: smaller;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbGFiZWwvRjpcXEdpdEh1YlxcbWVtb3J5LWdhbWVcXG1lbW9yeS1nYW1lLWFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaW5wdXRcXGlucHV0LWxhYmVsXFxpbnB1dC1sYWJlbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbGFiZWwvaW5wdXQtbGFiZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQtbGFiZWwvaW5wdXQtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogUmF3bGluZSwgUmFsZXdheSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlucHV0LWxhYmVsLXJlcXVpcmVkIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbC1jb21tZW50IHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG59XHJcbiIsIm1hdC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogUmF3bGluZSwgUmFsZXdheSwgc2Fucy1zZXJpZjtcbn1cblxuLmlucHV0LWxhYmVsLXJlcXVpcmVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLmlucHV0LWxhYmVsLWNvbW1lbnQge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-label',
                templateUrl: './input-label.component.html',
                styleUrls: ['./input-label.component.scss']
            }]
    }], null, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], comment: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/input-number/input-number.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/input/input-number/input-number.component.ts ***!
  \********************************************************************************/
/*! exports provided: InputNumberComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputNumberComponent", function() { return InputNumberComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-input.component */ "./src/app/shared/components/input/abstract-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../input-label/input-label.component */ "./src/app/shared/components/input/input-label/input-label.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function InputNumberComponent_app_input_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-input-label", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.label)("comment", ctx_r0.labelComment)("required", ctx_r0.isRequired);
} }
function InputNumberComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Campo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputNumberComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Valor m\u00EDnimo \u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.min);
} }
function InputNumberComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Valor m\u00E1ximo \u00E9 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.max);
} }
function InputNumberComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Valor inserido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InputNumberComponent extends _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__["AbstractInputComponent"] {
    constructor() {
        super(...arguments);
        this.min = null;
        this.max = null;
    }
    sendValueChange($event) {
        var _a;
        let value = (_a = $event === null || $event === void 0 ? void 0 : $event.target) === null || _a === void 0 ? void 0 : _a.valueAsNumber;
        if (isNaN(value)) {
            value = null;
        }
        this.onChange.emit(value);
    }
}
InputNumberComponent.ɵfac = function InputNumberComponent_Factory(t) { return ɵInputNumberComponent_BaseFactory(t || InputNumberComponent); };
InputNumberComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputNumberComponent, selectors: [["app-input-number"]], inputs: { min: "min", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 10, consts: [[3, "id", "ngClass"], [3, "label", "comment", "required", 4, "ngIf"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], ["matInput", "", "type", "number", 3, "formControl", "min", "max", "change"], [4, "ngIf"], [3, "label", "comment", "required"], ["aria-hidden", "false"], ["aria-label", "false"]], template: function InputNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputNumberComponent_app_input_label_1_Template, 1, 3, "app-input-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputNumberComponent_Template_input_change_3_listener($event) { return ctx.sendValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputNumberComponent_mat_error_4_Template, 6, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputNumberComponent_mat_error_5_Template, 6, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputNumberComponent_mat_error_6_Template, 6, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputNumberComponent_mat_error_7_Template, 6, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("min", ctx.min)("max", ctx.max);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.min != null && ctx.formControl.hasError("min"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.max != null && ctx.formControl.hasError("max"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.min == null && ctx.max == null && ctx.isInvalid);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlDirective"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_6__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LW51bWJlci9pbnB1dC1udW1iZXIuY29tcG9uZW50LnNjc3MifQ== */", ".d-flex-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvRjpcXEdpdEh1YlxcbWVtb3J5LWdhbWVcXG1lbW9yeS1nYW1lLWFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaW5wdXRcXGFic3RyYWN0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgtcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCIuZC1mbGV4LXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"] });
const ɵInputNumberComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](InputNumberComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-number',
                templateUrl: './input-number.component.html',
                styleUrls: [
                    './input-number.component.scss',
                    '../abstract-input.component.scss'
                ]
            }]
    }], null, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/input-text/input-text.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/input/input-text/input-text.component.ts ***!
  \****************************************************************************/
/*! exports provided: InputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextComponent", function() { return InputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-input.component */ "./src/app/shared/components/input/abstract-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-label/input-label.component */ "./src/app/shared/components/input/input-label/input-label.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");









function InputTextComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Campo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Valor inserido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "inv\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InputTextComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Tamanho m\u00EDnimo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.minLength);
} }
class InputTextComponent extends _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__["AbstractInputComponent"] {
    constructor() {
        super(...arguments);
        this.placeholder = '';
        this.maxLength = 100;
        this.title = '';
    }
    clear() {
        this.formControl.setValue(null);
    }
    sendChangeEvent($event) {
        if ($event || !$event.target) {
            return;
        }
        this.onChange.emit($event.target.value);
    }
    _eventTypeDeleteContent($event) {
        return ($event === null || $event === void 0 ? void 0 : $event.inputType) === 'deleteContentBackward';
    }
}
InputTextComponent.ɵfac = function InputTextComponent_Factory(t) { return ɵInputTextComponent_BaseFactory(t || InputTextComponent); };
InputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputTextComponent, selectors: [["app-input-text"]], inputs: { placeholder: "placeholder", minLength: "minLength", maxLength: "maxLength", title: "title" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 7, vars: 16, consts: [[3, "id", "ngClass"], [3, "label", "comment", "required"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], ["matInput", "", "type", "text", 3, "formControl", "id", "name", "minLength", "maxLength", "title", "placeholder", "readonly", "change"], [4, "ngIf"], ["aria-label", "false"]], template: function InputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InputTextComponent_Template_input_change_3_listener($event) { return ctx.sendChangeEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputTextComponent_mat_error_4_Template, 6, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputTextComponent_mat_error_5_Template, 6, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputTextComponent_mat_error_6_Template, 7, 1, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.label)("comment", ctx.labelComment)("required", ctx.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("id", ctx.controlName)("name", ctx.controlName)("minLength", ctx.minLength)("maxLength", ctx.maxLength)("title", ctx.title)("placeholder", ctx.placeholder)("readonly", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasError("minLength"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L2lucHV0LXRleHQvaW5wdXQtdGV4dC5jb21wb25lbnQuc2NzcyJ9 */", ".d-flex-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvRjpcXEdpdEh1YlxcbWVtb3J5LWdhbWVcXG1lbW9yeS1nYW1lLWFuZ3VsYXIvc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcaW5wdXRcXGFic3RyYWN0LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDhCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9pbnB1dC9hYnN0cmFjdC1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kLWZsZXgtcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCIuZC1mbGV4LXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */"] });
const ɵInputTextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](InputTextComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-text',
                templateUrl: './input-text.component.html',
                styleUrls: [
                    './input-text.component.scss',
                    '../abstract-input.component.scss'
                ]
            }]
    }], null, { placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], minLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/input.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/input/input.module.ts ***!
  \*********************************************************/
/*! exports provided: InputModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputModule", function() { return InputModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-label/input-label.component */ "./src/app/shared/components/input/input-label/input-label.component.ts");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./input-number/input-number.component */ "./src/app/shared/components/input/input-number/input-number.component.ts");
/* harmony import */ var _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-text/input-text.component */ "./src/app/shared/components/input/input-text/input-text.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select/select.component */ "./src/app/shared/components/input/select/select.component.ts");
/* harmony import */ var _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./upload-image/upload-image.component */ "./src/app/shared/components/input/upload-image/upload-image.component.ts");










class InputModule {
}
InputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InputModule });
InputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InputModule_Factory(t) { return new (t || InputModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InputModule, { declarations: [_input_label_input_label_component__WEBPACK_IMPORTED_MODULE_2__["InputLabelComponent"],
        _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["InputNumberComponent"],
        _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
        _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_8__["UploadImageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]], exports: [_input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["InputNumberComponent"],
        _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"],
        _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
        _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_8__["UploadImageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                ],
                declarations: [
                    _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_2__["InputLabelComponent"],
                    _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["InputNumberComponent"],
                    _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"],
                    _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
                    _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_8__["UploadImageComponent"],
                ],
                exports: [
                    _input_number_input_number_component__WEBPACK_IMPORTED_MODULE_5__["InputNumberComponent"],
                    _input_text_input_text_component__WEBPACK_IMPORTED_MODULE_6__["InputTextComponent"],
                    _select_select_component__WEBPACK_IMPORTED_MODULE_7__["SelectComponent"],
                    _upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_8__["UploadImageComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/input/select/select.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/input/select/select.component.ts ***!
  \********************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-input.component */ "./src/app/shared/components/input/abstract-input.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input-label/input-label.component */ "./src/app/shared/components/input/input-label/input-label.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");










const _c0 = ["allOption"];
function SelectComponent_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.ALL_OPTION);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.allOptionLabel, " ");
} }
function SelectComponent_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r1.getOptionValue(option_r5))("disabled", ctx_r1.multiple && ctx_r1.allOptionSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5[ctx_r1.labelAttribute], " ");
} }
function SelectComponent_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Campo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "obrigat\u00F3rio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Erro ao buscar op\u00E7\u00F5es para ", ctx_r3.label, "\n");
} }
class SelectComponent extends _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__["AbstractInputComponent"] {
    constructor() {
        super(...arguments);
        this.ALL_OPTION = 'all';
        this.options = [];
        this.valueAttribute = 'id';
        this.labelAttribute = 'label';
        this.multiple = false;
        this.useFullOptionAsValue = false;
        this.onFinishedLoading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showLoadingOptionsError = false;
        this._allSelected = false;
    }
    ngOnInit() {
        this.showLoadingOptionsError = false;
        this.checkForm();
    }
    ngOnChanges(changes) {
        if (changes.options && changes.options.currentValue == null) {
            this.showLoadingOptionsError = true;
        }
    }
    getOptionValue(option) {
        if (this.useFullOptionAsValue) {
            return option;
        }
        return option[this.valueAttribute];
    }
    onChangeSelection($eventValue) {
        if (this.allOptionLabel && this.multiple) {
            this._onChangeSelectionMultiple($eventValue);
        }
        this.onChange.emit($eventValue);
    }
    _onChangeSelectionMultiple($eventValue) {
        if (this._allSelected) {
            this.formControl.setValue([]);
            this._allSelected = false;
            return;
        }
        this._allSelected = $eventValue.includes(this.ALL_OPTION) ||
            $eventValue.length == this.options.length;
        if (this._allSelected) {
            this.formControl.setValue(this.options.map(option => option[this.valueAttribute]));
        }
    }
    get allOptionSelected() {
        var _a;
        return ((_a = this._allOption) === null || _a === void 0 ? void 0 : _a.selected) || false;
    }
}
SelectComponent.ɵfac = function SelectComponent_Factory(t) { return ɵSelectComponent_BaseFactory(t || SelectComponent); };
SelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectComponent, selectors: [["app-select"]], viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allOption = _t.first);
    } }, inputs: { options: "options", valueAttribute: "valueAttribute", labelAttribute: "labelAttribute", multiple: "multiple", allOptionLabel: "allOptionLabel", useFullOptionAsValue: "useFullOptionAsValue" }, outputs: { onFinishedLoading: "onFinishedLoading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 8, vars: 11, consts: [[3, "id", "ngClass"], [3, "label", "comment", "required"], ["appearance", "outline", "floatLabel", "never", "color", "primary", 1, "w-100", "mat-form-field-label-out"], [3, "formControl", "multiple", "selectionChange"], [3, "value", 4, "ngIf"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "loading-options-error", 4, "ngIf"], [3, "value"], ["allOption", ""], [3, "value", "disabled"], ["aria-label", "false"], [1, "loading-options-error"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-input-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function SelectComponent_Template_mat_select_selectionChange_3_listener($event) { return ctx.onChangeSelection($event.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectComponent_mat_option_4_Template, 3, 2, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SelectComponent_mat_option_5_Template, 2, 3, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectComponent_mat_error_6_Template, 6, 0, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SelectComponent_div_7_Template, 4, 1, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "", ctx.controlName, "-div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.inputClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.label)("comment", ctx.labelComment)("required", ctx.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.formControl)("multiple", ctx.multiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allOptionLabel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isRequired);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLoadingOptionsError);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_3__["InputLabelComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatError"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".loading-options-error[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  -moz-column-gap: 0.5em;\n       column-gap: 0.5em;\n  color: red;\n  font-size: smaller;\n  font-style: italic;\n  margin-bottom: 4px;\n}\n.loading-options-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvc2VsZWN0L0Y6XFxHaXRIdWJcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZS1hbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGlucHV0XFxzZWxlY3RcXHNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUVBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREVJO0VBQ0ksU0FBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvc2VsZWN0L3NlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLW9wdGlvbnMtZXJyb3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sdW1uLWdhcDogMC41ZW07XHJcblxyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxufSIsIi5sb2FkaW5nLW9wdGlvbnMtZXJyb3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2x1bW4tZ2FwOiAwLjVlbTtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5sb2FkaW5nLW9wdGlvbnMtZXJyb3IgbWF0LWljb24ge1xuICBtYXJnaW46IDA7XG59Il19 */"] });
const ɵSelectComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](SelectComponent);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select',
                templateUrl: './select.component.html',
                styleUrls: ['./select.component.scss']
            }]
    }], null, { options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelAttribute: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allOptionLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], useFullOptionAsValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onFinishedLoading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _allOption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['allOption']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/input/upload-image/upload-image.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/input/upload-image/upload-image.component.ts ***!
  \********************************************************************************/
/*! exports provided: UploadImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadImageComponent", function() { return UploadImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../abstract-input.component */ "./src/app/shared/components/input/abstract-input.component.ts");
/* harmony import */ var src_app_shared_model_card_image_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/card-image.model */ "./src/app/shared/model/card-image.model.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../input-label/input-label.component */ "./src/app/shared/components/input/input-label/input-label.component.ts");







const _c0 = ["uploadInput"];
function UploadImageComponent_app_input_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-input-label", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.label)("comment", ctx_r0.labelComment)("required", ctx_r0.isRequired);
} }
function UploadImageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadImageComponent_div_2_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSelectFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r1.ACCEPT_IMG);
} }
function UploadImageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 7, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadImageComponent_ng_template_3_Template_input_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSelectFiles($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("accept", ctx_r3.ACCEPT_IMG)("multiple", ctx_r3.multiple);
} }
class UploadImageComponent extends _abstract_input_component__WEBPACK_IMPORTED_MODULE_1__["AbstractInputComponent"] {
    constructor(toastService) {
        super();
        this.toastService = toastService;
        this.ACCEPT_IMG = ['image/png', 'image/jpeg'];
        this.multiple = false;
        this.selectAllDir = false;
        this._numFiles = 0;
    }
    onSelectFiles($event) {
        var _a;
        this._images = [];
        let { files, allOk } = this._extractFiles((_a = $event === null || $event === void 0 ? void 0 : $event.target) === null || _a === void 0 ? void 0 : _a.files);
        if (!allOk) {
            this._inputElem.nativeElement.value = "";
            const accept = this.ACCEPT_IMG.map(x => x.replace('image/', '')).join(', ');
            this.toastService.error(`Pelo menos 1 arquivo selecionado está fora dos formatos de imagem aceitos: ${accept}. Tente novamente!`);
            return;
        }
        files.forEach(file => this._readFile(file));
    }
    _extractFiles(fileList) {
        var _a;
        this._numFiles = (_a = fileList === null || fileList === void 0 ? void 0 : fileList.length) !== null && _a !== void 0 ? _a : 0;
        let files = [];
        let allOk = true;
        let i = 0;
        do {
            let file = fileList.item(i++);
            files.push(file);
            allOk = allOk && this.ACCEPT_IMG.includes(file.type);
        } while (allOk && i < this._numFiles);
        return {
            files: files,
            allOk: allOk
        };
    }
    _readFile(file) {
        const reader = new FileReader();
        reader.onload = (fileReaderEvent) => {
            this._images.push(new src_app_shared_model_card_image_model__WEBPACK_IMPORTED_MODULE_2__["CardImage"](fileReaderEvent.target.result, file.name));
            if (this._images.length == this._numFiles) {
                this.formControl.setValue(this._images);
            }
        };
        reader.readAsDataURL(file);
    }
}
UploadImageComponent.ɵfac = function UploadImageComponent_Factory(t) { return new (t || UploadImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"])); };
UploadImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UploadImageComponent, selectors: [["app-upload-image"]], viewQuery: function UploadImageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElem = _t.first);
    } }, inputs: { multiple: "multiple", selectAllDir: "selectAllDir" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 5, vars: 3, consts: [[1, "input-file"], [3, "label", "comment", "required", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["regularInput", ""], [3, "label", "comment", "required"], ["type", "file", "multiple", "", "webkitdirectory", "", 3, "accept", "change"], ["uploadInput", ""], ["type", "file", 3, "accept", "multiple", "change"]], template: function UploadImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UploadImageComponent_app_input_label_1_Template, 1, 3, "app-input-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UploadImageComponent_div_2_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UploadImageComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectAllDir)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _input_label_input_label_component__WEBPACK_IMPORTED_MODULE_5__["InputLabelComponent"]], styles: [".input-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvdXBsb2FkLWltYWdlL0Y6XFxHaXRIdWJcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZS1hbmd1bGFyL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGlucHV0XFx1cGxvYWQtaW1hZ2VcXHVwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaW5wdXQvdXBsb2FkLWltYWdlL3VwbG9hZC1pbWFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2lucHV0L3VwbG9hZC1pbWFnZS91cGxvYWQtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXQtZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcbiIsIi5pbnB1dC1maWxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjVyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UploadImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-upload-image',
                templateUrl: './upload-image.component.html',
                styleUrls: ['./upload-image.component.scss']
            }]
    }], function () { return [{ type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__["ToastService"] }]; }, { multiple: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectAllDir: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _inputElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['uploadInput']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/constants/global.values.ts":
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
};


/***/ }),

/***/ "./src/app/shared/constants/icons.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/constants/icons.ts ***!
  \*******************************************/
/*! exports provided: ICONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICONS", function() { return ICONS; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");


const ICONS = [
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSun"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCloud"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMoon"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHeart"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCircle"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSquareFull"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faApple"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBug"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHippo"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTree"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCar"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTruckMonster"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlane"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRocket"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faFutbol"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faHandPaper"],
    _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGhost"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGulp"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faEvernote"],
    _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faRedhat"],
];


/***/ }),

/***/ "./src/app/shared/enums/audio.enum.ts":
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
    AudioEnum[AudioEnum["CORRECT"] = 0] = "CORRECT";
    AudioEnum[AudioEnum["TURN_CARD"] = 1] = "TURN_CARD";
    AudioEnum[AudioEnum["WIN"] = 2] = "WIN";
})(AudioEnum || (AudioEnum = {}));


/***/ }),

/***/ "./src/app/shared/enums/card-position-id-type.enum.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/enums/card-position-id-type.enum.ts ***!
  \************************************************************/
/*! exports provided: CardPositionIdTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPositionIdTypeEnum", function() { return CardPositionIdTypeEnum; });
var CardPositionIdTypeEnum;
(function (CardPositionIdTypeEnum) {
    CardPositionIdTypeEnum[CardPositionIdTypeEnum["NUMBERS"] = 1] = "NUMBERS";
    CardPositionIdTypeEnum[CardPositionIdTypeEnum["IMAGES"] = 2] = "IMAGES";
    CardPositionIdTypeEnum[CardPositionIdTypeEnum["ROW_COLUMN"] = 3] = "ROW_COLUMN";
})(CardPositionIdTypeEnum || (CardPositionIdTypeEnum = {}));


/***/ }),

/***/ "./src/app/shared/model/card-image.model.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/model/card-image.model.ts ***!
  \**************************************************/
/*! exports provided: CardImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardImage", function() { return CardImage; });
class CardImage {
    constructor(base64, filename) {
        this.base64 = base64;
        this.filename = filename;
    }
}


/***/ }),

/***/ "./src/app/shared/model/card.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/card.ts ***!
  \**************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
class Card {
    constructor(code, img) {
        this.code = code;
        this.img = img;
    }
}


/***/ }),

/***/ "./src/app/shared/model/game-config.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/model/game-config.model.ts ***!
  \***************************************************/
/*! exports provided: GameConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfig", function() { return GameConfig; });
class GameConfig {
    get numPairs() {
        let numPairImages = this.cardImages.length;
        if (!this.singleImgPerPair) {
            numPairImages /= 2;
        }
        return numPairImages;
    }
}


/***/ }),

/***/ "./src/app/shared/util/array.util.ts":
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

/***/ "./src/app/views/game/game.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/game/game.module.ts ***!
  \*******************************************/
/*! exports provided: GameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameModule", function() { return GameModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/dialog/dialog.module */ "./src/app/shared/components/dialog/dialog.module.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game/game.component */ "./src/app/views/game/game/game.component.ts");
/* harmony import */ var _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./memory-card/memory-card.component */ "./src/app/views/game/memory-card/memory-card.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/views/game/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");

























































const routes = [
    {
        path: '',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"]
    }
];
class GameModule {
}
GameModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GameModule });
GameModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GameModule_Factory(t) { return new (t || GameModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GameModule, { declarations: [_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
        _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_7__["MemoryCardComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    src_app_shared_components_dialog_dialog_module__WEBPACK_IMPORTED_MODULE_5__["DialogModule"],
                ],
                declarations: [
                    _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
                    _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_7__["MemoryCardComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaDuotoneIconComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaLayersComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaLayersTextComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaLayersCounterComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaStackComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaStackItemSizeDirective"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["CdkAriaLive"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["CdkTrapFocus"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["CdkMonitorFocus"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStep"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepper"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepHeader"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepLabel"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperNext"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperPrevious"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCellOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkFooterRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["FooterRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_11__["CdkTextColumn"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkNestedTreeNode"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeNodeDef"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeNodePadding"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeNodeToggle"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTree"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeNode"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_12__["CdkTreeNodeOutlet"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollable"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDragPlaceholder"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteOrigin"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_17__["Dir"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__["MatBadge"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_19__["MatBottomSheetContainer"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatAnchor"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__["MatButtonToggle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardTitleGroup"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardActions"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardFooter"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardSmImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardMdImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardLgImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardXlImage"], _angular_material_card__WEBPACK_IMPORTED_MODULE_22__["MatCardAvatar"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__["MatCheckboxRequiredValidator"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_24__["MatChipTrailingIcon"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatHorizontalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStep"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepLabel"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperNext"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperPrevious"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepHeader"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_25__["MatStepperIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatCalendar"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatCalendarBody"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepicker"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerContent"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerToggleIcon"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatMonthView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatMultiYearView"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_26__["MatCalendarHeader"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogActions"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_28__["MatDivider"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanelActionRow"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanelDescription"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_29__["MatExpansionPanelContent"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridTile"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridTileText"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatLine"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridTileHeaderCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridTileFooterCssMatStyler"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_30__["MatGridAvatarCssMatStyler"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__["MatIcon"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_32__["CdkTextareaAutosize"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_33__["MatSuffix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_34__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_34__["MatTextareaAutosize"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListItem"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListAvatarCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListIconCssMatStyler"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListSubheaderCssMatStyler"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatPseudoCheckbox"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_35__["MatListOption"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_36__["MatMenuContent"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_37__["MatPaginator"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBar"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_39__["MatSpinner"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_40__["MatRadioButton"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatRipple"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectTrigger"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_42__["MatSidenavContent"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_43__["MatSlider"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_44__["MatSlideToggle"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_45__["MatSnackBarContainer"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSort"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_46__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatFooterCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatFooterRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatFooterCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatFooterRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_47__["MatTextColumn"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_48__["MatTabContent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_49__["MatToolbarRow"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_50__["TooltipComponent"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatNestedTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeNodeDef"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeNodePadding"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeNodeToggle"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTree"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeNode"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_51__["MatTreeNodeOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["CdkPortal"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["CdkPortalOutlet"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["TemplatePortalDirective"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_52__["PortalHostDirective"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualScrollViewport"], _game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"],
    _memory_card_memory_card_component__WEBPACK_IMPORTED_MODULE_7__["MemoryCardComponent"],
    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_0__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/views/game/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/game/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/constants/global.values */ "./src/app/shared/constants/global.values.ts");
/* harmony import */ var src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/card-position-id-type.enum */ "./src/app/shared/enums/card-position-id-type.enum.ts");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dialog.service */ "./src/app/services/dialog.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");







function GameComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", col_r3, " ");
} }
function GameComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameComponent_div_4_div_2_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.grid.columns);
} }
function GameComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.grid.rows[r_r5], " ");
} }
function GameComponent_div_5_app_memory_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-memory-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelect", function GameComponent_div_5_app_memory_card_2_Template_app_memory_card_onSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.onChooseCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r9);
} }
function GameComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_div_5_div_1_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GameComponent_div_5_app_memory_card_2_Template, 1, 1, "app-memory-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cardRow_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.grid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cardRow_r4);
} }
class GameComponent {
    constructor(gameService, dialogService, toastService) {
        this.gameService = gameService;
        this.dialogService = dialogService;
        this.toastService = toastService;
        this.backgroundStyle = '';
        this.cardRows = [];
    }
    ngOnInit() {
        let gameConfig = this.gameService.config;
        if (!gameConfig) {
            this._goHome();
            return;
        }
        this.title = gameConfig.title.toUpperCase();
        if (gameConfig.backgroundImgSrc) {
            this.backgroundStyle = `url(${gameConfig.backgroundImgSrc})`;
        }
        this._setBoardDim(gameConfig.numPairs * 2);
        this._startNewGame();
    }
    _goHome() {
        this.gameService.goHome();
    }
    _setBoardDim(numCards) {
        let numCols = (numCards % 5 == 0 ? 5 : 4);
        let numRows = numCards / numCols;
        this._boardDim = new BoardDim(numRows, numCols);
        if (this.gameService.config.cardPositionIdType == src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__["CardPositionIdTypeEnum"].ROW_COLUMN) {
            this.grid = {
                rows: [...Array(numRows).keys()].map(r => String.fromCharCode('A'.charCodeAt(0) + r)),
                columns: [...Array(numCols).keys()].map(c => c + 1)
            };
        }
    }
    _startNewGame() {
        this.cardRows = [];
        let cards = [];
        try {
            cards = this.gameService.getCards();
        }
        catch (error) {
            this.toastService.error((error === null || error === void 0 ? void 0 : error.message) || 'Ops!');
            return this._goHome();
        }
        const numCols = this._boardDim.numCols;
        for (let r = 0; r < this._boardDim.numRows; r++) {
            let idx = r * numCols;
            this.cardRows.push(cards.slice(idx, idx + numCols));
        }
        this._printPairs(); //.
    }
    // TODO remover
    _printPairs() {
        let numCards = this.cardRows.length;
        if (!numCards) {
            return;
        }
        let indices = [];
        let pairs = [];
        let cards = [];
        this.cardRows.forEach(rowCards => cards.push(...rowCards));
        cards.forEach((card, i) => {
            if (indices.includes(i)) {
                return;
            }
            let j = cards.findIndex((c, j) => c.code === card.code && j != i);
            indices.push(...[i, j]);
            pairs.push([i + 1, j + 1]);
        });
        console.log('pairs', pairs);
    }
    newGame() {
        this._checkGameFinishedAndDoIt('Tem certeza que deseja iniciar novo jogo?', () => this._startNewGame());
    }
    goHome() {
        this._checkGameFinishedAndDoIt('Tem certeza que deseja sair do jogo?', () => this._goHome());
    }
    _checkGameFinishedAndDoIt(confirmQuestion, callback) {
        if (!this.gameService.isGameFinished) {
            this._openConfirmationDialog(confirmQuestion, callback);
            return;
        }
        callback();
    }
    _openConfirmationDialog(confirmQuestion, callback) {
        this.dialogService.openConfirmationDialog({
            header: {
                icon: 'pan_tool',
                iconColor: 'darkorange',
                title: 'Espere! O jogo ainda não acabou!'
            },
            bodyText: confirmQuestion,
            okCallback: callback
        });
    }
    onChooseCard($card) {
        let win = this.gameService.onChooseCard($card);
        if (win) {
            setTimeout(() => {
                this._openNewGameDialog();
            }, src_app_shared_constants_global_values__WEBPACK_IMPORTED_MODULE_1__["VALUES"].winNotificationTimeout);
        }
    }
    _openNewGameDialog() {
        this.dialogService.openConfirmationDialog({
            header: {
                icon: 'mood',
                iconColor: 'limegreen',
                title: 'Parabéns!'
            },
            bodyText: 'Deseja jogar novamente?',
            okCallback: () => this._startNewGame()
        });
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["app-game"]], decls: 6, vars: 5, consts: [[3, "parent"], [1, "board-background"], [1, "board"], ["class", "board-row", 4, "ngIf"], ["class", "board-row", 4, "ngFor", "ngForOf"], [1, "board-row"], [1, "board-grid-space"], ["class", "board-grid-header board-grid-col", 4, "ngFor", "ngForOf"], [1, "board-grid-header", "board-grid-col"], [4, "ngIf"], [3, "card", "onSelect", 4, "ngFor", "ngForOf"], [1, "board-grid-header", "board-grid-row"], [3, "card", "onSelect"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GameComponent_div_4_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GameComponent_div_5_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", ctx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", ctx.backgroundStyle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.grid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cardRows);
    } }, styles: [".control-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 50px;\n}\n.control-panel.card-count[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n.control-panel.btn-new-game[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n.board-background[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.board-background[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  background-color: rgba(255, 255, 255, 0.4);\n}\n.board[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  opacity: 1 !important;\n}\n.board-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  gap: 1rem;\n  justify-content: center;\n}\n.board-grid-space[_ngcontent-%COMP%] {\n  width: 30px;\n}\n.board-grid-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Quicksand;\n  font-size: 48px;\n}\n.board-grid-col[_ngcontent-%COMP%] {\n  width: 100px;\n  margin: 0 10px 16px 10px;\n}\n.board-grid-row[_ngcontent-%COMP%] {\n  height: 100px;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2FtZS9nYW1lL0Y6XFxHaXRIdWJcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcZ2FtZVxcZ2FtZVxcZ2FtZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvZ2FtZS9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtBQ0NSO0FERUk7RUFDSSxpQkFBQTtBQ0FSO0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDBDQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ0RKO0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUNESjtBREdBO0VBQ0ksV0FBQTtBQ0FKO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0E7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7QUNFSjtBREFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dhbWUvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRyb2wtcGFuZWwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuXHJcbiAgICAmLmNhcmQtY291bnQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmJ0bi1uZXctZ2FtZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib2FyZC1iYWNrZ3JvdW5kIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uYm9hcmQtYmFja2dyb3VuZDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KVxyXG59XHJcblxyXG4uYm9hcmQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib2FyZC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYm9hcmQtZ3JpZC1zcGFjZSB7XHJcbiAgICB3aWR0aDogMzBweDtcclxufVxyXG4uYm9hcmQtZ3JpZC1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICBmb250LXNpemU6IDQ4cHg7XHJcbn1cclxuLmJvYXJkLWdyaWQtY29sIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDE2cHggMTBweDtcclxufVxyXG4uYm9hcmQtZ3JpZC1yb3cge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59XHJcbiIsIi5jb250cm9sLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuLmNvbnRyb2wtcGFuZWwuY2FyZC1jb3VudCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jb250cm9sLXBhbmVsLmJ0bi1uZXctZ2FtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm9hcmQtYmFja2dyb3VuZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJvYXJkLWJhY2tncm91bmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbn1cblxuLmJvYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbn1cblxuLmJvYXJkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGdhcDogMXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2FyZC1ncmlkLXNwYWNlIHtcbiAgd2lkdGg6IDMwcHg7XG59XG5cbi5ib2FyZC1ncmlkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICBmb250LXNpemU6IDQ4cHg7XG59XG5cbi5ib2FyZC1ncmlkLWNvbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAwIDEwcHggMTZweCAxMHB4O1xufVxuXG4uYm9hcmQtZ3JpZC1yb3cge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] }, { type: src_app_services_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, null); })();
class BoardDim {
    constructor(numRows, numCols) {
        this.numRows = numRows;
        this.numCols = numCols;
    }
}


/***/ }),

/***/ "./src/app/views/game/memory-card/memory-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/game/memory-card/memory-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: MemoryCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryCardComponent", function() { return MemoryCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/enums/card-position-id-type.enum */ "./src/app/shared/enums/card-position-id-type.enum.ts");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






function MemoryCardComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 8);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.card.img.base64, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function MemoryCardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.card.id);
} }
function MemoryCardComponent_fa_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "fa-icon", 10);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.card.icon);
} }
const _c0 = function (a0) { return { rotated: a0 }; };
class MemoryCardComponent {
    constructor(gameService) {
        this.gameService = gameService;
        this.FRONT_ID_TYPE = src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_1__["CardPositionIdTypeEnum"];
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get isRotated() {
        return this._isRotated;
    }
    ngOnInit() {
        this.frontIdType = this.gameService.config.cardPositionIdType;
        this.gameService.getCoveredCards().subscribe(coveredCards => coveredCards.map(card => this._isRotated = (card.id == this.card.id) ? false : this._isRotated));
    }
    onClick() {
        this._isRotated = true;
        this.onSelect.emit(this.card);
    }
}
MemoryCardComponent.ɵfac = function MemoryCardComponent_Factory(t) { return new (t || MemoryCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"])); };
MemoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemoryCardComponent, selectors: [["app-memory-card"]], inputs: { card: "card" }, outputs: { onSelect: "onSelect" }, decls: 8, vars: 7, consts: [[1, "card", 3, "ngClass", "click"], [1, "card-inner"], [1, "front"], ["alt", "card", 3, "src", 4, "ngIf"], [1, "back", "bg-primary-2"], [3, "ngSwitch"], ["class", "card-id-number quicksand", 4, "ngSwitchCase"], ["size", "3x", 3, "icon", 4, "ngSwitchCase"], ["alt", "card", 3, "src"], [1, "card-id-number", "quicksand"], ["size", "3x", 3, "icon"]], template: function MemoryCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemoryCardComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MemoryCardComponent_img_3_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MemoryCardComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MemoryCardComponent_fa_icon_7_Template, 1, 1, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isRotated));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.card.img);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.frontIdType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.FRONT_ID_TYPE.NUMBERS);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.FRONT_ID_TYPE.IMAGES);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgSwitchCase"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: 10px;\n  cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  border-radius: 4px;\n}\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%], .card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  backface-visibility: hidden;\n}\n.card[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  color: white;\n}\n.card[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n  background-color: white;\n}\n.card-inner[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n}\n.rotated[_ngcontent-%COMP%]   .card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.card-id-number[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZ2FtZS9tZW1vcnktY2FyZC9GOlxcR2l0SHViXFxtZW1vcnktZ2FtZVxcbWVtb3J5LWdhbWUtYW5ndWxhci9zcmNcXGFwcFxcdmlld3NcXGdhbWVcXG1lbW9yeS1jYXJkXFxtZW1vcnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvZ2FtZS9tZW1vcnktY2FyZC9tZW1vcnktY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVJOztFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0FSO0FER0k7RUFDSSxZQUFBO0FDRFI7QURJSTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUNGUjtBRE1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwwQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUNISjtBRE9JO0VBQ0ksMEJBQUE7QUNKUjtBRFFBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTEoiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9nYW1lL21lbW9yeS1jYXJkL21lbW9yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJvbnQsXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuXHJcbiAgICAuYmFjayB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5mcm9udCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWlubmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4ucm90YXRlZCB7XHJcbiAgICAuY2FyZC1pbm5lciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWlkLW51bWJlciB7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iLCIuY2FyZCB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2FyZCBpbWcge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmNhcmQgLmZyb250LFxuLmNhcmQgLmJhY2sge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLmNhcmQgLmJhY2sge1xuICBjb2xvcjogd2hpdGU7XG59XG4uY2FyZCAuZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWlubmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC42cztcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbn1cblxuLnJvdGF0ZWQgLmNhcmQtaW5uZXIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLmNhcmQtaWQtbnVtYmVyIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemoryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-memory-card',
                templateUrl: './memory-card.component.html',
                styleUrls: ['./memory-card.component.scss']
            }]
    }], function () { return [{ type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"] }]; }, { card: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/game/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/game/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class NavbarComponent {
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], inputs: { parent: "parent" }, decls: 10, vars: 1, consts: [["color", "primary"], ["mat-icon-button", "", "aria-label", "Home", "matTooltip", "Home", 3, "click"], [1, "title"], ["mat-icon-button", "", "aria-label", "New Game", "matTooltip", "New Game", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_2_listener() { return ctx.parent.goHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() { return ctx.parent.newGame(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.parent.title);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_3__["MatTooltip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: []
            }]
    }], null, { parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/views/home/game-config-form/game-config-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/views/home/game-config-form/game-config-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: GameConfigFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameConfigFormComponent", function() { return GameConfigFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/enums/card-position-id-type.enum */ "./src/app/shared/enums/card-position-id-type.enum.ts");
/* harmony import */ var src_app_shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/game-config.model */ "./src/app/shared/model/game-config.model.ts");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ "./src/app/services/toast.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/input/input-text/input-text.component */ "./src/app/shared/components/input/input-text/input-text.component.ts");
/* harmony import */ var _shared_components_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/input/upload-image/upload-image.component */ "./src/app/shared/components/input/upload-image/upload-image.component.ts");
/* harmony import */ var _shared_components_input_select_select_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/components/input/select/select.component */ "./src/app/shared/components/input/select/select.component.ts");















function GameConfigFormComponent_div_10_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-input-text", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-upload-image", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-upload-image", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r2.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r2.form)("options", ctx_r2.numImagesPerPairOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r2.form)("selectAllDir", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r2.form)("options", ctx_r2.cardPositionOptions);
} }
function GameConfigFormComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameConfigFormComponent_div_10_form_1_Template, 9, 9, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameConfigFormComponent_div_10_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Criar jogo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form);
} }
function GameConfigFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GameConfigFormComponent_div_11_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSelectConfigFile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameConfigFormComponent_div_11_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r5.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Selecionar arquivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var InputTypeEnum;
(function (InputTypeEnum) {
    InputTypeEnum[InputTypeEnum["MANUALLY"] = 1] = "MANUALLY";
    InputTypeEnum[InputTypeEnum["CONFIG_FILE"] = 2] = "CONFIG_FILE";
})(InputTypeEnum || (InputTypeEnum = {}));
class GameConfigFormComponent {
    constructor(fb, gameService, toastService) {
        this.fb = fb;
        this.gameService = gameService;
        this.toastService = toastService;
        this.INPUT_TYPE = InputTypeEnum;
        this.ACCEPT_IMG = ['image/png', 'image/jpeg'];
        this.inputType = InputTypeEnum.MANUALLY;
        this.numImagesPerPairOptions = [];
        this.cardPositionOptions = [];
    }
    ngOnInit() {
        this.onChangeInputType();
    }
    onChangeInputType() {
        if (this.inputType == InputTypeEnum.CONFIG_FILE) {
            this.form = this.fb.group({});
            return;
        }
        this._initForm();
        this._setOptions();
    }
    _initForm() {
        this.form = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('Memory Game', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            backgroundImgSrc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            singleImgPerPair: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cardImages: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cardPositionIdType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__["CardPositionIdTypeEnum"].NUMBERS, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    _setOptions() {
        this.cardPositionOptions = [
            { id: src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__["CardPositionIdTypeEnum"].NUMBERS, label: 'Números' },
            { id: src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__["CardPositionIdTypeEnum"].IMAGES, label: 'Imagens' },
            { id: src_app_shared_enums_card_position_id_type_enum__WEBPACK_IMPORTED_MODULE_2__["CardPositionIdTypeEnum"].ROW_COLUMN, label: 'Linhas e colunas (Batalha Naval)' },
        ];
        this.numImagesPerPairOptions = [
            { id: true, label: 'Sim' },
            { id: false, label: 'Não' },
        ];
    }
    onSelectConfigFile($event) {
        var _a;
        let file = (_a = $event === null || $event === void 0 ? void 0 : $event.target) === null || _a === void 0 ? void 0 : _a.files[0];
        // TODO
        debugger;
    }
    submit() {
        this.form.markAllAsTouched();
        if (this.form.invalid) {
            return this.toastService.showInvalidFormError();
        }
        this.gameService.create(Object.assign(new src_app_shared_model_game_config_model__WEBPACK_IMPORTED_MODULE_3__["GameConfig"](), this.form.value));
    }
}
GameConfigFormComponent.ɵfac = function GameConfigFormComponent_Factory(t) { return new (t || GameConfigFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"])); };
GameConfigFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameConfigFormComponent, selectors: [["app-game-config-form"]], decls: 12, vars: 6, consts: [[1, "form-line", "mt-2", "ms-4"], ["aria-label", "label", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", 3, "value"], [1, "mt-4", 3, "ngSwitch"], [4, "ngSwitchCase"], [3, "formGroup", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", "color", "primary", 3, "click"], [3, "formGroup"], [1, "form-line"], ["label", "T\u00EDtulo", "controlName", "title", 3, "form"], ["label", "Imagem de fundo", "controlName", "backgroundImgSrc", 3, "form"], ["label", "Cada par possui imagens iguais?", "controlName", "singleImgPerPair", 3, "form", "options"], ["label", "Pasta contendo as imagens das cartas", "controlName", "cardImages", 3, "form", "selectAllDir"], ["label", "Tipo de identifica\u00E7\u00E3o das posi\u00E7\u00F5es das cartas", "controlName", "cardPositionIdType", 3, "form", "options"], ["type", "file", "hidden", "", "accept", "txt", 3, "change"], ["inputFile", ""], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function GameConfigFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selecione como deseja inserir as informa\u00E7\u00F5es para o jogo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GameConfigFormComponent_Template_mat_radio_group_ngModelChange_4_listener($event) { return ctx.inputType = $event; })("change", function GameConfigFormComponent_Template_mat_radio_group_change_4_listener() { return ctx.onChangeInputType(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Inserir manualmente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Inserir arquivo de configura\u00E7\u00E3o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GameConfigFormComponent_div_10_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GameConfigFormComponent_div_11_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.INPUT_TYPE.MANUALLY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.INPUT_TYPE.CONFIG_FILE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.INPUT_TYPE.MANUALLY);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.INPUT_TYPE.CONFIG_FILE);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_components_input_input_text_input_text_component__WEBPACK_IMPORTED_MODULE_10__["InputTextComponent"], _shared_components_input_upload_image_upload_image_component__WEBPACK_IMPORTED_MODULE_11__["UploadImageComponent"], _shared_components_input_select_select_component__WEBPACK_IMPORTED_MODULE_12__["SelectComponent"]], styles: [".mat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  -moz-column-gap: 1em;\n       column-gap: 1em;\n  row-gap: 0.5em;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.input-file[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9nYW1lLWNvbmZpZy1mb3JtL0Y6XFxHaXRIdWJcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcaG9tZVxcZ2FtZS1jb25maWctZm9ybVxcZ2FtZS1jb25maWctZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9nYW1lLWNvbmZpZy1mb3JtL2dhbWUtY29uZmlnLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvZ2FtZS1jb25maWctZm9ybS9nYW1lLWNvbmZpZy1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgY29sdW1uLWdhcDogMWVtO1xyXG4gICAgcm93LWdhcDogMC41ZW07XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1maWxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuIiwiLm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBjb2x1bW4tZ2FwOiAxZW07XG4gIHJvdy1nYXA6IDAuNWVtO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxcmVtO1xufVxuXG4uaW5wdXQtZmlsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameConfigFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-config-form',
                templateUrl: './game-config-form.component.html',
                styleUrls: ['./game-config-form.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] }, { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/material.module */ "./src/app/material.module.ts");
/* harmony import */ var src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/input/input.module */ "./src/app/shared/components/input/input.module.ts");
/* harmony import */ var _game_config_form_game_config_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game-config-form/game-config-form.component */ "./src/app/views/home/game-config-form/game-config-form.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/home/home/home.component.ts");










const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
    }
];
class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _game_config_form_game_config_form_component__WEBPACK_IMPORTED_MODULE_6__["GameConfigFormComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _game_config_form_game_config_form_component__WEBPACK_IMPORTED_MODULE_6__["GameConfigFormComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    src_app_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    src_app_shared_components_input_input_module__WEBPACK_IMPORTED_MODULE_5__["InputModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/views/home/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _game_config_form_game_config_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../game-config-form/game-config-form.component */ "./src/app/views/home/game-config-form/game-config-form.component.ts");




class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [["color", "primary"], [1, "title"], [1, "content"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "MEMORY GAME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-game-config-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _game_config_form_game_config_form_component__WEBPACK_IMPORTED_MODULE_2__["GameConfigFormComponent"]], styles: [".content[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvaG9tZS9ob21lL0Y6XFxHaXRIdWJcXG1lbW9yeS1nYW1lXFxtZW1vcnktZ2FtZS1hbmd1bGFyL3NyY1xcYXBwXFx2aWV3c1xcaG9tZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdmlld3MvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbn0iLCIuY29udGVudCB7XG4gIHBhZGRpbmc6IDFyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\GitHub\memory-game\memory-game-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map