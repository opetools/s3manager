function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAlertAlertComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<clr-alert [clrAlertType]=\"a.type\" *ngFor=\"let a of alerts\">\n  <clr-alert-item>\n    <span class=\"alert-text\">{{ a.text }}</span>\n  </clr-alert-item>\n</clr-alert>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"header-1\">\n  <div class=\"branding\">\n    <a class=\"nav-link\" routerLink=\"/\">\n      <clr-icon shape=\"cloud\"></clr-icon>\n      <span class=\"title\">{{ title.getTitle() }}</span>\n    </a>\n  </div>\n  <div class=\"header-actions\">\n    <clr-dropdown>\n      <button class=\"nav-icon\" clrDropdownTrigger aria-label=\"toggle settings menu\">\n        <clr-icon shape=\"user\"></clr-icon>\n        <clr-icon shape=\"caret down\"></clr-icon>\n      </button>\n      <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n        <button clrDropdownItem *ngIf=\"pass()\" (click)=\"pmodal = true\">Change password</button>\n        <button clrDropdownItem (click)=\"logout()\">Sign out</button>\n      </clr-dropdown-menu>\n    </clr-dropdown>\n  </div>\n</header>\n<!-- <nav class=\"subnav\">\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/s3\">S3</a>\n    </li>\n  </ul>\n</nav> -->\n<clr-modal [(clrModalOpen)]=\"pmodal\">\n  <h3 class=\"modal-title\">Change password</h3>\n  <div class=\"modal-body\">\n    <form clrForm clrLayout=\"horizontal\" [clrLabelSize]=\"4\">\n      <clr-password-container>\n        <label>Old password</label>\n        <input clrPassword name=\"oldPassword\" [(ngModel)]=\"oldPassword\" />\n      </clr-password-container>\n      <clr-password-container>\n        <label>New password</label>\n        <input clrPassword name=\"newPassword\" [(ngModel)]=\"newPassword\" />\n      </clr-password-container>\n      <clr-password-container>\n        <label>Confirm new password</label>\n        <input clrPassword name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" />\n      </clr-password-container>\n    </form>\n    <clr-alert *ngIf=\"msg\" [clrAlertType]=\"'danger'\" [clrAlertClosable]=\"false\">\n      <clr-alert-item>\n        <span class=\"alert-text\">\n          {{ msg }}\n        </span>\n      </clr-alert-item>\n    </clr-alert>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline btn-sm\" (click)=\"close()\">Cancel</button>\n    <button\n      type=\"button\"\n      class=\"btn btn-primary btn-sm\"\n      (click)=\"changePassword()\"\n      [disabled]=\"!oldPassword || !newPassword || !confirmPassword\"\n    >\n      Ok\n    </button>\n  </div>\n</clr-modal>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutLayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<clr-main-container>\n  <app-header></app-header>\n  <div class=\"content-container\">\n    <router-outlet *ngIf=\"side\" name=\"sidebar\"></router-outlet>\n    <div class=\"content-area\">\n      <app-alert></app-alert>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</clr-main-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"login-wrapper\">\n  <form #loginForm=\"ngForm\" class=\"login\" (ngSubmit)=\"onSubmitLogin()\">\n    <section class=\" title\">\n      <h3 class=\"welcome\">{{ title.getTitle() }}</h3>\n    </section>\n    <div class=\"login-group\">\n      <clr-select-container>\n        <label class=\"clr-sr-only\">Auth</label>\n        <select clrSelect name=\"type\" [(ngModel)]=\"form.type\" required>\n          <option *ngFor=\"let l of logins; let i = index\" [value]=\"i\">{{ l.name }}</option>\n        </select>\n      </clr-select-container>\n      <clr-input-container>\n        <label class=\"clr-sr-only\">Username</label>\n        <input\n          type=\"text\"\n          name=\"username\"\n          clrInput\n          [placeholder]=\"placeholders[form.type][0]\"\n          [(ngModel)]=\"form.username\"\n          required\n          [pattern]=\"patterns[form.type][0]\"\n        />\n      </clr-input-container>\n      <clr-password-container>\n        <label class=\"clr-sr-only\">Password</label>\n        <input\n          type=\"password\"\n          name=\"password\"\n          clrPassword\n          [placeholder]=\"placeholders[form.type][1]\"\n          [(ngModel)]=\"form.password\"\n          required\n          [pattern]=\"patterns[form.type][1]\"\n        />\n      </clr-password-container>\n      <div [hidden]=\"!msg\" class=\"error active\">{{ msg }}</div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"loginForm.form.invalid\">NEXT</button>\n    </div>\n  </form>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>not-found</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html":
  /*!****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppS3S3ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"bucket\" class=\"breadcrumb\">\n  <a [routerLink]=\"['/s3', param]\">{{ display }}</a>\n  <span class=\"separator\">/</span>\n  <ng-container *ngFor=\"let p of breadcrumb; index as i; let l = last\">\n    <a *ngIf=\"!l\" [routerLink]=\"p.link\">{{ p.name }}</a>\n    <span *ngIf=\"l\">{{ p.name }}</span>\n    <span class=\"separator\">/</span>\n  </ng-container>\n</div>\n<div class=\"menu\" *ngIf=\"bucket\">\n  <button class=\"btn btn-sm btn-primary\" (click)=\"dlSelected()\" [disabled]=\"selected.length == 0\">\n    <clr-icon shape=\"download\"></clr-icon> download\n  </button>\n  <label class=\"btn btn-sm btn-primary btn-file\">\n    <input type=\"file\" #up (change)=\"upload(up.files)\" accept=\"*\" multiple />\n    <clr-icon shape=\"upload\"></clr-icon> upload\n  </label>\n  <clr-input-container>\n    <input clrInput placeholder=\"folder name\" name=\"folder\" [(ngModel)]=\"folder\" />\n  </clr-input-container>\n  <button class=\"btn btn-sm btn-primary\" (click)=\"createFolder()\" [disabled]=\"folder.length == 0\">create</button>\n  <clr-signpost>\n    <button clrSignpostTrigger class=\"btn btn-sm btn-primary\" [disabled]=\"selected.length == 0\">\n      <clr-icon shape=\"trash\"></clr-icon> delete\n    </button>\n    <ng-template [(clrIfOpen)]=\"isOpen\">\n      <clr-signpost-content [clrPosition]=\"'bottom-middle'\">\n        <p *ngFor=\"let s of selected\">{{ basename(s.Key) }}</p>\n        <button class=\"btn btn-sm\" (click)=\"delete()\">OK</button>\n      </clr-signpost-content>\n    </ng-template>\n  </clr-signpost>\n\n  <clr-dropdown class=\"bottom-right\">\n    <button class=\"btn btn-sm btn-link\" clrDropdownTrigger>\n      CLEAR\n      <clr-icon shape=\"caret down\"></clr-icon>\n    </button>\n    <clr-dropdown-menu clrPosition=\"bottom-right\">\n      <div (click)=\"clearSort()\" clrDropdownItem>SORT</div>\n      <div (click)=\"clearFilter()\" clrDropdownItem>FILTER</div>\n    </clr-dropdown-menu>\n  </clr-dropdown>\n  <button type=\"button\" class=\"btn btn-link btn-icon\" (click)=\"refresh()\" aria-label=\"refresh\">\n    <clr-icon shape=\"refresh\"></clr-icon>\n  </button>\n</div>\n<clr-datagrid *ngIf=\"bucket\" [(clrDgSelected)]=\"selected\" [clrDgLoading]=\"loading\">\n  <clr-dg-placeholder>There are no objects under this path.</clr-dg-placeholder>\n  <clr-dg-column\n    *ngFor=\"let c of columns\"\n    [clrDgField]=\"c.field\"\n    [(clrDgSortOrder)]=\"c.sort\"\n    [(clrFilterValue)]=\"c.filter\"\n    [style.width.px]=\"c.width\"\n    >{{ c.label }}</clr-dg-column\n  >\n\n  <clr-dg-row *clrDgItems=\"let c of contents\" [clrDgItem]=\"c\" [clrDgSelectable]=\"c.Key.slice(-1) != '/'\">\n    <clr-dg-cell class=\"cell-name\">\n      <a *ngIf=\"c.Key.slice(-1) == '/'\" [routerLink]=\"['/s3', param, c.Key]\"> <clr-icon shape=\"folder\"></clr-icon>{{ dirname(c.Key) }} </a>\n      <a *ngIf=\"c.Key.slice(-1) != '/'\" [routerLink]=\"\" (click)=\"download(c.Key)\">\n        <clr-icon shape=\"file\"></clr-icon>{{ basename(c.Key) }}\n      </a>\n    </clr-dg-cell>\n    <clr-dg-cell>{{ filesize(c.Size) }}</clr-dg-cell>\n    <clr-dg-cell>{{ (c.LastModified | date: 'yyyy/MM/dd HH:mm:ss') || '--' }}</clr-dg-cell>\n    <!-- <clr-dg-cell>{{ c.StorageClass || '--' }}</clr-dg-cell> -->\n  </clr-dg-row>\n  <clr-dg-footer>\n    <clr-dg-pagination #pagination [clrDgPageSize]=\"10\">\n      <clr-dg-page-size [clrPageSizeOptions]=\"[10, 20, 50, 100]\">Files per page</clr-dg-page-size>\n      {{ pagination.firstItem + 1 }} - {{ pagination.lastItem + 1 }} of {{ pagination.totalItems }} files\n    </clr-dg-pagination>\n  </clr-dg-footer>\n</clr-datagrid>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppS3SidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <section class=\"sidenav-content\">\n    <section class=\"nav-group collapsible\">\n        <input id=\"tabexample1\" type=\"checkbox\">\n        <label for=\"tabexample1\">Buckets</label>\n        <ul class=\"nav-list\">\n            <li *ngFor=\"let b of buckets\"><a class=\"nav-link\" routerLinkActive=\"active\"\n                    [routerLink]=\"['/s3',b]\">{{ b }}</a></li>\n        </ul>\n    </section>\n</section> -->\n<clr-vertical-nav>\n  <clr-vertical-nav-group routerLinkActive=\"active\" [clrVerticalNavGroupExpanded]=\"true\">\n    <clr-icon shape=\"list\" clrVerticalNavIcon></clr-icon>\n    Links\n    <clr-vertical-nav-group-children>\n      <a\n        [routerLink]=\"['/s3', b]\"\n        routerLinkActive=\"active\"\n        clrVerticalNavLink\n        [title]=\"disp(b)\"\n        *ngFor=\"let b of buckets\"\n      >\n        {{ disp(b) }}\n      </a>\n    </clr-vertical-nav-group-children>\n  </clr-vertical-nav-group>\n  <div class=\"nav-divider\"></div>\n  <clr-vertical-nav-group [clrVerticalNavGroupExpanded]=\"false\">\n    <clr-icon shape=\"cog\" clrVerticalNavIcon></clr-icon>\n    Settings\n    <clr-vertical-nav-group-children>\n      <div class=\"add-container\">\n        <p>Add Link</p>\n        <input clrInput placeholder=\"Bucket\" name=\"bucket\" [(ngModel)]=\"bucketa\" />\n        <input clrInput placeholder=\"Prefix\" name=\"prefix\" [(ngModel)]=\"prefix\" />\n        <input clrInput placeholder=\"Display\" name=\"display\" [(ngModel)]=\"display\" />\n        <button class=\"btn btn-sm btn-icon btn-secondary\" (click)=\"addBucket()\" [disabled]=\"!bucketa\">\n          <!-- <clr-icon shape=\"plus-circle\"></clr-icon> -->\n          <clr-icon shape=\"plus\"></clr-icon> add\n        </button>\n      </div>\n      <div class=\"remove-container\">\n        <p>Remove Link</p>\n        <select clrSelect name=\"bucket\" [(ngModel)]=\"bucketr\">\n          <option [value]=\"b\" *ngFor=\"let b of buckets\">{{ b }}</option>\n        </select>\n        <button class=\"btn btn-sm btn-icon btn-secondary\" (click)=\"removeBucket()\" [disabled]=\"!bucketr\">\n          <clr-icon shape=\"minus\"></clr-icon> remove\n        </button>\n      </div>\n    </clr-vertical-nav-group-children>\n  </clr-vertical-nav-group>\n</clr-vertical-nav>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/alert/alert.component.scss":
  /*!********************************************!*\
    !*** ./src/app/alert/alert.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAlertAlertComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .close {\n  height: initial;\n}\n::ng-deep clr-alert:first-child .alert {\n  margin-top: 0;\n}\n::ng-deep clr-alert:last-child .alert {\n  margin-bottom: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vcGV0b29scy9zM21hbmFnZXIvc3JjL2FwcC9hbGVydC9hbGVydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxlQUFBO0FDQUo7QURHSTtFQUNFLGFBQUE7QUNETjtBREtJO0VBQ0UscUJBQUE7QUNITiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIHtcbiAgLmNsb3NlIHtcbiAgICBoZWlnaHQ6IGluaXRpYWw7XG4gIH1cbiAgY2xyLWFsZXJ0OmZpcnN0LWNoaWxkIHtcbiAgICAuYWxlcnQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgY2xyLWFsZXJ0Omxhc3QtY2hpbGQge1xuICAgIC5hbGVydCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjRyZW07XG4gICAgfVxuICB9XG59XG4iLCI6Om5nLWRlZXAgLmNsb3NlIHtcbiAgaGVpZ2h0OiBpbml0aWFsO1xufVxuOjpuZy1kZWVwIGNsci1hbGVydDpmaXJzdC1jaGlsZCAuYWxlcnQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuOjpuZy1kZWVwIGNsci1hbGVydDpsYXN0LWNoaWxkIC5hbGVydCB7XG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/alert/alert.component.ts":
  /*!******************************************!*\
    !*** ./src/app/alert/alert.component.ts ***!
    \******************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/alert/alert.service.ts");

    var AlertComponent =
    /*#__PURE__*/
    function () {
      function AlertComponent(alertService) {
        _classCallCheck(this, AlertComponent);

        this.alertService = alertService;
        this.alerts = [];
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.subscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
            if (!alert.text) {
              // clear alerts when an empty alert is received
              _this.alerts = [];
              return;
            } // add alert to array


            _this.alerts.push(alert);
          });
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ctorParameters = function () {
      return [{
        type: _alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AlertComponent.prototype, "id", void 0);
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-alert',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./alert.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/alert/alert.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./alert.component.scss */
      "./src/app/alert/alert.component.scss")).default]
    })], AlertComponent);
    /***/
  },

  /***/
  "./src/app/alert/alert.service.ts":
  /*!****************************************!*\
    !*** ./src/app/alert/alert.service.ts ***!
    \****************************************/

  /*! exports provided: AlertService, AlertType */

  /***/
  function srcAppAlertAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/filter */
    "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/Subject */
    "./node_modules/rxjs-compat/_esm2015/Subject.js");

    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.subject = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
      }

      _createClass(AlertService, [{
        key: "onAlert",
        value: function onAlert(id) {
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (x) {
            return x && x.id === id;
          }));
        }
      }, {
        key: "success",
        value: function success(message, id) {
          this.alert({
            text: message,
            type: AlertType.success,
            id: id
          });
        }
      }, {
        key: "danger",
        value: function danger(message, id) {
          this.alert({
            text: message,
            type: AlertType.danger,
            id: id
          });
        }
      }, {
        key: "info",
        value: function info(message, id) {
          this.alert({
            text: message,
            type: AlertType.info,
            id: id
          });
        }
      }, {
        key: "warn",
        value: function warn(message, id) {
          this.alert({
            text: message,
            type: AlertType.warning,
            id: id
          });
        }
      }, {
        key: "alert",
        value: function alert(_alert) {
          console.log(_alert);
          this.subject.next(_alert);
        }
      }]);

      return AlertService;
    }();

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AlertService);
    var AlertType;

    (function (AlertType) {
      AlertType["danger"] = "danger";
      AlertType["warning"] = "warning";
      AlertType["info"] = "info";
      AlertType["success"] = "success";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth/auth.guard */
    "./src/app/auth/auth.guard.ts");
    /* harmony import */


    var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/layout.component */
    "./src/app/layout/layout.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./s3/s3.component */
    "./src/app/s3/s3.component.ts");
    /* harmony import */


    var _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./s3/sidebar/sidebar.component */
    "./src/app/s3/sidebar/sidebar.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 's3'
    }, {
      path: 's3',
      component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
      canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        side: true
      },
      children: [{
        path: '',
        component: _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["S3SidebarComponent"],
        outlet: 'sidebar'
      }, {
        path: ':bucket',
        component: _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__["S3Component"]
      }, {
        path: ':bucket/:prefix',
        component: _s3_s3_component__WEBPACK_IMPORTED_MODULE_7__["S3Component"]
      }]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var AppComponent = function AppComponent(title) {
      _classCallCheck(this, AppComponent);

      this.title = title;
      this.title.setTitle(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].title);
    };

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/fesm2015/clr-angular.js");
    /* harmony import */


    var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./alert/alert.service */
    "./src/app/alert/alert.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout/layout.module */
    "./src/app/layout/layout.module.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _s3_s3_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./s3/s3.component */
    "./src/app/s3/s3.component.ts");
    /* harmony import */


    var _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./s3/sidebar/sidebar.component */
    "./src/app/s3/sidebar/sidebar.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _s3_s3_component__WEBPACK_IMPORTED_MODULE_12__["S3Component"], _s3_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["S3SidebarComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]],
      providers: [_alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/auth/auth.guard.ts":
  /*!************************************!*\
    !*** ./src/app/auth/auth.guard.ts ***!
    \************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, auth) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.auth = auth;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          var _this2 = this;

          return this.auth.isAuthenticated().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedIn) {
            if (!loggedIn) {
              console.log('not login');

              _this2.router.navigate(['/login']);
            }
          }));
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/auth/auth.service.ts":
  /*!**************************************!*\
    !*** ./src/app/auth/auth.service.ts ***!
    \**************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! aws-sdk */
    "./node_modules/aws-sdk/lib/browser.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../constant */
    "./src/app/constant.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(router) {
        _classCallCheck(this, AuthService);

        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
      }

      _createClass(AuthService, [{
        key: "signIn",
        value: function signIn(email, password, login) {
          var _this3 = this;

          if (login.type === "0"
          /* cognito */
          ) {
              aws_amplify__WEBPACK_IMPORTED_MODULE_3__["default"].configure({
                Auth: {
                  identityPoolId: login.identityPoolId,
                  region: login.region,
                  userPoolId: login.userPoolId,
                  userPoolWebClientId: login.userPoolWebClientId
                }
              });
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signIn(email, password)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (c) {
                console.log(JSON.stringify(c));

                _this3.loggedIn.next(true);
              }));
            } else {
            sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]] = JSON.stringify({
              accessKeyId: email,
              secretAccessKey: password
            });
            this.loggedIn.next(true);
            return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) {
              return o.next();
            });
          }
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          var _this4 = this;

          if (localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0"
          /* cognito */
          ) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (result) {
                _this4.loggedIn.next(true);

                return true;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                _this4.loggedIn.next(false);

                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
              }));
            } else {
            if (sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]]) {
              this.loggedIn.next(true);
              return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) {
                o.next(true);
              });
            } else {
              this.loggedIn.next(false);
              return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (o) {
                o.next(false);
              });
            }
          }
        }
      }, {
        key: "signOut",
        value: function signOut() {
          var _this5 = this;

          this.credentials = null;

          if (localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0"
          /* cognito */
          ) {
              Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].signOut()).subscribe(function (result) {
                _this5.loggedIn.next(false);

                _this5.router.navigate(['/login']);
              }, function (error) {
                return console.log(error);
              });
            } else {
            sessionStorage.removeItem(_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]);
            this.router.navigate(['/login']);
          }
        }
      }, {
        key: "changePassword",
        value: function changePassword(oldPassword, newPassword) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var user;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentAuthenticatedUser();

                  case 2:
                    user = _context.sent;
                    return _context.abrupt("return", aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].changePassword(user, oldPassword, newPassword));

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }, {
        key: "getCredentials",
        value: function getCredentials() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var c, accessKey;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!(localStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["LOCAL_KEY_LOGIN_TYPE"]] === "0"
                    /* cognito */
                    )) {
                      _context2.next = 8;
                      break;
                    }

                    _context2.next = 3;
                    return aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].currentCredentials();

                  case 3:
                    c = _context2.sent;
                    console.log(c);
                    return _context2.abrupt("return", aws_amplify__WEBPACK_IMPORTED_MODULE_3__["Auth"].essentialCredentials(c));

                  case 8:
                    accessKey = JSON.parse(sessionStorage[_constant__WEBPACK_IMPORTED_MODULE_7__["SESSION_KEY_ACCESS_KEY"]]);
                    return _context2.abrupt("return", new aws_sdk__WEBPACK_IMPORTED_MODULE_4__["Credentials"]({
                      accessKeyId: accessKey.accessKeyId,
                      secretAccessKey: accessKey.secretAccessKey
                    }));

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/aws/s3.service.ts":
  /*!***********************************!*\
    !*** ./src/app/aws/s3.service.ts ***!
    \***********************************/

  /*! exports provided: S3Service */

  /***/
  function srcAppAwsS3ServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S3Service", function () {
      return S3Service;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! aws-sdk */
    "./node_modules/aws-sdk/lib/browser.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../alert/alert.service */
    "./src/app/alert/alert.service.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../constant */
    "./src/app/constant.ts");

    var S3Service =
    /*#__PURE__*/
    function () {
      function S3Service(auth, alert) {
        _classCallCheck(this, S3Service);

        this.auth = auth;
        this.alert = alert;
      }

      _createClass(S3Service, [{
        key: "s3",
        value: function s3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.t0 = aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"];
                    _context3.t1 = localStorage[_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_REGION"]];
                    _context3.next = 4;
                    return this.auth.getCredentials();

                  case 4:
                    _context3.t2 = _context3.sent;
                    _context3.t3 = {
                      region: _context3.t1,
                      credentials: _context3.t2,
                      maxRetries: 0
                    };
                    return _context3.abrupt("return", new _context3.t0(_context3.t3));

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "listObjectsV2",
        value: function listObjectsV2(params) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var result, output;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    result = {
                      Contents: [],
                      CommonPrefixes: []
                    };
                    _context4.prev = 1;

                  case 2:
                    if (!true) {
                      _context4.next = 19;
                      break;
                    }

                    _context4.next = 5;
                    return this.s3();

                  case 5:
                    _context4.t0 = params;
                    _context4.next = 8;
                    return _context4.sent.listObjectsV2(_context4.t0).promise();

                  case 8:
                    output = _context4.sent;
                    console.log(output);
                    result.Contents = result.Contents.concat(output.Contents);
                    result.CommonPrefixes = result.CommonPrefixes.concat(output.CommonPrefixes);

                    if (!output.IsTruncated) {
                      _context4.next = 16;
                      break;
                    }

                    params.ContinuationToken = output.NextContinuationToken;
                    _context4.next = 17;
                    break;

                  case 16:
                    return _context4.abrupt("break", 19);

                  case 17:
                    _context4.next = 2;
                    break;

                  case 19:
                    _context4.next = 24;
                    break;

                  case 21:
                    _context4.prev = 21;
                    _context4.t1 = _context4["catch"](1);
                    this.alert.danger(_context4.t1.message || _context4.t1.code);

                  case 24:
                    return _context4.abrupt("return", result);

                  case 25:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this, [[1, 21]]);
          }));
        }
      }, {
        key: "getObject",
        value: function getObject(params) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var ret;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.prev = 0;
                    _context5.next = 3;
                    return this.s3();

                  case 3:
                    _context5.t0 = params;
                    _context5.next = 6;
                    return _context5.sent.getObject(_context5.t0).promise();

                  case 6:
                    ret = _context5.sent;
                    console.log(ret);
                    _context5.next = 13;
                    break;

                  case 10:
                    _context5.prev = 10;
                    _context5.t1 = _context5["catch"](0);
                    this.alert.danger(_context5.t1.message || _context5.t1.code);

                  case 13:
                    return _context5.abrupt("return", ret);

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this, [[0, 10]]);
          }));
        }
      }, {
        key: "getSignedUrl",
        value: function getSignedUrl(params, name) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var signedUrl, res, blob, url, a;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.prev = 0;
                    _context6.next = 3;
                    return this.s3();

                  case 3:
                    _context6.t0 = params;
                    signedUrl = _context6.sent.getSignedUrl('getObject', _context6.t0);
                    console.log(signedUrl);
                    _context6.next = 8;
                    return fetch(signedUrl);

                  case 8:
                    res = _context6.sent;
                    _context6.next = 11;
                    return res.blob();

                  case 11:
                    blob = _context6.sent;
                    url = window.URL.createObjectURL(blob);
                    a = document.createElement('a');
                    document.body.appendChild(a);
                    a.href = url;
                    a.download = name;
                    a.click();
                    window.URL.revokeObjectURL(url);
                    document.body.removeChild(a);
                    _context6.next = 25;
                    break;

                  case 22:
                    _context6.prev = 22;
                    _context6.t1 = _context6["catch"](0);
                    this.alert.danger(_context6.t1.message || _context6.t1.code);

                  case 25:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this, [[0, 22]]);
          }));
        }
      }, {
        key: "upload",
        value: function upload(params, options) {
          var listener = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (p) {
            console.log(p);
          };
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var ret;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.prev = 0;
                    _context7.next = 3;
                    return this.s3();

                  case 3:
                    _context7.t0 = params;
                    _context7.t1 = options;
                    _context7.t2 = listener;
                    _context7.next = 8;
                    return _context7.sent.upload(_context7.t0, _context7.t1).on('httpUploadProgress', _context7.t2).promise();

                  case 8:
                    ret = _context7.sent;
                    console.log(ret);
                    _context7.next = 15;
                    break;

                  case 12:
                    _context7.prev = 12;
                    _context7.t3 = _context7["catch"](0);
                    this.alert.danger(_context7.t3.message || _context7.t3.code);

                  case 15:
                    return _context7.abrupt("return", ret);

                  case 16:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this, [[0, 12]]);
          }));
        }
      }, {
        key: "putObject",
        value: function putObject(params) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var ret;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.prev = 0;
                    _context8.next = 3;
                    return this.s3();

                  case 3:
                    _context8.t0 = params;
                    _context8.next = 6;
                    return _context8.sent.putObject(_context8.t0).promise();

                  case 6:
                    ret = _context8.sent;
                    console.log(ret);
                    _context8.next = 13;
                    break;

                  case 10:
                    _context8.prev = 10;
                    _context8.t1 = _context8["catch"](0);
                    this.alert.danger(_context8.t1.message || _context8.t1.code);

                  case 13:
                    return _context8.abrupt("return", ret);

                  case 14:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[0, 10]]);
          }));
        }
      }, {
        key: "deleteObjects",
        value: function deleteObjects(params) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var ret;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.prev = 0;
                    _context9.next = 3;
                    return this.s3();

                  case 3:
                    _context9.t0 = params;
                    _context9.next = 6;
                    return _context9.sent.deleteObjects(_context9.t0).promise();

                  case 6:
                    ret = _context9.sent;
                    console.log(ret);
                    _context9.next = 13;
                    break;

                  case 10:
                    _context9.prev = 10;
                    _context9.t1 = _context9["catch"](0);
                    this.alert.danger(_context9.t1.message || _context9.t1.code);

                  case 13:
                    return _context9.abrupt("return", ret);

                  case 14:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[0, 10]]);
          }));
        }
      }]);

      return S3Service;
    }();

    S3Service.ctorParameters = function () {
      return [{
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }, {
        type: _alert_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
      }];
    };

    S3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], S3Service);
    /***/
  },

  /***/
  "./src/app/constant.ts":
  /*!*****************************!*\
    !*** ./src/app/constant.ts ***!
    \*****************************/

  /*! exports provided: SESSION_KEY_ACCESS_KEY, LOCAL_KEY_REGION, LOCAL_KEY_LOGIN_TYPE, LOCAL_KEY_LOGIN_INDEX, LOCAL_KEY_BUCKETS */

  /***/
  function srcAppConstantTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SESSION_KEY_ACCESS_KEY", function () {
      return SESSION_KEY_ACCESS_KEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_REGION", function () {
      return LOCAL_KEY_REGION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_LOGIN_TYPE", function () {
      return LOCAL_KEY_LOGIN_TYPE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_LOGIN_INDEX", function () {
      return LOCAL_KEY_LOGIN_INDEX;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOCAL_KEY_BUCKETS", function () {
      return LOCAL_KEY_BUCKETS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SESSION_KEY_ACCESS_KEY = 's3manager.accessKey';
    var LOCAL_KEY_REGION = 's3manager.region';
    var LOCAL_KEY_LOGIN_TYPE = 's3manager.loginType';
    var LOCAL_KEY_LOGIN_INDEX = 's3manager.loginIndex';
    var LOCAL_KEY_BUCKETS = 's3manager.buckets';
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/layout/header/header.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "clr-password-container:first-child {\n  margin-top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vcGV0b29scy9zM21hbmFnZXIvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImNsci1wYXNzd29yZC1jb250YWluZXI6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuIiwiY2xyLXBhc3N3b3JkLWNvbnRhaW5lcjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/layout/header/header.component.ts ***!
    \***************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var src_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constant */
    "./src/app/constant.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(auth, title) {
        _classCallCheck(this, HeaderComponent);

        this.auth = auth;
        this.title = title;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          this.auth.signOut();
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          var _this6 = this;

          if (this.newPassword !== this.confirmPassword) {
            this.msg = "Password confirmation doesn't match the password";
            return;
          }

          this.auth.changePassword(this.oldPassword, this.newPassword).then(function (d) {
            _this6.close();
          }).catch(function (e) {
            _this6.msg = e.message;
          });
        }
      }, {
        key: "pass",
        value: function pass() {
          return localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_LOGIN_TYPE"]] === "0"
          /* cognito */
          ;
        }
      }, {
        key: "close",
        value: function close() {
          this.pmodal = false;
          this.oldPassword = '';
          this.newPassword = '';
          this.confirmPassword = '';
          this.msg = '';
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/layout/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/layout/layout.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutLayoutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/layout.component.ts":
  /*!********************************************!*\
    !*** ./src/app/layout/layout.component.ts ***!
    \********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LayoutComponent =
    /*#__PURE__*/
    function () {
      function LayoutComponent(router, activatedRoute) {
        _classCallCheck(this, LayoutComponent);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.side = activatedRoute.snapshot.data.side;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onActivate",
        value: function onActivate(event) {
          this.componentRef = event;
        }
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-layout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./layout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./layout.component.scss */
      "./src/app/layout/layout.component.scss")).default]
    })], LayoutComponent);
    /***/
  },

  /***/
  "./src/app/layout/layout.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/layout/layout.module.ts ***!
    \*****************************************/

  /*! exports provided: LayoutModule */

  /***/
  function srcAppLayoutLayoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @clr/angular */
    "./node_modules/@clr/angular/fesm2015/clr-angular.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../alert/alert.component */
    "./src/app/alert/alert.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/layout/layout.component.ts");

    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      exports: [_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"]]
    })], LayoutModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".login-wrapper {\n  background: none;\n  justify-content: center;\n}\n.login-wrapper .welcome {\n  margin: 0;\n}\n.login-wrapper .login {\n  padding: 1.2rem 3rem;\n  padding-bottom: 6rem;\n  background: none;\n}\n.login-wrapper .login .login-group {\n  padding: 1rem 0 0 0;\n}\n.login-wrapper .login:before,\n.login-wrapper .login:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vcGV0b29scy9zM21hbmFnZXIvc3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURBRTtFQUNFLFNBQUE7QUNFSjtBREFFO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDRUo7QURESTtFQUNFLG1CQUFBO0FDR047QURBRTs7RUFFRSxhQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC53ZWxjb21lIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgLmxvZ2luIHtcbiAgICBwYWRkaW5nOiAxLjJyZW0gM3JlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIC5sb2dpbi1ncm91cCB7XG4gICAgICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xuICAgIH1cbiAgfVxuICAubG9naW46YmVmb3JlLFxuICAubG9naW46YWZ0ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbiIsIi5sb2dpbi13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4td3JhcHBlciAud2VsY29tZSB7XG4gIG1hcmdpbjogMDtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbiB7XG4gIHBhZGRpbmc6IDEuMnJlbSAzcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi5sb2dpbi13cmFwcGVyIC5sb2dpbiAubG9naW4tZ3JvdXAge1xuICBwYWRkaW5nOiAxcmVtIDAgMCAwO1xufVxuLmxvZ2luLXdyYXBwZXIgLmxvZ2luOmJlZm9yZSxcbi5sb2dpbi13cmFwcGVyIC5sb2dpbjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth/auth.service */
    "./src/app/auth/auth.service.ts");
    /* harmony import */


    var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../constant */
    "./src/app/constant.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, auth, title) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.auth = auth;
        this.title = title;
        this.form = {
          type: localStorage[_constant__WEBPACK_IMPORTED_MODULE_6__["LOCAL_KEY_LOGIN_INDEX"]] || '0',
          username: '',
          password: ''
        };
        this.patterns = {};
        this.placeholders = {};
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.logins = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].logins;
          this.patterns["0"
          /* cognito */
          ] = ['^.*$', '^^.*$'];
          this.patterns["1"
          /* accessKey */
          ] = ['^(?<![A-Z0-9])[A-Z0-9]{20}(?![A-Z0-9])$', '^(?<![A-Za-z0-9/+=])[A-Za-z0-9/+=]{40}(?![A-Za-z0-9/+=])$'];
          this.placeholders["0"
          /* cognito */
          ] = ['Username', 'Password'];
          this.placeholders["1"
          /* accessKey */
          ] = ['Access Key Id', 'Secret Access Key'];
        }
      }, {
        key: "onSubmitLogin",
        value: function onSubmitLogin() {
          var _this7 = this;

          var login = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].logins[parseInt(this.form.type)];
          localStorage[_constant__WEBPACK_IMPORTED_MODULE_6__["LOCAL_KEY_LOGIN_INDEX"]] = this.form.type;
          localStorage[_constant__WEBPACK_IMPORTED_MODULE_6__["LOCAL_KEY_LOGIN_TYPE"]] = login.type;
          localStorage[_constant__WEBPACK_IMPORTED_MODULE_6__["LOCAL_KEY_REGION"]] = login.region;
          this.auth.signIn(this.form.username, this.form.password, login).subscribe(function (result) {
            console.log('login');

            _this7.router.navigate(['/']);
          }, function (error) {
            console.log(error);
            _this7.msg = error.message;
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/not-found/not-found.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.scss */
      "./src/app/not-found/not-found.component.scss")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/s3/s3.component.scss":
  /*!**************************************!*\
    !*** ./src/app/s3/s3.component.scss ***!
    \**************************************/

  /*! exports provided: default */

  /***/
  function srcAppS3S3ComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".separator {\n  margin: 0 0.2rem;\n}\n\n.cell-name clr-icon {\n  margin-right: 0.2rem;\n}\n\n::ng-deep .datagrid-placeholder-image {\n  display: none;\n}\n\n.menu {\n  display: flex;\n  align-items: flex-end;\n}\n\n.menu button,\n.menu clr-button-group,\n.menu label {\n  margin: 0;\n  margin-right: 0.5rem;\n}\n\n.menu button:last-child,\n.menu clr-input-container {\n  margin: 0;\n}\n\n.menu clr-dropdown {\n  margin-left: auto;\n}\n\n.menu .btn-file input {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.menu input[name=folder] {\n  width: 100px;\n}\n\n.menu clr-signpost p {\n  margin: 0;\n  margin-bottom: 0.5rem;\n  word-break: break-all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vcGV0b29scy9zM21hbmFnZXIvc3JjL2FwcC9zMy9zMy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvczMvczMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGOztBREVFO0VBQ0Usb0JBQUE7QUNDSjs7QURHRTtFQUNFLGFBQUE7QUNBSjs7QURHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ0FGOztBRENFOzs7RUFHRSxTQUFBO0VBQ0Esb0JBQUE7QUNDSjs7QURDRTs7RUFFRSxTQUFBO0FDQ0o7O0FEQ0U7RUFDRSxpQkFBQTtBQ0NKOztBREVJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBTjs7QURHRTtFQUNFLFlBQUE7QUNESjs7QURJSTtFQUNFLFNBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9zMy9zMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZXBhcmF0b3Ige1xuICBtYXJnaW46IDAgMC4ycmVtO1xufVxuLmNlbGwtbmFtZSB7XG4gIGNsci1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMnJlbTtcbiAgfVxufVxuOjpuZy1kZWVwIHtcbiAgLmRhdGFncmlkLXBsYWNlaG9sZGVyLWltYWdlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgYnV0dG9uLFxuICBjbHItYnV0dG9uLWdyb3VwLFxuICBsYWJlbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG4gIGJ1dHRvbjpsYXN0LWNoaWxkLFxuICBjbHItaW5wdXQtY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbiAgY2xyLWRyb3Bkb3duIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxuICAuYnRuLWZpbGUge1xuICAgIGlucHV0IHtcbiAgICAgIHdpZHRoOiAwLjFweDtcbiAgICAgIGhlaWdodDogMC4xcHg7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHotaW5kZXg6IC0xO1xuICAgIH1cbiAgfVxuICBpbnB1dFtuYW1lPSdmb2xkZXInXSB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICB9XG4gIGNsci1zaWducG9zdCB7XG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICB9XG59XG4iLCIuc2VwYXJhdG9yIHtcbiAgbWFyZ2luOiAwIDAuMnJlbTtcbn1cblxuLmNlbGwtbmFtZSBjbHItaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC4ycmVtO1xufVxuXG46Om5nLWRlZXAgLmRhdGFncmlkLXBsYWNlaG9sZGVyLWltYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG4ubWVudSBidXR0b24sXG4ubWVudSBjbHItYnV0dG9uLWdyb3VwLFxuLm1lbnUgbGFiZWwge1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuLm1lbnUgYnV0dG9uOmxhc3QtY2hpbGQsXG4ubWVudSBjbHItaW5wdXQtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xufVxuLm1lbnUgY2xyLWRyb3Bkb3duIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ubWVudSAuYnRuLWZpbGUgaW5wdXQge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG4ubWVudSBpbnB1dFtuYW1lPWZvbGRlcl0ge1xuICB3aWR0aDogMTAwcHg7XG59XG4ubWVudSBjbHItc2lnbnBvc3QgcCB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/s3/s3.component.ts":
  /*!************************************!*\
    !*** ./src/app/s3/s3.component.ts ***!
    \************************************/

  /*! exports provided: S3Component */

  /***/
  function srcAppS3S3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S3Component", function () {
      return S3Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var filesize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! filesize */
    "./node_modules/filesize/lib/filesize.min.js");
    /* harmony import */


    var filesize__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _aws_s3_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../aws/s3.service */
    "./src/app/aws/s3.service.ts");

    var S3Component =
    /*#__PURE__*/
    function () {
      // downBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
      // upBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
      function S3Component(s3s, route, router) {
        _classCallCheck(this, S3Component);

        this.s3s = s3s;
        this.route = route;
        this.router = router;
        this.columns = [{
          field: 'Key',
          label: 'Name',
          sort: 0,
          filter: '',
          width: 0
        }, {
          field: 'Size',
          label: 'Size',
          sort: 0,
          filter: '',
          width: 100
        }, {
          field: 'LastModified',
          label: 'LastModified',
          sort: 0,
          filter: '',
          width: 160
        }];
        this.loading = true;
        this.contents = [];
        this.selected = [];
        this.breadcrumb = [];
        this.folder = '';
        this.isOpen = false;

        this.router.routeReuseStrategy.shouldReuseRoute = function () {
          return false;
        };

        console.log(route);
        this.param = this.route.snapshot.paramMap.get('bucket');

        if (this.param) {
          this.bucket = this.param.split(',')[0];
          this.bprefix = this.param.split(',')[1] || '';
          this.display = this.param.split(',')[2] || this.bucket + (this.bprefix ? '/' + this.bprefix : '');
        }

        this.prefix = this.route.snapshot.paramMap.get('prefix');
        console.log(this.bucket);
        console.log(this.prefix);
        console.log(this.bprefix);
        console.log(this.display);
        console.log(this.breadcrumb);
      }

      _createClass(S3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            var _this8 = this;

            var prefix, data;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.contents = [];
                    this.selected = [];

                    if (!this.bucket) {
                      _context10.next = 14;
                      break;
                    }

                    prefix = this.prefix || this.bprefix;
                    this.loading = true;
                    _context10.next = 7;
                    return this.s3s.listObjectsV2({
                      Bucket: this.bucket,
                      Delimiter: '/',
                      Prefix: prefix
                    });

                  case 7:
                    data = _context10.sent;
                    console.log(data);
                    data.CommonPrefixes.forEach(function (d) {
                      _this8.contents.push({
                        Key: d.Prefix
                      });
                    });
                    data.Contents = data.Contents.filter(function (d) {
                      return prefix !== d.Key;
                    });
                    this.contents = this.contents.concat(data.Contents);
                    this.loading = false;
                    this.setBreadcrumb();

                  case 14:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "download",
        value: function download(key) {
          console.log(key); // this.s3s.getObject({ Bucket: this.bucket, Key: key });

          this.s3s.getSignedUrl({
            Bucket: this.bucket,
            Key: key
          }, this.basename(key));
        }
      }, {
        key: "upload",
        value: function upload(fl) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var i;
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    console.log(fl);

                    if (!(fl.length <= 0)) {
                      _context11.next = 3;
                      break;
                    }

                    return _context11.abrupt("return");

                  case 3:
                    i = 0;

                  case 4:
                    if (!(i < fl.length)) {
                      _context11.next = 10;
                      break;
                    }

                    _context11.next = 7;
                    return this.s3s.upload({
                      Bucket: this.bucket,
                      Key: this.pwd() + fl[i].name,
                      Body: fl[i]
                    });

                  case 7:
                    i++;
                    _context11.next = 4;
                    break;

                  case 10:
                    this.ngOnInit();

                  case 11:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "pwd",
        value: function pwd() {
          var p = this.prefix || this.bprefix || '';

          if (p.includes('/')) {
            return p.split('/').slice(0, -1).join('/') + '/';
          }

          return '';
        }
      }, {
        key: "createFolder",
        value: function createFolder() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var ret;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.s3s.putObject({
                      Bucket: this.bucket,
                      Key: this.pwd() + this.folder + '/'
                    });

                  case 2:
                    ret = _context12.sent;
                    this.folder = '';
                    this.ngOnInit();

                  case 5:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "dlSelected",
        value: function dlSelected() {
          var _this9 = this;

          this.selected.forEach(function (c) {
            _this9.download(c.Key);
          });
        }
      }, {
        key: "refresh",
        value: function refresh() {
          this.ngOnInit();
        }
      }, {
        key: "delete",
        value: function _delete() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            var ret;
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.s3s.deleteObjects({
                      Bucket: this.bucket,
                      Delete: {
                        Objects: this.selected.map(function (x) {
                          return {
                            Key: x.Key
                          };
                        })
                      }
                    });

                  case 2:
                    ret = _context13.sent;
                    this.isOpen = false;
                    this.ngOnInit();

                  case 5:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "basename",
        value: function basename(path) {
          return path.replace(/.*\//, '');
        }
      }, {
        key: "dirname",
        value: function dirname(path) {
          // return path.replace(this.prefix || this.bprefix, '');
          if (path.slice(-1) === '/') {
            return path.split('/').slice(-2)[0] + '/';
          } else if (!this.prefix && this.bprefix && this.bprefix.includes('/')) {
            var p = this.bprefix.replace(/\/.*/, '');
            return path.replace(p + '/', '');
          }

          return path.replace(this.prefix, '');
        }
      }, {
        key: "filesize",
        value: function filesize(value) {
          if (isNaN(value)) {
            return '--';
          }

          return filesize__WEBPACK_IMPORTED_MODULE_3___default()(value);
        }
      }, {
        key: "setBreadcrumb",
        value: function setBreadcrumb() {
          var _this10 = this;

          this.breadcrumb = [];

          if (!this.prefix) {
            return;
          }

          var p = '';
          var b = this.bprefix || '';

          if (b.includes('/')) {
            b = this.bprefix.substring(0, this.bprefix.lastIndexOf('/') + 1);
          }

          console.log(b);
          this.prefix.replace(b, '').split('/').slice(0, -1).forEach(function (e) {
            p = p + e + '/';

            _this10.breadcrumb.push({
              name: e,
              link: ['/s3', _this10.param, b + p]
            });
          });
        }
      }, {
        key: "clearSort",
        value: function clearSort() {
          this.columns.forEach(function (c) {
            return c.sort = 0;
          });
        }
      }, {
        key: "clearFilter",
        value: function clearFilter() {
          this.columns.forEach(function (c) {
            return c.filter = '';
          });
        }
      }]);

      return S3Component;
    }();

    S3Component.ctorParameters = function () {
      return [{
        type: _aws_s3_service__WEBPACK_IMPORTED_MODULE_4__["S3Service"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    S3Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-s3',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./s3.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/s3.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./s3.component.scss */
      "./src/app/s3/s3.component.scss")).default]
    })], S3Component);
    /***/
  },

  /***/
  "./src/app/s3/sidebar/sidebar.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/s3/sidebar/sidebar.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppS3SidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "clr-vertical-nav {\n  height: 100%;\n  padding-top: 0;\n}\n\nform {\n  padding-left: 1rem;\n}\n\nform select {\n  width: 100%;\n}\n\n.add-container,\n.remove-container {\n  padding: 0 0.6rem 0 2rem;\n}\n\n.add-container p,\n.remove-container p {\n  margin-top: 0.5rem;\n}\n\n.add-container ::ng-deep clr-input-container,\n.add-container ::ng-deep clr-select-container,\n.remove-container ::ng-deep clr-input-container,\n.remove-container ::ng-deep clr-select-container {\n  margin: 0.5rem 0;\n}\n\n.add-container ::ng-deep .clr-control-container,\n.remove-container ::ng-deep .clr-control-container {\n  width: 100%;\n}\n\n.add-container select,\n.add-container input,\n.remove-container select,\n.remove-container input {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vcGV0b29scy9zM21hbmFnZXIvc3JjL2FwcC9zMy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3MzL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDSkY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRElFO0VBQ0UsV0FBQTtBQ0ZKOztBRE1BOztFQUtFLHdCQUFBO0FDTkY7O0FER0U7O0VBQ0Usa0JBQUE7QUNBSjs7QURJSTs7OztFQUVFLGdCQUFBO0FDQU47O0FERUk7O0VBQ0UsV0FBQTtBQ0NOOztBREVFOzs7O0VBRUUsV0FBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvczMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOjpuZy1kZWVwIHtcbi8vICAgLmNsci1jb250cm9sLWxhYmVsIHtcbi8vICAgICBkaXNwbGF5OiBub25lO1xuLy8gICB9XG4vLyB9XG5jbHItdmVydGljYWwtbmF2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbmZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmFkZC1jb250YWluZXIsXG4ucmVtb3ZlLWNvbnRhaW5lciB7XG4gIHAge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxuICBwYWRkaW5nOiAwIDAuNnJlbSAwIDJyZW07XG4gIDo6bmctZGVlcCB7XG4gICAgY2xyLWlucHV0LWNvbnRhaW5lcixcbiAgICBjbHItc2VsZWN0LWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgIH1cbiAgICAuY2xyLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuICBzZWxlY3QsXG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuIiwiY2xyLXZlcnRpY2FsLW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5cbmZvcm0ge1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG59XG5mb3JtIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYWRkLWNvbnRhaW5lcixcbi5yZW1vdmUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAwLjZyZW0gMCAycmVtO1xufVxuLmFkZC1jb250YWluZXIgcCxcbi5yZW1vdmUtY29udGFpbmVyIHAge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4uYWRkLWNvbnRhaW5lciA6Om5nLWRlZXAgY2xyLWlucHV0LWNvbnRhaW5lcixcbi5hZGQtY29udGFpbmVyIDo6bmctZGVlcCBjbHItc2VsZWN0LWNvbnRhaW5lcixcbi5yZW1vdmUtY29udGFpbmVyIDo6bmctZGVlcCBjbHItaW5wdXQtY29udGFpbmVyLFxuLnJlbW92ZS1jb250YWluZXIgOjpuZy1kZWVwIGNsci1zZWxlY3QtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwLjVyZW0gMDtcbn1cbi5hZGQtY29udGFpbmVyIDo6bmctZGVlcCAuY2xyLWNvbnRyb2wtY29udGFpbmVyLFxuLnJlbW92ZS1jb250YWluZXIgOjpuZy1kZWVwIC5jbHItY29udHJvbC1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5hZGQtY29udGFpbmVyIHNlbGVjdCxcbi5hZGQtY29udGFpbmVyIGlucHV0LFxuLnJlbW92ZS1jb250YWluZXIgc2VsZWN0LFxuLnJlbW92ZS1jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/s3/sidebar/sidebar.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/s3/sidebar/sidebar.component.ts ***!
    \*************************************************/

  /*! exports provided: S3SidebarComponent */

  /***/
  function srcAppS3SidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S3SidebarComponent", function () {
      return S3SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/constant */
    "./src/app/constant.ts");

    var S3SidebarComponent =
    /*#__PURE__*/
    function () {
      function S3SidebarComponent(activatedRoute) {
        _classCallCheck(this, S3SidebarComponent);

        this.activatedRoute = activatedRoute;
        this.prefix = '';
        this.display = '';
        this.bucketPattern = '^[a-z0-9.-]{3,63}$';

        if (activatedRoute.snapshot.data.buckets) {
          this.buckets = activatedRoute.snapshot.data.buckets;
        }
      }

      _createClass(S3SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.buckets = new Set(JSON.parse(localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] || '[]'));
        }
      }, {
        key: "addBucket",
        value: function addBucket() {
          var buckets = new Set(JSON.parse(localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] || '[]'));
          buckets.add(this.bucketa + ',' + this.prefix + ',' + this.display);
          console.log(buckets);
          localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] = JSON.stringify(Array.from(buckets));
          this.buckets = buckets;
          this.bucketa = '';
          this.prefix = '';
          this.display = '';
        }
      }, {
        key: "removeBucket",
        value: function removeBucket() {
          console.log(this.bucketr);
          var buckets = new Set(JSON.parse(localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] || '[]'));
          buckets.delete(this.bucketr);
          localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_3__["LOCAL_KEY_BUCKETS"]] = JSON.stringify(Array.from(buckets));
          this.buckets = buckets;
        }
      }, {
        key: "disp",
        value: function disp(bucket) {
          var b = bucket.split(',');
          return b[2] || b[0] + (b[1] ? '/' + b[1] : '');
        }
      }]);

      return S3SidebarComponent;
    }();

    S3SidebarComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    S3SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/s3/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/s3/sidebar/sidebar.component.scss")).default]
    })], S3SidebarComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! aws-sdk */
    "./node_modules/aws-sdk/lib/browser.js");
    /* harmony import */


    var aws_sdk__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var sinon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sinon */
    "./node_modules/sinon/lib/sinon.js");
    /* harmony import */


    var sinon__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sinon__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/constant */
    "./src/app/constant.ts");
    /* harmony import */


    var _mocks_auth_changePassword_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../mocks/auth/changePassword.json */
    "./src/mocks/auth/changePassword.json");

    var _mocks_auth_changePassword_json__WEBPACK_IMPORTED_MODULE_5___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/auth/changePassword.json */
    "./src/mocks/auth/changePassword.json", 1);
    /* harmony import */


    var _mocks_auth_currentCredentials_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../mocks/auth/currentCredentials.json */
    "./src/mocks/auth/currentCredentials.json");

    var _mocks_auth_currentCredentials_json__WEBPACK_IMPORTED_MODULE_6___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/auth/currentCredentials.json */
    "./src/mocks/auth/currentCredentials.json", 1);
    /* harmony import */


    var _mocks_auth_signIn_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../mocks/auth/signIn.json */
    "./src/mocks/auth/signIn.json");

    var _mocks_auth_signIn_json__WEBPACK_IMPORTED_MODULE_7___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/auth/signIn.json */
    "./src/mocks/auth/signIn.json", 1);
    /* harmony import */


    var _mocks_s3_deleteObjects_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../mocks/s3/deleteObjects.json */
    "./src/mocks/s3/deleteObjects.json");

    var _mocks_s3_deleteObjects_json__WEBPACK_IMPORTED_MODULE_8___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/s3/deleteObjects.json */
    "./src/mocks/s3/deleteObjects.json", 1);
    /* harmony import */


    var _mocks_s3_listObjectsV2_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../mocks/s3/listObjectsV2.json */
    "./src/mocks/s3/listObjectsV2.json");

    var _mocks_s3_listObjectsV2_json__WEBPACK_IMPORTED_MODULE_9___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/s3/listObjectsV2.json */
    "./src/mocks/s3/listObjectsV2.json", 1);
    /* harmony import */


    var _mocks_s3_putObject_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../mocks/s3/putObject.json */
    "./src/mocks/s3/putObject.json");

    var _mocks_s3_putObject_json__WEBPACK_IMPORTED_MODULE_10___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/s3/putObject.json */
    "./src/mocks/s3/putObject.json", 1);
    /* harmony import */


    var _mocks_s3_upload_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../mocks/s3/upload.json */
    "./src/mocks/s3/upload.json");

    var _mocks_s3_upload_json__WEBPACK_IMPORTED_MODULE_11___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../mocks/s3/upload.json */
    "./src/mocks/s3/upload.json", 1);

    var environment = {
      production: true,
      title: '[Demo]S3 Manager',
      logins: [{
        type: "0"
        /* cognito */
        ,
        name: 'Amazon Cognito',
        region: 'ap-northeast-1',
        identityPoolId: 'ap-northeast-1:',
        userPoolId: 'ap-northeast-1_xxxxx',
        userPoolWebClientId: 'xxxxxx'
      }, {
        type: "1"
        /* accessKey */
        ,
        name: 'AWS Access Key',
        region: 'ap-northeast-1'
      }]
    };
    var stub = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]();
    Object.keys(_mocks_s3_listObjectsV2_json__WEBPACK_IMPORTED_MODULE_9__).forEach(function (e) {
      var v = e.split(',');
      stub.withArgs({
        Bucket: v[0],
        Delimiter: '/',
        Prefix: v[1]
      }).returns({
        promise: function promise() {
          return _mocks_s3_listObjectsV2_json__WEBPACK_IMPORTED_MODULE_9__[e];
        }
      });
    });
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].prototype.listObjectsV2 = stub;
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].ManagedUpload = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns({
      promise: function promise() {
        return _mocks_s3_upload_json__WEBPACK_IMPORTED_MODULE_11__;
      },
      constructor: function constructor() {}
    });
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].prototype.upload = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns({
      on: function on(event, listener) {
        return new aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].ManagedUpload({});
      }
    });
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].prototype.putObject = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns({
      promise: function promise() {
        return _mocks_s3_putObject_json__WEBPACK_IMPORTED_MODULE_10__;
      }
    });
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].prototype.deleteObjects = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns({
      promise: function promise() {
        return _mocks_s3_deleteObjects_json__WEBPACK_IMPORTED_MODULE_8__;
      }
    });
    aws_sdk__WEBPACK_IMPORTED_MODULE_2__["S3"].prototype.getSignedUrl = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns('https://github.githubassets.com/images/modules/logos_page/Octocat.png');
    var si = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]();
    si.withArgs('admin', 'passowrd').returns(Promise.resolve(_mocks_auth_signIn_json__WEBPACK_IMPORTED_MODULE_7__));
    aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].signIn = si;
    aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentAuthenticatedUser = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns(Promise.resolve(_mocks_auth_signIn_json__WEBPACK_IMPORTED_MODULE_7__));
    aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].currentCredentials = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns(Promise.resolve(_mocks_auth_currentCredentials_json__WEBPACK_IMPORTED_MODULE_6__));
    aws_amplify__WEBPACK_IMPORTED_MODULE_1__["Auth"].changePassword = sinon__WEBPACK_IMPORTED_MODULE_3__["stub"]().returns(Promise.resolve(_mocks_auth_changePassword_json__WEBPACK_IMPORTED_MODULE_5__));
    var buckets = new Set();
    buckets.add('cloudtrail-sample-bucket,,');
    buckets.add('cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/,regions');
    buckets.add('cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/,ap-northeast-1/2020/01/12');
    localStorage[src_app_constant__WEBPACK_IMPORTED_MODULE_4__["LOCAL_KEY_BUCKETS"]] = JSON.stringify(Array.from(buckets));
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aws-amplify */
    "./node_modules/aws-amplify/lib-esm/index.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app/constant */
    "./src/app/constant.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (localStorage[_app_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_LOGIN_TYPE"]] == "0"
    /* cognito */
    ) {
        var i = parseInt(localStorage[_app_constant__WEBPACK_IMPORTED_MODULE_5__["LOCAL_KEY_LOGIN_INDEX"]]);
        aws_amplify__WEBPACK_IMPORTED_MODULE_3__["default"].configure({
          Auth: {
            identityPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].identityPoolId,
            region: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].region,
            userPoolId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].userPoolId,
            userPoolWebClientId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].logins[i].userPoolWebClientId
          }
        });
      }

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();

      if (window) {
        window.console.log = function () {};
      }
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/mocks/auth/changePassword.json":
  /*!********************************************!*\
    !*** ./src/mocks/auth/changePassword.json ***!
    \********************************************/

  /*! exports provided: code, name, message, default */

  /***/
  function srcMocksAuthChangePasswordJson(module) {
    module.exports = JSON.parse("{\"code\":\"InvalidParameterException\",\"name\":\"InvalidParameterException\",\"message\":\"2 validation errors detected: Value at 'previousPassword' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at 'proposedPassword' failed to satisfy constraint: Member must have length greater than or equal to 6\"}");
    /***/
  },

  /***/
  "./src/mocks/auth/currentCredentials.json":
  /*!************************************************!*\
    !*** ./src/mocks/auth/currentCredentials.json ***!
    \************************************************/

  /*! exports provided: expired, expireTime, refreshCallbacks, accessKeyId, sessionToken, params, data, _identityId, _clientConfig, webIdentityCredentials, cognito, sts, authenticated, default */

  /***/
  function srcMocksAuthCurrentCredentialsJson(module) {
    module.exports = JSON.parse("{\"expired\":false,\"expireTime\":\"2030-01-12T10:20:14.000Z\",\"refreshCallbacks\":[],\"accessKeyId\":\"A1IA3QM5CD5CVIWO39LS\",\"sessionToken\":\"IQoJb3JpZ2luX2VjEKH//////////wEaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAN3heNWKQkb5hy8hR9XXv0eAqL8pAKy9URJU6s6+dZkuAiA368NQChpclTKs7jC3R4FJtDrfRCdP3pJozVm/8ABiHSqcBCgqEAAaDDc2NTM3MTQ1MzI1MiIM6tD6QawQ8Ws+l4AhKvkShIvVVN5JQXVbGvsf04cMbHSPbThMyp/6EE3XwNTIPC/4hMq7x3vaKqdVuINcNPJ0eCyxKfAM5wSSeMfHUINKuxQsaApTPDFoA9Sx+4ov+xo8dUGMiF1FAUVhbd6di6gcj33upCkzjrKTE6p/5B37OT2bAt1mG99HNBMR6mL9usRP+7QGLW7tGkN5au6cUPutJXB6vU4szBiKhH+KizhOKXOdLcwz5/A/vDeDwDHVRw0Z8XAbGdtlUpIdVSCKZVAirhuHZ8Qdj4dM1KTXYNo9mP2LPZoZmR2nyfjrGgCxopMAh2FRTHcJfYPwLQLMkTI9DXHhB7wpToV/eJEcZAfl2Sde7tL0sJ58dlkN3Jmrn2i/DSyNrG5GzZhiG5L//D6lv0lhT9NU2MwFh/YQnzBQzU746bEn5PMfcoDjTVZEfIeBVgVDquUW6W820kYJde6dTk/5DkuhHv8OYXEMMuSI+kfCz6RePIOSobouDxab4cle8j1CKjSS8bo7ESs0FQ3r4mWL8TLw3H3bXVIQyM3mF91yHJkTcYdqq3GkPuZW89TL+SqnuIJD2GazGETy2Js3u5Pt0Zos/QbTsRFLP1s3UBNmbbkIVixFR0jzk06DnXOn1Co/BPGQ6A99ByPhHaOsuax0kRTYxSuW8H8rlQs2KGjimoZ9+2TG6IvDDOyevwBTrLAtEUnKS9F3Dsz2KvJNdJYf7NTPfjYIp1TxapmG4+O9NJf59Qwg6aFwXYU21yF8YR7lWDRDaxWW7A5Fx6cNdh4JU5eT1CoLZbOlIAxDCrcZUiZavsEyEIfllMIFrW0EEJvACD8XpeQoRSXqCyNLeNTDPko4IwVp4lVPiyOXxqanFvQOBgHEpqXkTp6J1LIDwtmhRn21NAuy7Mgb5D3CZtexPZRrF2PdUHJmou00S+xBXEA60VOpcAw/GW1k03Vo612wxirpsKy7+aC+9x7fqSpt+b2jjDIiIvs9ztez20Sp3AISiBgRon85FjTCAtjvQt2CFn4XN05MK4/FHBUrIO2LG4i7U2M/i7r6qTmPkZRyqd2VJ+guyw8dPKzu6TWPDeFJKI1R5O4sLWybkS+DdzeRwUvA01FHwpyoAxHU5dqDAwAL7dWqszCjpLjGE=\",\"params\":{\"IdentityPoolId\":\"ap-northeast-1:d8fff9223-qw01-4567-3241-f9923dhga04\",\"Logins\":{\"cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_A3bAd4qta\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZAAuYXAtbm9ydGhlYXN0LTEuYW1hem9745XdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpybadlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI3ODg2ZGFjZi0zZTVlLTRkOGItODkyYy1hNmJlZGU0ZjQ3NGMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODgyMDgxNCwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1NzAfMjQ0MTQsImlhdCI6MTU3ODgyMDgxNH0.ch55ygSZfhvEglMkgPEDEZ_FZQkylag-K7xTARYBaa_QkkqGN5mg30HdZb7ll3_-198YuZxRJTLzdEsOY-Rvo7a3YVwNmVcLPajJ1x5no3dz-RA-DVlGyDIu5W565dN5QBP57E1oI3N5SrscZRDqNGcsHCDaRKjJ-SBR5p5fFD4B4Q02mzWjiiloxHz-9sfF8awooRTXAP10U9uQ0KiSd6qjUmje4fnoCrdbK0N36lIhqirf8jJcpdveoGn25U9rsfm781mNjtF-fNrjDHEGq2kpZqFlhv4Sp1TofHa4YlUhrcNTjFbkPpgHbsooKYVuqIUgu4eQOcO7ZmeDWWyUDg\"},\"RoleSessionName\":\"web-identity\",\"IdentityId\":\"ap-northeast-1:f9sde42d-zxxc-1234-htwd-73e208acbeb4\"},\"data\":{\"IdentityId\":\"ap-northeast-1:f9sde42d-zxxc-1234-htwd-73e208acbeb4\",\"Credentials\":{\"AccessKeyId\":\"A1IA3QM5CD5CVIWO39LS\",\"SecretKey\":\"BGz848Y+nuEcfXmh+03bYMfBw7CpoAHAp83DnUdr\",\"SessionToken\":\"IQoJb3JpZ2luX2VjEKH//////////wEaDmFwLW5vcnRoZWFzdC0xIkcwRQIhAN3heNWKQkb5hy8hR9XXv0eAqL8pAKy9URJU6s6+dZkuAiA368NQChpclTKs7jC3R4FJtDrfRCdP3pJozVm/8ABiHSqcBCgqEAAaDDc2NTM3MTQ1MzI1MiIM6tD6QawQ8Ws+l4AhKvkShIvVVN5JQXVbGvsf04cMbHSPbThMyp/6EE3XwNTIPC/4hMq7x3vaKqdVuINcNPJ0eCyxKfAM5wSSeMfHUINKuxQsaApTPDFoA9Sx+4ov+xo8dUGMiF1FAUVhbd6di6gcj33upCkzjrKTE6p/5B37OT2bAt1mG99HNBMR6mL9usRP+7QGLW7tGkN5au6cUPutJXB6vU4szBiKhH+KizhOKXOdLcwz5/A/vDeDwDHVRw0Z8XAbGdtlUpIdVSCKZVAirhuHZ8Qdj4dM1KTXYNo9mP2LPZoZmR2nyfjrGgCxopMAh2FRTHcJfYPwLQLMkTI9DXHhB7wpToV/eJEcZAfl2Sde7tL0sJ58dlkN3Jmrn2i/DSyNrG5GzZhiG5L//D6lv0lhT9NU2MwFh/YQnzBQzU746bEn5PMfcoDjTVZEfIeBVgVDquUW6W820kYJde6dTk/5DkuhHv8OYXEMMuSI+kfCz6RePIOSobouDxab4cle8j1CKjSS8bo7ESs0FQ3r4mWL8TLw3H3bXVIQyM3mF91yHJkTcYdqq3GkPuZW89TL+SqnuIJD2GazGETy2Js3u5Pt0Zos/QbTsRFLP1s3UBNmbbkIVixFR0jzk06DnXOn1Co/BPGQ6A99ByPhHaOsuax0kRTYxSuW8H8rlQs2KGjimoZ9+2TG6IvDDOyevwBTrLAtEUnKS9F3Dsz2KvJNdJYf7NTPfjYIp1TxapmG4+O9NJf59Qwg6aFwXYU21yF8YR7lWDRDaxWW7A5Fx6cNdh4JU5eT1CoLZbOlIAxDCrcZUiZavsEyEIfllMIFrW0EEJvACD8XpeQoRSXqCyNLeNTDPko4IwVp4lVPiyOXxqanFvQOBgHEpqXkTp6J1LIDwtmhRn21NAuy7Mgb5D3CZtexPZRrF2PdUHJmou00S+xBXEA60VOpcAw/GW1k03Vo612wxirpsKy7+aC+9x7fqSpt+b2jjDIiIvs9ztez20Sp3AISiBgRon85FjTCAtjvQt2CFn4XN05MK4/FHBUrIO2LG4i7U2M/i7r6qTmPkZRyqd2VJ+guyw8dPKzu6TWPDeFJKI1R5O4sLWybkS+DdzeRwUvA01FHwpyoAxHU5dqDAwAL7dWqszCjpLjGE=\",\"Expiration\":\"2020-01-12T10:20:14.000Z\"}},\"_identityId\":\"ap-northeast-1:f9sde42d-zxxc-1234-htwd-73e208acbeb4\",\"_clientConfig\":{\"region\":\"ap-northeast-1\"},\"webIdentityCredentials\":{\"expired\":true,\"expireTime\":null,\"refreshCallbacks\":[],\"params\":{\"IdentityPoolId\":\"ap-northeast-1:d8fff9223-qw01-4567-3241-f9923dhga04\",\"Logins\":{\"cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_A3bAd4qta\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZAAuYXAtbm9ydGhlYXN0LTEuYW1hem9745XdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpybadlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI3ODg2ZGFjZi0zZTVlLTRkOGItODkyYy1hNmJlZGU0ZjQ3NGMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODgyMDgxNCwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1NzAfMjQ0MTQsImlhdCI6MTU3ODgyMDgxNH0.ch55ygSZfhvEglMkgPEDEZ_FZQkylag-K7xTARYBaa_QkkqGN5mg30HdZb7ll3_-198YuZxRJTLzdEsOY-Rvo7a3YVwNmVcLPajJ1x5no3dz-RA-DVlGyDIu5W565dN5QBP57E1oI3N5SrscZRDqNGcsHCDaRKjJ-SBR5p5fFD4B4Q02mzWjiiloxHz-9sfF8awooRTXAP10U9uQ0KiSd6qjUmje4fnoCrdbK0N36lIhqirf8jJcpdveoGn25U9rsfm781mNjtF-fNrjDHEGq2kpZqFlhv4Sp1TofHa4YlUhrcNTjFbkPpgHbsooKYVuqIUgu4eQOcO7ZmeDWWyUDg\"},\"RoleSessionName\":\"web-identity\",\"IdentityId\":\"ap-northeast-1:f9sde42d-zxxc-1234-htwd-73e208acbeb4\"},\"data\":null,\"_clientConfig\":{\"region\":\"ap-northeast-1\"}},\"cognito\":{\"config\":{\"credentials\":null,\"credentialProvider\":null,\"region\":\"ap-northeast-1\",\"logger\":null,\"apiVersions\":{},\"apiVersion\":null,\"endpoint\":\"cognito-identity.ap-northeast-1.amazonaws.com\",\"httpOptions\":{\"timeout\":120000},\"maxRedirects\":10,\"paramValidation\":true,\"sslEnabled\":true,\"s3ForcePathStyle\":false,\"s3BucketEndpoint\":false,\"s3DisableBodySigning\":true,\"computeChecksums\":true,\"convertResponseTypes\":true,\"correctClockSkew\":false,\"customUserAgent\":\"aws-amplify/2.2.1 js\",\"dynamoDbCrc32\":true,\"systemClockOffset\":0,\"signatureVersion\":\"v4\",\"signatureCache\":true,\"retryDelayOptions\":{},\"useAccelerateEndpoint\":false,\"clientSideMonitoring\":false,\"endpointDiscoveryEnabled\":false,\"endpointCacheSize\":1000,\"hostPrefixEnabled\":true,\"params\":{\"IdentityPoolId\":\"ap-northeast-1:d8fff9223-qw01-4567-3241-f9923dhga04\",\"Logins\":{\"cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_A3bAd4qta\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZAAuYXAtbm9ydGhlYXN0LTEuYW1hem9745XdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpybadlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI3ODg2ZGFjZi0zZTVlLTRkOGItODkyYy1hNmJlZGU0ZjQ3NGMiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODgyMDgxNCwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1NzAfMjQ0MTQsImlhdCI6MTU3ODgyMDgxNH0.ch55ygSZfhvEglMkgPEDEZ_FZQkylag-K7xTARYBaa_QkkqGN5mg30HdZb7ll3_-198YuZxRJTLzdEsOY-Rvo7a3YVwNmVcLPajJ1x5no3dz-RA-DVlGyDIu5W565dN5QBP57E1oI3N5SrscZRDqNGcsHCDaRKjJ-SBR5p5fFD4B4Q02mzWjiiloxHz-9sfF8awooRTXAP10U9uQ0KiSd6qjUmje4fnoCrdbK0N36lIhqirf8jJcpdveoGn25U9rsfm781mNjtF-fNrjDHEGq2kpZqFlhv4Sp1TofHa4YlUhrcNTjFbkPpgHbsooKYVuqIUgu4eQOcO7ZmeDWWyUDg\"},\"RoleSessionName\":\"web-identity\",\"IdentityId\":\"ap-northeast-1:f9sde42d-zxxc-1234-htwd-73e208acbeb4\"}},\"isGlobalEndpoint\":false,\"endpoint\":{\"protocol\":\"https:\",\"host\":\"cognito-identity.ap-northeast-1.amazonaws.com\",\"port\":443,\"hostname\":\"cognito-identity.ap-northeast-1.amazonaws.com\",\"pathname\":\"/\",\"path\":\"/\",\"href\":\"https://cognito-identity.ap-northeast-1.amazonaws.com/\"},\"_events\":{\"apiCallAttempt\":[null],\"apiCall\":[null]},\"_clientId\":1},\"sts\":{\"config\":{\"credentials\":null,\"credentialProvider\":null,\"region\":\"ap-northeast-1\",\"logger\":null,\"apiVersions\":{},\"apiVersion\":null,\"endpoint\":\"https://sts.amazonaws.com\",\"httpOptions\":{\"timeout\":120000},\"maxRedirects\":10,\"paramValidation\":true,\"sslEnabled\":true,\"s3ForcePathStyle\":false,\"s3BucketEndpoint\":false,\"s3DisableBodySigning\":true,\"computeChecksums\":true,\"convertResponseTypes\":true,\"correctClockSkew\":false,\"customUserAgent\":\"aws-amplify/2.2.1 js\",\"dynamoDbCrc32\":true,\"systemClockOffset\":0,\"signatureVersion\":\"v4\",\"signatureCache\":true,\"retryDelayOptions\":{},\"useAccelerateEndpoint\":false,\"clientSideMonitoring\":false,\"endpointDiscoveryEnabled\":false,\"endpointCacheSize\":1000,\"hostPrefixEnabled\":true},\"isGlobalEndpoint\":true,\"endpoint\":{\"protocol\":\"https:\",\"host\":\"sts.amazonaws.com\",\"port\":443,\"hostname\":\"sts.amazonaws.com\",\"pathname\":\"/\",\"path\":\"/\",\"href\":\"https://sts.amazonaws.com/\"},\"_events\":{\"apiCallAttempt\":[null],\"apiCall\":[null]},\"_clientId\":2},\"authenticated\":true}");
    /***/
  },

  /***/
  "./src/mocks/auth/signIn.json":
  /*!************************************!*\
    !*** ./src/mocks/auth/signIn.json ***!
    \************************************/

  /*! exports provided: username, pool, Session, client, signInUserSession, authenticationFlowType, storage, keyPrefix, userDataKey, deviceKey, attributes, preferredMFA, default */

  /***/
  function srcMocksAuthSignInJson(module) {
    module.exports = JSON.parse("{\"username\":\"testuser\",\"pool\":{\"userPoolId\":\"region_P2bTv2qtn\",\"clientId\":\"clientid\",\"client\":{\"endpoint\":\"https://cognito-idp.region.amazonaws.com/\",\"userAgent\":\"aws-amplify/0.1.x js\"},\"advancedSecurityDataCollectionFlag\":true,\"storage\":{\"CognitoIdentityServiceProvider.clientid.testuser.userData\":\"{\\\"UserAttributes\\\":[{\\\"Name\\\":\\\"sub\\\",\\\"Value\\\":\\\"2fcdebed-8712-4d03-9c01-a99ee27ad9b5\\\"},{\\\"Name\\\":\\\"custom:aaaaa\\\",\\\"Value\\\":\\\"A\\\"},{\\\"Name\\\":\\\"custom:test\\\",\\\"Value\\\":\\\"azxzxzxzx\\\"}],\\\"Username\\\":\\\"testuser\\\"}\",\"CognitoIdentityServiceProvider.clientid.testuser.accessToken\":\"eyJraWQiOiJcL21tUDl5V25sRGRRYnNxbHdVRFYxK0w0a3RGMjR3a0NrQ2lVYzcrbjU2Yz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImV2ZW50X2lkIjoiNTNjNjgxMmMtYzc2MS00NzA0LTk1MDgtYjhkNTNiNzJkNTM4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLW5vcnRoZWFzdC0xX1AyYlR2MnF0biIsImV4cCI6MTU3ODQxNjI4NiwiaWF0IjoxNTc4NDEyNjg2LCJqdGkiOiI3Y2VhNWEyMi0zZDM3LTQ3OWYtOWRlOS0zNDcxOTEyOGEzMjMiLCJjbGllbnRfaWQiOiIxMzA0ZDVsa2M3MW9mdnNvM3R0aXV0ZzM4NiIsInVzZXJuYW1lIjoidGVzdDAwMDEifQ.FQ6jxLFwk4ENirpuRR1iVYUQ6glaXP7rxzBi7Tw8vEN3Nhzp_348l0onwqVXfs5z8thNopgeYaUDWuJl6OAPRQplHo8CcEYP1x4wtqXvBVpxQ5r4-CW_slKJnCHoD-ieQHCvWN2j61J5oWgP5_Gm_mp0zSP5ETCDNC-7lvIKHlXAB6rZRzzRibStjtzHepY3GmQdrRRy_ErJWjgYMVpiUvzevS1l15DAC2g4WaixnGuJ0JVL8tFAirzr8ms9Ryg8dVY8dTq5r9JgSsAlUp4h3bLjPI7KwkV-qT9CkfIteumeLU1em2HR4CmUOxwp3genuT2inNbHG_ubfR02NRfppw\",\"CognitoIdentityServiceProvider.clientid.LastAuthUser\":\"testuser\",\"amplify-signin-with-hostedUI\":\"false\",\"CognitoIdentityServiceProvider.clientid.testuser.refreshToken\":\"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.K3rcEoziPiFHPOKlO6FKGoPVADHpwRxz7hvMCdhQFHNVyF0U53p8MnFm2_ON8zC5tGZUtZHKWRmknzh-9OHgkJi6UG_Ch_UUcQ8BGjvCZln6Sts0CjvcCftRzCeeda3qxW-YzzeOBQRTy2hqvglLDb1mzxiSiQxPrwDrkvAdjKGX7qZAS4ianTd_rrUBDPprP1qVy2IfsVZmgiKbZEKTBIVgA6pmd9q_sTE64501zRpoZiU3sVURkao8C3TDnaRB5UJeib4lQsJa7JV3c2DBWo3mCXfr4o56BobM6SAIOAACFh7t_CDnaRmq10UHfyCMwqWoDSIv-ixPViDRJUi0Kw.iZQV1tAtcr3NTKlh.LQCpjvDFidJ-0HTP2tgPhe5BE0qcr57RXwaCVfMb2aG7_sBMcalymXwmrg7nNljyGyp1n0vgyYiUK1cHHnUGDwYlItoQ19XCVGclsH4rhVMZ8CLTbMNzaiMD4dPbkV3JdnVC29t5KGNPG76x0-NWtEPzqFtqopnOx65n_MFxF77V-_rtsGBMoF-_CliJh9LcRbPnwQdjtVCOSqQvfJBpHNkTLQV9LJVuAza0FZJ_uRcKg-k_JmTi9K8xlCYxmXtIBovdMc21aUAgbfT7tjhCuzR67F44U4ybV2UTHYC0XaDzR9pMHhnrRULeFJjT_PTDGvtLlZNzSdUTJL5rcRKBN24R1OeTZBUDjsLTlAMRvtkaqwG7n95WmklzwvB8nkMpqhHhLyhdEpL1DaNRCHwl9e78FiGC97INpzUqD0PU5HXIQhcsO8rYNKV394RTaYf1umyLbwdzdZ7DxfKVN1vtKuLZYhIf9fPaTuQFrHa2wwoSDox7hJJI8Xp1-FOpES7DkbIoyb_SvDOIxGONsRQsaCrOdwn_YIHPqz4SsviO34CszPQqNn5rMBhLU8B6GlME3vSlzbbrtbgYJb2LPiOgsqXtmrNuAXnt4da-i1vtlQnvgW66WIvRVdw9mAt4xNPICTpizE5nKI39n5c5c_EBamZ7JX8IY8CGoxtPjd5At6IF16YhgQNXHwE9zujyOzEPoWsPSAgJsWANRjYj6w-hcKgTNp57ZBXE1V3epfUOAU5fcBRfeeCIzAZYU9IsVISnWkxKagV8RN4QT5hyg7-v_Oztk31ETbCM9Ge4ho0Id8Fp4PWCx4Xf8BaGFQ0sv0dq-tEYUCH4G2JADIAFgWQrBBDMGIkCONy2aCbjGCqQNszSArSrTWqx_qKrmqu9tbiL52waXTh3q3VTyTLb5fIgNyxX-29jjLavf_itxcJwwGwnftZ3Uyk4Ay9YGy6nEvXkAikUNNrNbjm2sbFPqwOe2DrYoQohf282xTxd6087go5F0fBStIVIG_wGsYvUy2x4Ppd_F5tPX8ot6j811oPzp0xFutnXBJEvgtuFXXWQnef0ZTZQ9vepYDssdJ3wd18cft3a9a1xyujNLL3K34TkISqunoy-1b2W6VPKIVRBWB_-2a8kg8k8fDi2xCpmwU84st-Dzmwq8sM9-wgj2IW3ABJA8jAEoWHXg4IE95qf6DBCMuFGDvTfAY_4KvrxliyptzZIqlMEXhFa6vRr8HWh02HEGTRHp8RRq0d97hrtvc1Pyk1arR6jlFPaQCsn6IVlVaU71rCBvtGdAPnYVb7nat1K-PyJng.StI4rPRIFGhNinmZMFPBMA\",\"CognitoIdentityServiceProvider.clientid.testuser.clockDrift\":\"-1\",\"CognitoIdentityServiceProvider.clientid.testuser.idToken\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI1M2M2ODEyYy1jNzYxLTQ3MDQtOTUwOC1iOGQ1M2I3MmQ1MzgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1Nzg0MTYyODYsImlhdCI6MTU3ODQxMjY4Nn0.dNuzb2iKiJ8L1UiJE_L45rkDgOaqS46VpCeQVVFvlkMUdPxeRaxhfSNLV9Tm5EzQQPKtfe36t1APiImbidhSwRoXHNT02QzzPpYsJNUbU3spix1Yukphuw4fQ2alQI3hpGMbZn57zLbb2JjVC6vSU3_bQBlIejLwNTOFGgLy5mtbs87wrEdTk_JCLTpYMfiPW4g37MMzdcjIiAMW2NOhdem__aWfR3Na6cBwKCiyn2zsxmvTP2Bj_64gHYqLI2Ct8Cw45NcoE7_u_9yZ5kNXzJGhVbDXbksrijF8mMvjvCdmPQZNwrO_wKTpx1eWY8IGEP1faU4kZJCG0D2kKyCDJA\",\"aws.cognito.identity-id.region:d8fff9223-qw01-4567-3241-f9923dhga04\":\"region:f9b1c82d-b6f0-4669-bea3-73e2082cbeb4\",\"aws.cognito.identity-providers.region:d8fff9223-qw01-4567-3241-f9923dhga04\":\"cognito-idp.region.amazonaws.com/region_P2bTv2qtn\"}},\"Session\":null,\"client\":{\"endpoint\":\"https://cognito-idp.region.amazonaws.com/\",\"userAgent\":\"aws-amplify/0.1.x js\"},\"signInUserSession\":{\"idToken\":{\"jwtToken\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI1M2M2ODEyYy1jNzYxLTQ3MDQtOTUwOC1iOGQ1M2I3MmQ1MzgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1Nzg0MTYyODYsImlhdCI6MTU3ODQxMjY4Nn0.dNuzb2iKiJ8L1UiJE_L45rkDgOaqS46VpCeQVVFvlkMUdPxeRaxhfSNLV9Tm5EzQQPKtfe36t1APiImbidhSwRoXHNT02QzzPpYsJNUbU3spix1Yukphuw4fQ2alQI3hpGMbZn57zLbb2JjVC6vSU3_bQBlIejLwNTOFGgLy5mtbs87wrEdTk_JCLTpYMfiPW4g37MMzdcjIiAMW2NOhdem__aWfR3Na6cBwKCiyn2zsxmvTP2Bj_64gHYqLI2Ct8Cw45NcoE7_u_9yZ5kNXzJGhVbDXbksrijF8mMvjvCdmPQZNwrO_wKTpx1eWY8IGEP1faU4kZJCG0D2kKyCDJA\",\"payload\":{\"sub\":\"2fcdebed-8712-4d03-9c01-a99ee27ad9b5\",\"cognito:groups\":[\"groupa\",\"groupb\"],\"custom:aaaaa\":\"A\",\"iss\":\"https://cognito-idp.region.amazonaws.com/region_P2bTv2qtn\",\"cognito:username\":\"testuser\",\"cognito:roles\":[\"arn:aws:iam::account_id:role/group_role\"],\"aud\":\"clientid\",\"event_id\":\"53c6812c-c761-4704-9508-b8d53b72d538\",\"token_use\":\"id\",\"auth_time\":1578412686,\"custom:test\":\"azxzxzxzx\",\"exp\":1578416286,\"iat\":1578412686}},\"refreshToken\":{\"token\":\"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.K3rcEoziPiFHPOKlO6FKGoPVADHpwRxz7hvMCdhQFHNVyF0U53p8MnFm2_ON8zC5tGZUtZHKWRmknzh-9OHgkJi6UG_Ch_UUcQ8BGjvCZln6Sts0CjvcCftRzCeeda3qxW-YzzeOBQRTy2hqvglLDb1mzxiSiQxPrwDrkvAdjKGX7qZAS4ianTd_rrUBDPprP1qVy2IfsVZmgiKbZEKTBIVgA6pmd9q_sTE64501zRpoZiU3sVURkao8C3TDnaRB5UJeib4lQsJa7JV3c2DBWo3mCXfr4o56BobM6SAIOAACFh7t_CDnaRmq10UHfyCMwqWoDSIv-ixPViDRJUi0Kw.iZQV1tAtcr3NTKlh.LQCpjvDFidJ-0HTP2tgPhe5BE0qcr57RXwaCVfMb2aG7_sBMcalymXwmrg7nNljyGyp1n0vgyYiUK1cHHnUGDwYlItoQ19XCVGclsH4rhVMZ8CLTbMNzaiMD4dPbkV3JdnVC29t5KGNPG76x0-NWtEPzqFtqopnOx65n_MFxF77V-_rtsGBMoF-_CliJh9LcRbPnwQdjtVCOSqQvfJBpHNkTLQV9LJVuAza0FZJ_uRcKg-k_JmTi9K8xlCYxmXtIBovdMc21aUAgbfT7tjhCuzR67F44U4ybV2UTHYC0XaDzR9pMHhnrRULeFJjT_PTDGvtLlZNzSdUTJL5rcRKBN24R1OeTZBUDjsLTlAMRvtkaqwG7n95WmklzwvB8nkMpqhHhLyhdEpL1DaNRCHwl9e78FiGC97INpzUqD0PU5HXIQhcsO8rYNKV394RTaYf1umyLbwdzdZ7DxfKVN1vtKuLZYhIf9fPaTuQFrHa2wwoSDox7hJJI8Xp1-FOpES7DkbIoyb_SvDOIxGONsRQsaCrOdwn_YIHPqz4SsviO34CszPQqNn5rMBhLU8B6GlME3vSlzbbrtbgYJb2LPiOgsqXtmrNuAXnt4da-i1vtlQnvgW66WIvRVdw9mAt4xNPICTpizE5nKI39n5c5c_EBamZ7JX8IY8CGoxtPjd5At6IF16YhgQNXHwE9zujyOzEPoWsPSAgJsWANRjYj6w-hcKgTNp57ZBXE1V3epfUOAU5fcBRfeeCIzAZYU9IsVISnWkxKagV8RN4QT5hyg7-v_Oztk31ETbCM9Ge4ho0Id8Fp4PWCx4Xf8BaGFQ0sv0dq-tEYUCH4G2JADIAFgWQrBBDMGIkCONy2aCbjGCqQNszSArSrTWqx_qKrmqu9tbiL52waXTh3q3VTyTLb5fIgNyxX-29jjLavf_itxcJwwGwnftZ3Uyk4Ay9YGy6nEvXkAikUNNrNbjm2sbFPqwOe2DrYoQohf282xTxd6087go5F0fBStIVIG_wGsYvUy2x4Ppd_F5tPX8ot6j811oPzp0xFutnXBJEvgtuFXXWQnef0ZTZQ9vepYDssdJ3wd18cft3a9a1xyujNLL3K34TkISqunoy-1b2W6VPKIVRBWB_-2a8kg8k8fDi2xCpmwU84st-Dzmwq8sM9-wgj2IW3ABJA8jAEoWHXg4IE95qf6DBCMuFGDvTfAY_4KvrxliyptzZIqlMEXhFa6vRr8HWh02HEGTRHp8RRq0d97hrtvc1Pyk1arR6jlFPaQCsn6IVlVaU71rCBvtGdAPnYVb7nat1K-PyJng.StI4rPRIFGhNinmZMFPBMA\"},\"accessToken\":{\"jwtToken\":\"eyJraWQiOiJcL21tUDl5V25sRGRRYnNxbHdVRFYxK0w0a3RGMjR3a0NrQ2lVYzcrbjU2Yz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImV2ZW50X2lkIjoiNTNjNjgxMmMtYzc2MS00NzA0LTk1MDgtYjhkNTNiNzJkNTM4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLW5vcnRoZWFzdC0xX1AyYlR2MnF0biIsImV4cCI6MTU3ODQxNjI4NiwiaWF0IjoxNTc4NDEyNjg2LCJqdGkiOiI3Y2VhNWEyMi0zZDM3LTQ3OWYtOWRlOS0zNDcxOTEyOGEzMjMiLCJjbGllbnRfaWQiOiIxMzA0ZDVsa2M3MW9mdnNvM3R0aXV0ZzM4NiIsInVzZXJuYW1lIjoidGVzdDAwMDEifQ.FQ6jxLFwk4ENirpuRR1iVYUQ6glaXP7rxzBi7Tw8vEN3Nhzp_348l0onwqVXfs5z8thNopgeYaUDWuJl6OAPRQplHo8CcEYP1x4wtqXvBVpxQ5r4-CW_slKJnCHoD-ieQHCvWN2j61J5oWgP5_Gm_mp0zSP5ETCDNC-7lvIKHlXAB6rZRzzRibStjtzHepY3GmQdrRRy_ErJWjgYMVpiUvzevS1l15DAC2g4WaixnGuJ0JVL8tFAirzr8ms9Ryg8dVY8dTq5r9JgSsAlUp4h3bLjPI7KwkV-qT9CkfIteumeLU1em2HR4CmUOxwp3genuT2inNbHG_ubfR02NRfppw\",\"payload\":{\"sub\":\"2fcdebed-8712-4d03-9c01-a99ee27ad9b5\",\"cognito:groups\":[\"groupa\",\"groupb\"],\"event_id\":\"53c6812c-c761-4704-9508-b8d53b72d538\",\"token_use\":\"access\",\"scope\":\"aws.cognito.signin.user.admin\",\"auth_time\":1578412686,\"iss\":\"https://cognito-idp.region.amazonaws.com/region_P2bTv2qtn\",\"exp\":1578416286,\"iat\":1578412686,\"jti\":\"7cea5a22-3d37-479f-9de9-34719128a323\",\"client_id\":\"clientid\",\"username\":\"testuser\"}},\"clockDrift\":-1},\"authenticationFlowType\":\"USER_SRP_AUTH\",\"storage\":{\"CognitoIdentityServiceProvider.clientid.testuser.userData\":\"{\\\"UserAttributes\\\":[{\\\"Name\\\":\\\"sub\\\",\\\"Value\\\":\\\"2fcdebed-8712-4d03-9c01-a99ee27ad9b5\\\"},{\\\"Name\\\":\\\"custom:aaaaa\\\",\\\"Value\\\":\\\"A\\\"},{\\\"Name\\\":\\\"custom:test\\\",\\\"Value\\\":\\\"azxzxzxzx\\\"}],\\\"Username\\\":\\\"testuser\\\"}\",\"CognitoIdentityServiceProvider.clientid.testuser.accessToken\":\"eyJraWQiOiJcL21tUDl5V25sRGRRYnNxbHdVRFYxK0w0a3RGMjR3a0NrQ2lVYzcrbjU2Yz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImV2ZW50X2lkIjoiNTNjNjgxMmMtYzc2MS00NzA0LTk1MDgtYjhkNTNiNzJkNTM4IiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJhd3MuY29nbml0by5zaWduaW4udXNlci5hZG1pbiIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmFwLW5vcnRoZWFzdC0xLmFtYXpvbmF3cy5jb21cL2FwLW5vcnRoZWFzdC0xX1AyYlR2MnF0biIsImV4cCI6MTU3ODQxNjI4NiwiaWF0IjoxNTc4NDEyNjg2LCJqdGkiOiI3Y2VhNWEyMi0zZDM3LTQ3OWYtOWRlOS0zNDcxOTEyOGEzMjMiLCJjbGllbnRfaWQiOiIxMzA0ZDVsa2M3MW9mdnNvM3R0aXV0ZzM4NiIsInVzZXJuYW1lIjoidGVzdDAwMDEifQ.FQ6jxLFwk4ENirpuRR1iVYUQ6glaXP7rxzBi7Tw8vEN3Nhzp_348l0onwqVXfs5z8thNopgeYaUDWuJl6OAPRQplHo8CcEYP1x4wtqXvBVpxQ5r4-CW_slKJnCHoD-ieQHCvWN2j61J5oWgP5_Gm_mp0zSP5ETCDNC-7lvIKHlXAB6rZRzzRibStjtzHepY3GmQdrRRy_ErJWjgYMVpiUvzevS1l15DAC2g4WaixnGuJ0JVL8tFAirzr8ms9Ryg8dVY8dTq5r9JgSsAlUp4h3bLjPI7KwkV-qT9CkfIteumeLU1em2HR4CmUOxwp3genuT2inNbHG_ubfR02NRfppw\",\"CognitoIdentityServiceProvider.clientid.LastAuthUser\":\"testuser\",\"amplify-signin-with-hostedUI\":\"false\",\"CognitoIdentityServiceProvider.clientid.testuser.refreshToken\":\"eyJjdHkiOiJKV1QiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiUlNBLU9BRVAifQ.K3rcEoziPiFHPOKlO6FKGoPVADHpwRxz7hvMCdhQFHNVyF0U53p8MnFm2_ON8zC5tGZUtZHKWRmknzh-9OHgkJi6UG_Ch_UUcQ8BGjvCZln6Sts0CjvcCftRzCeeda3qxW-YzzeOBQRTy2hqvglLDb1mzxiSiQxPrwDrkvAdjKGX7qZAS4ianTd_rrUBDPprP1qVy2IfsVZmgiKbZEKTBIVgA6pmd9q_sTE64501zRpoZiU3sVURkao8C3TDnaRB5UJeib4lQsJa7JV3c2DBWo3mCXfr4o56BobM6SAIOAACFh7t_CDnaRmq10UHfyCMwqWoDSIv-ixPViDRJUi0Kw.iZQV1tAtcr3NTKlh.LQCpjvDFidJ-0HTP2tgPhe5BE0qcr57RXwaCVfMb2aG7_sBMcalymXwmrg7nNljyGyp1n0vgyYiUK1cHHnUGDwYlItoQ19XCVGclsH4rhVMZ8CLTbMNzaiMD4dPbkV3JdnVC29t5KGNPG76x0-NWtEPzqFtqopnOx65n_MFxF77V-_rtsGBMoF-_CliJh9LcRbPnwQdjtVCOSqQvfJBpHNkTLQV9LJVuAza0FZJ_uRcKg-k_JmTi9K8xlCYxmXtIBovdMc21aUAgbfT7tjhCuzR67F44U4ybV2UTHYC0XaDzR9pMHhnrRULeFJjT_PTDGvtLlZNzSdUTJL5rcRKBN24R1OeTZBUDjsLTlAMRvtkaqwG7n95WmklzwvB8nkMpqhHhLyhdEpL1DaNRCHwl9e78FiGC97INpzUqD0PU5HXIQhcsO8rYNKV394RTaYf1umyLbwdzdZ7DxfKVN1vtKuLZYhIf9fPaTuQFrHa2wwoSDox7hJJI8Xp1-FOpES7DkbIoyb_SvDOIxGONsRQsaCrOdwn_YIHPqz4SsviO34CszPQqNn5rMBhLU8B6GlME3vSlzbbrtbgYJb2LPiOgsqXtmrNuAXnt4da-i1vtlQnvgW66WIvRVdw9mAt4xNPICTpizE5nKI39n5c5c_EBamZ7JX8IY8CGoxtPjd5At6IF16YhgQNXHwE9zujyOzEPoWsPSAgJsWANRjYj6w-hcKgTNp57ZBXE1V3epfUOAU5fcBRfeeCIzAZYU9IsVISnWkxKagV8RN4QT5hyg7-v_Oztk31ETbCM9Ge4ho0Id8Fp4PWCx4Xf8BaGFQ0sv0dq-tEYUCH4G2JADIAFgWQrBBDMGIkCONy2aCbjGCqQNszSArSrTWqx_qKrmqu9tbiL52waXTh3q3VTyTLb5fIgNyxX-29jjLavf_itxcJwwGwnftZ3Uyk4Ay9YGy6nEvXkAikUNNrNbjm2sbFPqwOe2DrYoQohf282xTxd6087go5F0fBStIVIG_wGsYvUy2x4Ppd_F5tPX8ot6j811oPzp0xFutnXBJEvgtuFXXWQnef0ZTZQ9vepYDssdJ3wd18cft3a9a1xyujNLL3K34TkISqunoy-1b2W6VPKIVRBWB_-2a8kg8k8fDi2xCpmwU84st-Dzmwq8sM9-wgj2IW3ABJA8jAEoWHXg4IE95qf6DBCMuFGDvTfAY_4KvrxliyptzZIqlMEXhFa6vRr8HWh02HEGTRHp8RRq0d97hrtvc1Pyk1arR6jlFPaQCsn6IVlVaU71rCBvtGdAPnYVb7nat1K-PyJng.StI4rPRIFGhNinmZMFPBMA\",\"CognitoIdentityServiceProvider.clientid.testuser.clockDrift\":\"-1\",\"CognitoIdentityServiceProvider.clientid.testuser.idToken\":\"eyJraWQiOiIzdVVqTFVNWUhXNWRKXC90WVpaSFJrMUpNVVd4UkIyNU9ZbXU4Y0o2VEIwUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyZmNkZWJlZC04NzEyLTRkMDMtOWMwMS1hOTllZTI3YWQ5YjUiLCJjb2duaXRvOmdyb3VwcyI6WyIxMjIzNDU1MyIsInRlc3QwMDAxIl0sImN1c3RvbTphYWFhYSI6IkEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAuYXAtbm9ydGhlYXN0LTEuYW1hem9uYXdzLmNvbVwvYXAtbm9ydGhlYXN0LTFfUDJiVHYycXRuIiwiY29nbml0bzp1c2VybmFtZSI6InRlc3QwMDAxIiwiY29nbml0bzpyb2xlcyI6WyJhcm46YXdzOmlhbTo6NzY1MzcxNDUzMjUyOnJvbGVcL3Rlc3QwMDAxIl0sImF1ZCI6IjEzMDRkNWxrYzcxb2Z2c28zdHRpdXRnMzg2IiwiZXZlbnRfaWQiOiI1M2M2ODEyYy1jNzYxLTQ3MDQtOTUwOC1iOGQ1M2I3MmQ1MzgiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU3ODQxMjY4NiwiY3VzdG9tOnRlc3QiOiJhenh6eHp4engiLCJleHAiOjE1Nzg0MTYyODYsImlhdCI6MTU3ODQxMjY4Nn0.dNuzb2iKiJ8L1UiJE_L45rkDgOaqS46VpCeQVVFvlkMUdPxeRaxhfSNLV9Tm5EzQQPKtfe36t1APiImbidhSwRoXHNT02QzzPpYsJNUbU3spix1Yukphuw4fQ2alQI3hpGMbZn57zLbb2JjVC6vSU3_bQBlIejLwNTOFGgLy5mtbs87wrEdTk_JCLTpYMfiPW4g37MMzdcjIiAMW2NOhdem__aWfR3Na6cBwKCiyn2zsxmvTP2Bj_64gHYqLI2Ct8Cw45NcoE7_u_9yZ5kNXzJGhVbDXbksrijF8mMvjvCdmPQZNwrO_wKTpx1eWY8IGEP1faU4kZJCG0D2kKyCDJA\",\"aws.cognito.identity-id.region:d8fff9223-qw01-4567-3241-f9923dhga04\":\"region:f9b1c82d-b6f0-4669-bea3-73e2082cbeb4\",\"aws.cognito.identity-providers.region:d8fff9223-qw01-4567-3241-f9923dhga04\":\"cognito-idp.region.amazonaws.com/region_P2bTv2qtn\"},\"keyPrefix\":\"CognitoIdentityServiceProvider.clientid\",\"userDataKey\":\"CognitoIdentityServiceProvider.clientid.testuser.userData\",\"deviceKey\":null,\"attributes\":{\"sub\":\"2fcdebed-8712-4d03-9c01-a99ee27ad9b5\",\"custom:aaaaa\":\"A\",\"custom:test\":\"azxzxzxzx\"},\"preferredMFA\":\"NOMFA\"}");
    /***/
  },

  /***/
  "./src/mocks/s3/deleteObjects.json":
  /*!*****************************************!*\
    !*** ./src/mocks/s3/deleteObjects.json ***!
    \*****************************************/

  /*! exports provided: Deleted, Errors, default */

  /***/
  function srcMocksS3DeleteObjectsJson(module) {
    module.exports = JSON.parse("{\"Deleted\":[{\"Key\":\"filename0001.jpg\"}],\"Errors\":[]}");
    /***/
  },

  /***/
  "./src/mocks/s3/listObjectsV2.json":
  /*!*****************************************!*\
    !*** ./src/mocks/s3/listObjectsV2.json ***!
    \*****************************************/

  /*! exports provided: cloudtrail-sample-bucket,, cloudtrail-sample-bucket,AWSLogs/, cloudtrail-sample-bucket,AWSLogs/169271423270/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/, cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/, default */

  /***/
  function srcMocksS3ListObjectsV2Json(module) {
    module.exports = JSON.parse("{\"cloudtrail-sample-bucket,\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/\":{\"IsTruncated\":false,\"Contents\":[{\"Key\":\"AWSLogs/169271423270/CloudTrail/\",\"LastModified\":\"2020-01-12T01:46:00.000Z\",\"ETag\":\"\\\"d41d8cd98f00b204e9800998ecf8427e\\\"\",\"Size\":0,\"StorageClass\":\"STANDARD\"}],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/\"},{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/\"}],\"KeyCount\":2},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/\":{\"IsTruncated\":false,\"Contents\":[{\"Key\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/262431843559_CloudTrail_ap-northeast-1_20200112T0145Z_aSBmDzbdpKZmdLxG.json.gz\",\"LastModified\":\"2020-01-12T01:51:14.000Z\",\"ETag\":\"\\\"f0b71573eb8536ea994d41940e3c5ff9\\\"\",\"Size\":1926,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/262431843559_CloudTrail_ap-northeast-1_20200112T0150Z_kuRSrvMRWOzsAaSS.json.gz\",\"LastModified\":\"2020-01-12T01:56:00.000Z\",\"ETag\":\"\\\"e66ffd674bc880981cea874d7547a444\\\"\",\"Size\":14875,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/262431843559_CloudTrail_ap-northeast-1_20200112T0155Z_z3KZ7GFjjMw8vv2A.json.gz\",\"LastModified\":\"2020-01-12T02:00:59.000Z\",\"ETag\":\"\\\"18538638a43196a0ba931b9cb030ceec\\\"\",\"Size\":12331,\"StorageClass\":\"STANDARD\"}],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/ap-northeast-1/2020/01/12/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[],\"KeyCount\":3},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/\":{\"IsTruncated\":false,\"Contents\":[],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[{\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/\"}],\"KeyCount\":1},\"cloudtrail-sample-bucket,AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/\":{\"IsTruncated\":false,\"Contents\":[{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0145Z_3GsWgmXJHaipJE3e.json.gz\",\"LastModified\":\"2020-01-12T01:50:45.000Z\",\"ETag\":\"\\\"1db401202a3bc485495790addc96417a\\\"\",\"Size\":523,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0145Z_BQJOIXRr2BnOe365.json.gz\",\"LastModified\":\"2020-01-12T01:56:38.000Z\",\"ETag\":\"\\\"300e3954121ea8f7fddf5639749df74b\\\"\",\"Size\":553,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0145Z_NEI3p2ssvbDB5ahw.json.gz\",\"LastModified\":\"2020-01-12T01:51:17.000Z\",\"ETag\":\"\\\"43c5a0f405e603aa8ddfcabf9307d9be\\\"\",\"Size\":684,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0150Z_3kamRJeUagXdWCGA.json.gz\",\"LastModified\":\"2020-01-12T02:02:14.000Z\",\"ETag\":\"\\\"3f754768b175d6324d82760f5e2f6430\\\"\",\"Size\":554,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0150Z_VGTpDFyY2OBJGrhO.json.gz\",\"LastModified\":\"2020-01-12T01:55:24.000Z\",\"ETag\":\"\\\"275f734cf592325a93252e96f4060787\\\"\",\"Size\":3086,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0150Z_gI3Gw9MWyHyIIMGu.json.gz\",\"LastModified\":\"2020-01-12T01:55:35.000Z\",\"ETag\":\"\\\"b97a0423f74239be5b9fba3fbd3b9395\\\"\",\"Size\":551,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0150Z_uKm2tJ1RWZHioXtr.json.gz\",\"LastModified\":\"2020-01-12T01:56:08.000Z\",\"ETag\":\"\\\"6fd529996ac6198eb900aac0af011659\\\"\",\"Size\":554,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0150Z_yfZGubu3ho6lvxI1.json.gz\",\"LastModified\":\"2020-01-12T01:55:46.000Z\",\"ETag\":\"\\\"ee91965ab29b2fbe57b7403088ab0612\\\"\",\"Size\":709,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0155Z_3C4gt6iCUvuNecO0.json.gz\",\"LastModified\":\"2020-01-12T02:01:11.000Z\",\"ETag\":\"\\\"2cbe3e61161e6c585715aafdde305509\\\"\",\"Size\":525,\"StorageClass\":\"STANDARD\"},{\"Key\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/262431843559_CloudTrail_us-east-1_20200112T0155Z_sUzlvDPcMCg3So0K.json.gz\",\"LastModified\":\"2020-01-12T02:01:56.000Z\",\"ETag\":\"\\\"c07fdb44c47fc2150f0b1170c01f37b2\\\"\",\"Size\":492,\"StorageClass\":\"STANDARD\"}],\"Name\":\"cloudtrail-sample-bucket\",\"Prefix\":\"AWSLogs/169271423270/CloudTrail/us-east-1/2020/01/12/\",\"Delimiter\":\"/\",\"MaxKeys\":1000,\"CommonPrefixes\":[],\"KeyCount\":10}}");
    /***/
  },

  /***/
  "./src/mocks/s3/putObject.json":
  /*!*************************************!*\
    !*** ./src/mocks/s3/putObject.json ***!
    \*************************************/

  /*! exports provided: ETag, default */

  /***/
  function srcMocksS3PutObjectJson(module) {
    module.exports = JSON.parse("{\"ETag\":\"\\\"d41d8cd98f00b204e9800998ecf8427e\\\"\"}");
    /***/
  },

  /***/
  "./src/mocks/s3/upload.json":
  /*!**********************************!*\
    !*** ./src/mocks/s3/upload.json ***!
    \**********************************/

  /*! exports provided: Location, Bucket, Key, ETag, default */

  /***/
  function srcMocksS3UploadJson(module) {
    module.exports = JSON.parse("{\"Location\":\"filename0001.jpg\",\"Bucket\":\"bucket-name\",\"Key\":\"filename0001.jpg\",\"ETag\":\"\\\"a9bea74f2ffecdbc1bab64dc9bfefc5f-2\\\"\"}");
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/opetools/s3manager/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************!*\
    !*** fs (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map