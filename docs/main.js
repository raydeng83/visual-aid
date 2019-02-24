(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");




var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<app-nav-bar></app-nav-bar>\n<router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'visual-aid';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_6__["NavBarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                angular2_toaster__WEBPACK_IMPORTED_MODULE_8__["ToasterModule"].forRoot(),
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                angular2_hotkeys__WEBPACK_IMPORTED_MODULE_10__["HotkeyModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1 class=\"display-5\">Chord Visualization Practice Tool</h1>\n  <p class=\"lead\">This tool generate random chords and you can practice visualizing chord tones based on the chord.</p>\n  <form (submit)=\"onStart()\">\n    <!--Select Keys-->\n    <h6>Select Keys:</h6>\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"keys-C\" [(ngModel)]=\"keys[0]\" name=\"keys-C\">\n          <label class=\"form-check-label\" for=\"keys-C\">C</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[1]\" id=\"keys-Db\" name=\"keys-Db\">\n          <label class=\"form-check-label\" for=\"keys-Db\">Db</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[2]\" id=\"keys-D\" name=\"keys-D\">\n          <label class=\"form-check-label\" for=\"keys-D\">D</label>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[3]\" id=\"keys-Eb\" name=\"keys-Eb\">\n          <label class=\"form-check-label\" for=\"keys-Eb\">Eb</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[4]\" id=\"keys-E\" name=\"keys-E\">\n          <label class=\"form-check-label\" for=\"keys-E\">E</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[5]\" id=\"keys-F\" name=\"keys-F\">\n          <label class=\"form-check-label\" for=\"keys-F\">F</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[6]\" id=\"keys-Gb\" name=\"keys-Gb\">\n          <label class=\"form-check-label\" for=\"keys-Gb\">Gb</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[7]\" id=\"keys-G\" name=\"keys-G\">\n          <label class=\"form-check-label\" for=\"keys-G\">G</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[8]\" id=\"keys-Ab\" name=\"keys-Ab\">\n          <label class=\"form-check-label\" for=\"keys-Ab\">Ab</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[9]\" id=\"keys-A\" name=\"keys-A\">\n          <label class=\"form-check-label\" for=\"keys-A\">A</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[10]\" id=\"keys-Bb\" name=\"keys-Bb\">\n          <label class=\"form-check-label\" for=\"keys-Bb\">Bb</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"keys[11]\" id=\"keys-B\" name=\"keys-B\">\n          <label class=\"form-check-label\" for=\"keys-B\">B</label>\n        </div>\n      </div>\n    </div>\n\n    <!--Select Chord Types-->\n    <h6>Select Chord Types:</h6>\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"type-major7\" [(ngModel)]=\"chordTypes[0]\" name=\"type-major7\">\n          <label class=\"form-check-label\" for=\"type-major7\">Major7</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"type-minor7\" [(ngModel)]=\"chordTypes[1]\" name=\"type-minor7\">\n          <label class=\"form-check-label\" for=\"type-minor7\">Minor7</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"type-dominant7\" [(ngModel)]=\"chordTypes[2]\" name=\"type-dominant7\">\n          <label class=\"form-check-label\" for=\"type-dominant7\">Dominant7</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"type-half-diminished7\" [(ngModel)]=\"chordTypes[3]\" name=\"type-half-diminished7\">\n          <label class=\"form-check-label\" for=\"type-half-diminished7\">Half-Diminished7</label>\n        </div>\n      </div>\n    </div>\n\n    <!--Select Chord Tones-->\n    <h6>Select Chord Tones:</h6>\n    <div class=\"form-row\">\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-3\" [(ngModel)]=\"chordToneNumber[0]\" name=\"tone-3\">\n          <label class=\"form-check-label\" for=\"tone-3\">3rd</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-5\" [(ngModel)]=\"chordToneNumber[1]\" name=\"tone-5\">\n          <label class=\"form-check-label\" for=\"tone-5\">5th</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-7\" [(ngModel)]=\"chordToneNumber[2]\" name=\"tone-7\">\n          <label class=\"form-check-label\" for=\"tone-7\">7th</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-9\" [(ngModel)]=\"chordToneNumber[3]\" name=\"tone-9\">\n          <label class=\"form-check-label\" for=\"tone-9\">9th</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-11\" [(ngModel)]=\"chordToneNumber[4]\" name=\"tone-11\">\n          <label class=\"form-check-label\" for=\"tone-11\">11th</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"form-check form-check-inline\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"tone-13\" [(ngModel)]=\"chordToneNumber[5]\" name=\"tone-13\">\n          <label class=\"form-check-label\" for=\"tone-13\">13th</label>\n        </div>\n      </div>\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-outline-dark btn-block\">Reset</button>\n  </form>\n\n\n  <!--Display Content-->\n  <hr class=\"my-4\">\n  <div class=\"row text-center\">\n    <div class=\"col-sm-5\">\n      <h1 style=\"font-size: 7em;\">{{currentKey}} {{currentChordType}}</h1>\n    </div>\n    <div class=\"col-sm-2\" style=\"border: 5px dashed black;\">\n      <h1 style=\"font-size: 4em; margin-top: 20px;\">{{currentChordTone}}</h1>\n    </div>\n    <div class=\"col-sm-5\">\n      <div style=\"margin-top: 20px;\">\n      <img src=\"assets/images/stave.png\" class=\"img-fluid\" alt=\"Responsive image\">\n      </div>\n    </div>\n  </div>\n  <br>\n  <button class=\"btn btn-outline-dark btn-block\" (click)=\"onNewValue()\">New Value</button>\n\n  <hr>\n  <div>\n    <img src=\"assets/images/fretboard.png\" class=\"img-fluid\" alt=\"Responsive image\" style=\"width: 100%;\">\n  </div>\n</div>\n\n<toaster-container></toaster-container>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_toaster__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-toaster */ "./node_modules/angular2-toaster/angular2-toaster.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-hotkeys */ "./node_modules/angular2-hotkeys/index.js");
/* harmony import */ var angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__);




var keyArr = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
// const chordTypeArr = ['Major7', 'Minor7', 'Dominant7', 'Half-diminished']
var chordTypeArr = ['Δ', '-7', '7', 'Φ'];
var chordToneNumberArr = ['3rd', '5th', '7th', '9th', '11th', '13th'];
var HomeComponent = /** @class */ (function () {
    function HomeComponent(toasterService, hotkeysService) {
        var _this = this;
        this.toasterService = toasterService;
        this.hotkeysService = hotkeysService;
        this.keys = [true, true, true, true, true, true, true, true, true, true, true, true];
        this.chordTypes = [true, true, true, true];
        this.chordToneNumber = [true, true, true, true, true, true];
        this.currentKeys = [];
        this.currentChordTypes = [];
        this.currentChordTones = [];
        this.hotkeysService.add(new angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__["Hotkey"]('space', function (event) {
            _this.onNewValue();
            return false; // Prevent bubbling
        }));
    }
    HomeComponent.prototype.onStart = function () {
        this.currentKeys = [];
        this.currentChordTypes = [];
        this.currentChordTones = [];
        for (var i = 0; i < this.keys.length; i++) {
            if (this.keys[i]) {
                this.currentKeys.push(keyArr[i]);
            }
        }
        for (var i = 0; i < this.chordTypes.length; i++) {
            if (this.chordTypes[i]) {
                this.currentChordTypes.push(chordTypeArr[i]);
            }
        }
        for (var i = 0; i < this.chordToneNumber.length; i++) {
            if (this.chordToneNumber[i]) {
                this.currentChordTones.push(chordToneNumberArr[i]);
            }
        }
        // alert('Configuration has reset');
        this.toasterService.pop('info', 'Configuration has reset!');
    };
    HomeComponent.prototype.onNewValue = function () {
        this.currentKey = this.currentKeys[Math.floor(Math.random() * this.currentKeys.length)];
        this.currentChordType = this.currentChordTypes[Math.floor(Math.random() * this.currentChordTypes.length)];
        this.currentChordTone = this.currentChordTones[Math.floor(Math.random() * this.currentChordTones.length)];
    };
    HomeComponent.prototype.ngOnInit = function () {
        for (var i = 0; i < this.keys.length; i++) {
            if (this.keys[i]) {
                this.currentKeys.push(keyArr[i]);
            }
        }
        for (var i = 0; i < this.chordTypes.length; i++) {
            if (this.chordTypes[i]) {
                this.currentChordTypes.push(chordTypeArr[i]);
            }
        }
        for (var i = 0; i < this.chordToneNumber.length; i++) {
            if (this.chordToneNumber[i]) {
                this.currentChordTones.push(chordToneNumberArr[i]);
            }
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angular2_toaster__WEBPACK_IMPORTED_MODULE_2__["ToasterService"], angular2_hotkeys__WEBPACK_IMPORTED_MODULE_3__["HotkeysService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Tools for Your Jazz Study</a>\n\n</nav>\n\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\projects\visual-aid\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map