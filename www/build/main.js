webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__berita_detail_berita_detail__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, api) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.posts = [];
        this.posts_list = [];
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        // this.createBarChart();
        this.posts = [];
        this.posts_list = [];
        this.api.feed_home(5, 1).subscribe(function (data) {
            data.data.forEach(function (item) {
                _this.posts.push({
                    label: item.title,
                    image: item.featured_image,
                    id: item.id
                });
            });
        }, function (error) {
            _this.api._alert("Error");
        });
        this.api.feed_home(5, 2).subscribe(function (data) {
            data.data.forEach(function (item) {
                _this.posts_list.push({
                    label: item.title,
                    image: item.featured_image,
                    desc: item.content,
                    id: item.id
                });
            });
        }, function (error) {
            _this.api._alert("Error");
        });
    };
    HomePage.prototype.toPost = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__berita_detail_berita_detail__["a" /* BeritaDetailPage */], {
            id: id
        });
    };
    HomePage.prototype.createBarChart = function () {
        this.bars = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.homeChart.nativeElement, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei'],
                datasets: [{
                        label: 'Perkembangan Anak',
                        data: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
                        backgroundColor: 'rgb(38, 194, 129)',
                        borderColor: 'rgb(38, 194, 129)',
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('homeChart'),
        __metadata("design:type", Object)
    ], HomePage.prototype, "homeChart", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/home/home.html"*/'\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div *ngIf="posts.length > 0" [flickity] = \'{ "wrapAround": true,"pageDots":false,"groupCells": "auto" }\' class="carousel js-flickity">\n        <div [flickityChild] *ngFor="let post of posts" class="carousel-cell" (click)="toPost(post.id)">\n          <img [src]="post.image" class="c-image">\n          <ion-label class="label-article">{{post?.label}}</ion-label>\n        </div>\n      </div>\n    </ion-card-content>\n  </ion-card>\n  <ion-item-divider></ion-item-divider>\n  <ion-list>\n    <ion-list-header>\n      Informasi Terbaru\n    </ion-list-header>\n\n    <ion-item *ngFor="let list of posts_list" (click)="toPost(list.id)">\n      <ion-avatar item-start>\n        <img [src]="list.image">\n      </ion-avatar>\n      <ion-label>\n        <h2>{{list.label}}</h2>\n        <p>{{list.desc}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__berita_detail_berita_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the BeritaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeritaPage = /** @class */ (function () {
    function BeritaPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.listBerita = [];
        this.default_url = "https://via.placeholder.com/400x200";
        // let dummy = [
        //   {
        //     src:"https://via.placeholder.com/400x200",
        //     title:"Contoh Judul",
        //     description:"lorem ipsum dolor sit amat , dan la al alalal",
        //     id:1
        //   },
        //   {
        //     src:"https://via.placeholder.com/400x200",
        //     title:"Contoh Judul 2",
        //     description:"lorem ipsum dolor sit amat , dan la al alalal",
        //     id:2
        //   }
        // ]
        var posts = [];
        this.api.feed(10, 1, this.navParams.data.id).subscribe(function (d) {
            // let next = d.next_page_url;
            var data = d.data;
            data.forEach(function (item) {
                posts.push({
                    src: ((item.featured_image !== null) ? item.featured_image : _this.default_url),
                    title: item.title,
                    content: item.content,
                    id: item.id,
                });
            });
        }, function (error) {
            _this.api._alert("Artikel Tidak Ditemukan");
        });
        this.listBerita = posts;
    }
    BeritaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeritaPage');
    };
    BeritaPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.listBerita = [];
        var posts = [];
        this.api.feed(10, 1, this.navParams.data.id).subscribe(function (d) {
            // let next = d.next_page_url;
            var data = d.data;
            data.forEach(function (item) {
                posts.push({
                    src: ((item.featured_image !== null) ? item.featured_image : _this.default_url),
                    title: item.title,
                    content: item.content,
                    id: item.id,
                });
            });
        }, function (error) {
            _this.api._alert("Artikel Tidak Ditemukan");
        });
        this.listBerita = posts;
    };
    BeritaPage.prototype.link = function (id) {
        console.log(id);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__berita_detail_berita_detail__["a" /* BeritaDetailPage */], { id: id });
    };
    BeritaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-berita',template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/berita/berita.html"*/'<!--\n  Generated template for the BeritaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Informasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let article of listBerita">\n    <img [src]="article.src"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{article.title}}\n      </ion-card-title>\n      <p>\n        {{article.description}}\n      </p>\n      <p>\n        <button ion-button fill="outline" slot="end" (click)="link(article.id)">View</button>\n      </p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/berita/berita.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], BeritaPage);
    return BeritaPage;
}());

//# sourceMappingURL=berita.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__berita_berita__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.categories = [];
        this.next = null;
        this.categories = [];
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.categories = [];
        var colors = [
            "danger",
            "primary"
        ];
        this.api.feed_category(10, 1, 1).subscribe(function (data) {
            var x = 0;
            _this.next = data.next_page_url;
            data.data.forEach(function (item) {
                _this.categories.push({
                    id: item.id,
                    name: item.name,
                    color: ((x % 2 == 0) ? colors[0] : colors[1])
                });
                x++;
            });
        }, function (error) {
            _this.api._alert("Error");
        });
    };
    LandingPage.prototype.detail = function (id) {
        var _this = this;
        this.api.feed_category_detail(10, 1, id).subscribe(function (res) {
            if (res.data.length > 0) {
                console.log("Exist");
                _this.categories = [];
                var colors_1 = [
                    "danger",
                    "primary"
                ];
                _this.api.feed_category_detail(10, 1, id).subscribe(function (data) {
                    var x = 0;
                    _this.next = data.next_page_url;
                    data.data.forEach(function (item) {
                        _this.categories.push({
                            id: item.id,
                            name: item.name,
                            color: ((x % 2 == 0) ? colors_1[0] : colors_1[1])
                        });
                        x++;
                    });
                }, function (error) {
                    _this.api._alert("Error");
                });
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__berita_berita__["a" /* BeritaPage */], {
                    id: id
                });
            }
        }, function (error) {
            _this.api._alert("Category Not Found");
        });
    };
    LandingPage.prototype.nextpage = function (path) {
    };
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/landing/landing.html"*/'<!--\n  Generated template for the LandingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Kategori Informasi</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n  <ion-item *ngFor="let cat of categories" >\n    <ion-row>\n      <ion-col size="6" class="item-padding-top-20">\n        <h1>{{cat?.name}}</h1>\n      </ion-col>\n      <ion-col size="6">\n        <button ion-button [color]="cat?.color" button (click)="detail(cat?.id)" large block  class="global-padding">\n          <ion-icon name="arrow-forward"  end></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n  </ion-item>\n  </ion-list>\n  <button *ngIf="next != null" ion-button block color="primary" slot="start" (click)="nextpage(next)">\n    Lanjutkan\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/landing/landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 124;

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/berita-detail/berita-detail.module": [
		443,
		8
	],
	"../pages/berita/berita.module": [
		444,
		7
	],
	"../pages/kuesioner/kuesioner.module": [
		446,
		5
	],
	"../pages/landing/landing.module": [
		445,
		6
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage(auth, navCtrl) {
        this.auth = auth;
        this.navCtrl = navCtrl;
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabList = [];
        this.authFlag = auth;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/tabs/tabs.html"*/'<ion-tabs color="tabs">\n  <ion-tab *ngFor="let tab of authFlag.getActiveMenus()" [show]="tab.show"  [root]="tab.root" [tabTitle]="tab.label" [tabIcon]="tab.icon"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_kuesioner_kuesioner__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        this.isLogin = false;
        this.tabs = [];
        this.onLoggedIn = [];
        this.onLoggedOut = [];
        this.tabs = [
            {
                label: "Home",
                root: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */],
                icon: "home",
                show: false,
                id: "home"
            }, {
                label: "Informasi",
                root: __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__["a" /* LandingPage */],
                icon: "calendar",
                show: false,
                id: "berita"
            }, {
                label: "Kuesioner",
                root: __WEBPACK_IMPORTED_MODULE_4__pages_kuesioner_kuesioner__["a" /* KuesionerPage */],
                icon: "help",
                show: false,
                id: "kuesioner"
            }
        ];
        this.onLoggedIn = [];
        this.onLoggedOut = [
            "home",
            "kuesioner",
            "berita",
        ];
    }
    AuthProvider.prototype._setLogin = function (value) {
        this.isLogin = value;
    };
    AuthProvider.prototype.isAuth = function () {
        return this.isLogin;
    };
    AuthProvider.prototype.getActiveMenus = function () {
        var _this = this;
        this.tabs.forEach(function (value) {
            value.show = false;
        });
        if (this.isLogin) {
            this.tabs.forEach(function (value) {
                _this.onLoggedIn.forEach(function (v) {
                    if (v == value.id) {
                        value.show = true;
                        return;
                    }
                });
            });
        }
        else {
            this.tabs.forEach(function (value) {
                _this.onLoggedOut.forEach(function (v) {
                    if (v == value.id) {
                        value.show = true;
                        return;
                    }
                });
            });
        }
        return this.tabs;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_berita_berita__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_berita_detail_berita_detail__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_flickity__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_flickity___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ngx_flickity__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_kuesioner_kuesioner__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_berita_berita__["a" /* BeritaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_berita_detail_berita_detail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kuesioner_kuesioner__["a" /* KuesionerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15_ngx_flickity__["FlickityModule"],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/berita-detail/berita-detail.module#BeritaDetailPageModule', name: 'BeritaDetailPage', segment: 'berita-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/berita/berita.module#BeritaPageModule', name: 'BeritaPage', segment: 'berita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/kuesioner/kuesioner.module#KuesionerPageModule', name: 'KuesionerPage', segment: 'kuesioner', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_berita_berita__["a" /* BeritaPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_berita_detail_berita_detail__["a" /* BeritaDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_landing_landing__["a" /* LandingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_kuesioner_kuesioner__["a" /* KuesionerPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            document.addEventListener('backbutton', function (event) {
                event.preventDefault();
                event.stopPropagation();
                console.log('hello');
            }, false);
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bm": 222,
	"./bm.js": 222,
	"./bn": 223,
	"./bn.js": 223,
	"./bo": 224,
	"./bo.js": 224,
	"./br": 225,
	"./br.js": 225,
	"./bs": 226,
	"./bs.js": 226,
	"./ca": 227,
	"./ca.js": 227,
	"./cs": 228,
	"./cs.js": 228,
	"./cv": 229,
	"./cv.js": 229,
	"./cy": 230,
	"./cy.js": 230,
	"./da": 231,
	"./da.js": 231,
	"./de": 232,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 232,
	"./dv": 235,
	"./dv.js": 235,
	"./el": 236,
	"./el.js": 236,
	"./en-au": 237,
	"./en-au.js": 237,
	"./en-ca": 238,
	"./en-ca.js": 238,
	"./en-gb": 239,
	"./en-gb.js": 239,
	"./en-ie": 240,
	"./en-ie.js": 240,
	"./en-il": 241,
	"./en-il.js": 241,
	"./en-in": 242,
	"./en-in.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./en-sg": 244,
	"./en-sg.js": 244,
	"./eo": 245,
	"./eo.js": 245,
	"./es": 246,
	"./es-do": 247,
	"./es-do.js": 247,
	"./es-us": 248,
	"./es-us.js": 248,
	"./es.js": 246,
	"./et": 249,
	"./et.js": 249,
	"./eu": 250,
	"./eu.js": 250,
	"./fa": 251,
	"./fa.js": 251,
	"./fi": 252,
	"./fi.js": 252,
	"./fil": 253,
	"./fil.js": 253,
	"./fo": 254,
	"./fo.js": 254,
	"./fr": 255,
	"./fr-ca": 256,
	"./fr-ca.js": 256,
	"./fr-ch": 257,
	"./fr-ch.js": 257,
	"./fr.js": 255,
	"./fy": 258,
	"./fy.js": 258,
	"./ga": 259,
	"./ga.js": 259,
	"./gd": 260,
	"./gd.js": 260,
	"./gl": 261,
	"./gl.js": 261,
	"./gom-deva": 262,
	"./gom-deva.js": 262,
	"./gom-latn": 263,
	"./gom-latn.js": 263,
	"./gu": 264,
	"./gu.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it-ch": 273,
	"./it-ch.js": 273,
	"./it.js": 272,
	"./ja": 274,
	"./ja.js": 274,
	"./jv": 275,
	"./jv.js": 275,
	"./ka": 276,
	"./ka.js": 276,
	"./kk": 277,
	"./kk.js": 277,
	"./km": 278,
	"./km.js": 278,
	"./kn": 279,
	"./kn.js": 279,
	"./ko": 280,
	"./ko.js": 280,
	"./ku": 281,
	"./ku.js": 281,
	"./ky": 282,
	"./ky.js": 282,
	"./lb": 283,
	"./lb.js": 283,
	"./lo": 284,
	"./lo.js": 284,
	"./lt": 285,
	"./lt.js": 285,
	"./lv": 286,
	"./lv.js": 286,
	"./me": 287,
	"./me.js": 287,
	"./mi": 288,
	"./mi.js": 288,
	"./mk": 289,
	"./mk.js": 289,
	"./ml": 290,
	"./ml.js": 290,
	"./mn": 291,
	"./mn.js": 291,
	"./mr": 292,
	"./mr.js": 292,
	"./ms": 293,
	"./ms-my": 294,
	"./ms-my.js": 294,
	"./ms.js": 293,
	"./mt": 295,
	"./mt.js": 295,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./oc-lnc": 302,
	"./oc-lnc.js": 302,
	"./pa-in": 303,
	"./pa-in.js": 303,
	"./pl": 304,
	"./pl.js": 304,
	"./pt": 305,
	"./pt-br": 306,
	"./pt-br.js": 306,
	"./pt.js": 305,
	"./ro": 307,
	"./ro.js": 307,
	"./ru": 308,
	"./ru.js": 308,
	"./sd": 309,
	"./sd.js": 309,
	"./se": 310,
	"./se.js": 310,
	"./si": 311,
	"./si.js": 311,
	"./sk": 312,
	"./sk.js": 312,
	"./sl": 313,
	"./sl.js": 313,
	"./sq": 314,
	"./sq.js": 314,
	"./sr": 315,
	"./sr-cyrl": 316,
	"./sr-cyrl.js": 316,
	"./sr.js": 315,
	"./ss": 317,
	"./ss.js": 317,
	"./sv": 318,
	"./sv.js": 318,
	"./sw": 319,
	"./sw.js": 319,
	"./ta": 320,
	"./ta.js": 320,
	"./te": 321,
	"./te.js": 321,
	"./tet": 322,
	"./tet.js": 322,
	"./tg": 323,
	"./tg.js": 323,
	"./th": 324,
	"./th.js": 324,
	"./tk": 325,
	"./tk.js": 325,
	"./tl-ph": 326,
	"./tl-ph.js": 326,
	"./tlh": 327,
	"./tlh.js": 327,
	"./tr": 328,
	"./tr.js": 328,
	"./tzl": 329,
	"./tzl.js": 329,
	"./tzm": 330,
	"./tzm-latn": 331,
	"./tzm-latn.js": 331,
	"./tzm.js": 330,
	"./ug-cn": 332,
	"./ug-cn.js": 332,
	"./uk": 333,
	"./uk.js": 333,
	"./ur": 334,
	"./ur.js": 334,
	"./uz": 335,
	"./uz-latn": 336,
	"./uz-latn.js": 336,
	"./uz.js": 335,
	"./vi": 337,
	"./vi.js": 337,
	"./x-pseudo": 338,
	"./x-pseudo.js": 338,
	"./yo": 339,
	"./yo.js": 339,
	"./zh-cn": 340,
	"./zh-cn.js": 340,
	"./zh-hk": 341,
	"./zh-hk.js": 341,
	"./zh-mo": 342,
	"./zh-mo.js": 342,
	"./zh-tw": 343,
	"./zh-tw.js": 343
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 426;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, loadingController, alertController, permit) {
        var _this = this;
        this.http = http;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.permit = permit;
        this.isLoading = false;
        console.log('Hello ApiProvider Provider');
        this.host = "https://fitri2.maugini.in";
        this.token = null;
        this.permit.checkPermission(this.permit.PERMISSION.INTERNET).then(function (result) {
            console.log('Has permission?', result.hasPermission);
        }, function (err) {
            _this.permit.requestPermission(_this.permit.PERMISSION.INTERNET);
        });
    }
    ApiProvider.prototype._request = function (path, data, type) {
        var options = {
            headers: {
                "Authorization": ""
            }
        };
        if (this.token !== null) {
            options = {
                headers: {
                    "Authorization": this.token
                }
            };
        }
        if (type == "put") {
            return this.http.put(this.host + path, data, options);
        }
        else if (type == "post") {
            return this.http.post(this.host + path, data, options);
        }
        else if (type == "get") {
            var redata = {
                headers: options.headers,
                params: data
            };
            return this.http.get(this.host + path, redata);
        }
        else if (type == "delete") {
            var redata = {
                headers: options.headers,
                params: data
            };
            return this.http.delete(this.host + path, redata);
        }
    };
    ApiProvider.prototype._spin = function () {
        return this.loadingController.create();
    };
    ApiProvider.prototype._startSpin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var start;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.isLoading = true;
                        return [4 /*yield*/, this.loadingController.create({})];
                    case 1:
                        start = _a.sent();
                        start.present().then(function (a) {
                            console.log("Presenting Start");
                            console.log(_this.isLoading);
                            if (!_this.isLoading) {
                                start.dismiss().then(function () { return console.log('abort presenting'); });
                            }
                        });
                        return [2 /*return*/, start];
                }
            });
        });
    };
    ApiProvider.prototype._removeSpin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.isLoading = false;
                return [2 /*return*/];
            });
        });
    };
    ApiProvider.prototype._alert = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            message: message,
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ApiProvider.prototype.login = function (username, password) {
        var data = {
            username: username,
            password: password
        };
        return this._request("/api/blog/basic/auth", data, "post");
    };
    ApiProvider.prototype.register = function (data) {
        return this._request("/api/blog/basic/register", data, "post");
    };
    ApiProvider.prototype.feed = function (limit, sort, category_id) {
        var params = {
            limit: limit,
            sort: sort,
            category_id: category_id
        };
        return this._request("/api/blog/public/feed", params, "get");
    };
    ApiProvider.prototype.feed_home = function (limit, sort) {
        var params = {
            limit: limit,
            sort: sort,
        };
        return this._request("/api/blog/public/feed", params, "get");
    };
    ApiProvider.prototype.feed_detail = function (id) {
        var params = {
            id: id
        };
        return this._request("/api/blog/public/feed", params, "get");
    };
    ApiProvider.prototype.feed_category = function (limit, sort, parent, path) {
        if (path === void 0) { path = null; }
        var data = {
            limit: limit,
            sort: sort,
            parent: parent
        };
        if (path === null) {
            path = "/api/blog/public/category";
        }
        return this._request(path, data, "get");
    };
    ApiProvider.prototype.category_detail = function (id) {
        var data = {
            id: id
        };
        var path = "/api/blog/public/category";
        return this._request(path, data, "get");
    };
    ApiProvider.prototype.feed_category_detail = function (limit, sort, category_id, path) {
        if (path === void 0) { path = null; }
        var data = {
            limit: limit,
            sort: sort,
            parent_id: category_id,
        };
        if (path === null) {
            path = "/api/blog/public/category";
        }
        return this._request(path, data, "get");
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_permissions__["a" /* AndroidPermissions */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KuesionerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the KuesionerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var KuesionerPage = /** @class */ (function () {
    function KuesionerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questions = [
            {
                question: "Apakah ibu merasa cepat lelah?"
            },
            {
                question: "Apakah ibu merasa letih/ lesu, atau kelelahan setelah melakukan pekerjaan sehari-hari?"
            },
            {
                question: "Apakah ibu sering pusing?"
            },
            {
                question: "Apakah ibu lebih sering merasa bingung akhir-akhir ini dari pada sebelumnya?"
            },
            {
                question: "Apakah ibu terlihat pucat dari pada biasanya (dilihat dari warna bibir)"
            },
            {
                question: "Apakah ibu sering mengalami sesak nafas?"
            },
            {
                question: "apakah ibu mengalami nyeri dada?"
            },
            {
                question: "apakah ibu merasa kaki dan tangan dingin ?"
            }, {
                question: "Apakah ibu sulit berkonsentrasi?"
            },
        ];
    }
    KuesionerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad KuesionerPage');
    };
    KuesionerPage.prototype.ionViewWillEnter = function () {
        this.isShow = false;
        this.isCurrent = 0;
        this.display = this.questions[this.isCurrent].question;
    };
    KuesionerPage.prototype.next = function () {
        if (this.questions[this.isCurrent] !== undefined) {
            this.display = this.questions[this.isCurrent].question;
            this.isCurrent++;
        }
        else {
            this.isShow = true;
        }
    };
    KuesionerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-kuesioner',template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/kuesioner/kuesioner.html"*/'<!--\n  Generated template for the KuesionerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Kuesioner</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-card>\n          <ion-card-content>\n            <h5>{{display}}</h5>\n            <ion-col>\n              <button ion-button color="primary" (click)="next()" block>Ya</button>\n            </ion-col>\n            <ion-col>\n              <button ion-button color="danger" (click)="next()" block>Tidak</button>\n            </ion-col>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 *ngIf="isShow">\n        <ion-card>\n          <ion-card-content>\n            <h5>Rekomendasi</h5>\n            <ol>\n              <li>jika ibu mengalami tanda-tanda tersebut, ibu tidak perlu panik dan segera mendatangi klinik bidan terdekat untuk memeriksakan hb (apakah ibu anemia atau tidak)</li>\n              <li>untuk meningkatkan kadar Hb dalam darah sebaiknya ibu mengkonsumsi Fe dan makanan yang tinggi akan zat besi. Seperti: daging merah, kacang-kacangan, sayuran hijau dan buah-buahan.</li>\n              <li>Lakukan istirahat cukup yaitu 8 jam malam hari dan 1 jam siang hari</li>\n              <li>Hindari stress&nbsp;</li>\n              <li>Lakukan olahraga ringan minimal 15 menit setiap harinya.</li>\n            </ol>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/kuesioner/kuesioner.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
    ], KuesionerPage);
    return KuesionerPage;
    var _a, _b;
}());

//# sourceMappingURL=kuesioner.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeritaDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the BeritaDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BeritaDetailPage = /** @class */ (function () {
    function BeritaDetailPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.default_url = "https://via.placeholder.com/400x200";
        var data = this.navParams.data;
        console.log("Construct");
        console.log(data);
        this.api.feed_detail(data.id).subscribe(function (d) {
            _this.detailBerita = {
                title: d.data.title,
                content: d.data.content,
                image: ((d.data.featured_image !== null) ? d.data.featured_image : _this.default_url),
                video: ((d.data.featured_video !== null) ? d.data.featured_video : _this.default_url),
                featuredHeader: ((d.data.featured_video !== null) ? "video" : "image")
            };
        }, function (error) {
            _this.api._alert("Artikel tidak ditemukan");
        });
    }
    BeritaDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BeritaDetailPage');
    };
    BeritaDetailPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        console.log("Did Enter");
        var data = this.navParams.data;
        console.log(data);
        this.api.feed_detail(data.id).subscribe(function (d) {
            _this.detailBerita = {
                title: d.data.title,
                content: d.data.content,
                image: ((d.data.featured_image !== null) ? d.data.featured_image : _this.default_url),
                video: ((d.data.featured_video !== null) ? d.data.featured_video : _this.default_url),
                featuredHeader: ((d.data.featured_video !== null) ? "video" : "image")
            };
        }, function (error) {
            _this.api._alert("Artikel tidak ditemukan");
        });
    };
    BeritaDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-berita-detail',template:/*ion-inline-start:"/Users/indie/www/BLOG-UI/src/pages/berita-detail/berita-detail.html"*/'<!--\n  Generated template for the BeritaDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{detailBerita?.title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n\n    <ion-card-content>\n      <img *ngIf="detailBerita?.featuredHeader == \'image\'" [src]="detailBerita?.image"/>\n      <video controls="controls" *ngIf="detailBerita?.featuredHeader == \'video\'" preload="metadata" autoplay="autoplay" webkit-playsinline="webkit-playsinline" class="videoPlayer">\n        <source [src]="detailBerita?.video" type="video/mp4" />\n      </video>\n      <hr>\n      <div [innerHTML]="detailBerita?.content" padding>\n      </div>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/indie/www/BLOG-UI/src/pages/berita-detail/berita-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], BeritaDetailPage);
    return BeritaDetailPage;
}());

//# sourceMappingURL=berita-detail.js.map

/***/ })

},[348]);
//# sourceMappingURL=main.js.map