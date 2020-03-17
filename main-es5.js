(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./features/dashboard/dashboard.module": "./src/app/features/dashboard/dashboard.module.ts",
	"./features/products/products.module": "./src/app/features/products/products.module.ts",
	"./features/users/users.module": "./src/app/features/users/users.module.ts"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(function() {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/about-us/about-us.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/about-us/about-us.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"bgback\"> -->\n<div class=\"bgback\"><img src=\"../../../../assets/images/redbg.jpg\" style=\"width:100%; height:100%\" alt=\"\" class=\"firstImg\">\n\n    <div class=\"firstContent\">\n        <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\">\n                <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n                <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n            </ol>\n            <div class=\"carousel-inner\" style=\"text-align: center\">\n                <div class=\"carousel-item active\">\n                    <!-- <div class=\"clock-box\"> -->\n                    <div id=\"taglines\">We believe that wine is intended for everyone.</div>\n                    <!-- </div> -->\n                </div>\n                <div class=\"carousel-item\">\n                    <!-- <div class=\"clock-box\"> -->\n                    <div id=\"taglines\">The enjoyment of wine does not have rules. If it is good, it is.</div>\n                    <!-- </div> -->\n                </div>\n                <div class=\"carousel-item\">\n                    <!-- <div class=\"clock-box\"> -->\n                    <div id=\"taglines\">Our wines are accessible and approachable to everyone.</div>\n                    <!-- </div> -->\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"sr-only\">Next</span>\n                </a>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Start of Mission/ Vision Section-->\n<section>\n    <!--Start of Mission Container-->\n    <div class=\"container-fluid\" id=\"missionContainer\" style=\"text-align: center\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h1>Mission</h1>\n                <h3 class=\"header-title\">\"Where wines meet sophistication\"</h3>\n                <h4>We want to make the wines with flavours you thirst for: <br> an honest expression of the vineyard, <br> the varieties and the environment. <br> Our wines reflect your values: purity, integrity and sustainability.</h4>\n            </div>\n        </div>\n    </div>\n\n\n    <!--Start of Vision Container-->\n\n    <div class=\"container\" id=\"visionContainer\">\n        <h1 class=\"visionH1\" style=\"text-align:center\">Vision</h1>\n        <h3 style=\"text-align: center\" class=\"header-title\">\"Bringing wines to the grande finale\"</h3>\n        <div class=\"row mbr-justify-content-center\">\n            <div class=\"col-lg\">\n                <div class=\"wrap\">\n                    <div class=\"text-wrap vcenter p-1\">\n                        <h2 class=\"mbr-fonts-style mbr-bold mbr-section-title3 display-5\">Stay successful</h2>\n                        <p class=\"mbr-fonts-style text1 mbr-text display-6 mt-3\">To put our customers’ experience first before anything</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg\">\n                <div class=\"wrap\">\n                    <div class=\"text-wrap vcenter p-1\">\n                        <h2 class=\"mbr-fonts-style mbr-bold mbr-section-title3 display-5\">Create an Effective Team\n                        </h2>\n                        <p class=\"mbr-fonts-style text1 mbr-text display-6\">To practice integrity with everything we do daily</p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg\">\n                <div class=\"wrap\">\n                    <div class=\"text-wrap vcenter p-1\">\n                        <h2 class=\"mbr-fonts-style mbr-bold mbr-section-title3 display-5\">Launch a Unique Project\n                        </h2>\n                        <p class=\"mbr-fonts-style text1 mbr-text display-6\">To practice low input and organic viticulture and winemaking\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg\">\n                <div class=\"wrap\">\n                    <div class=\"text-wrap vcenter p-1\" style=\"height: 125px;\">\n                        <h2 class=\"mbr-fonts-style mbr-bold mbr-section-title3 display-5\">Achieve your targets</h2>\n                        <p class=\"mbr-fonts-style text1 mbr-text display-6\">To support our community in the search for a kinder, better world</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!--End of Mission/ Vision Section-->\n<link href=\"http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.css\" rel=\"stylesheet\" type='text/css'>\n<!--Start of Our Team Section-->\n<section class=\"team padding-lg\">\n    <div class=\"container\">\n        <div class=\"row heading heading-icon\">\n            <h2>Our Team</h2>\n            <h3>Our team consists of the most passionate, creative and interesting people in the wine industry. Swag could not begin to describe the good vibe that they have and are able to put into their work.</h3>\n        </div>\n        <ul class=\"row\">\n            <li class=\"col-md-4\">\n                <div class=\"cnt-block equal-height\" style=\"height: 349px;\">\n                    <figure><img src=\"../../../../assets/images/jesupic.PNG\" class=\"img-responsive\" alt=\"\"></figure>\n                    <h3 class=\"soft-eng-names\">JESU</h3>\n                    <p class=\"soft-eng-p\">Software Engineer Intern</p>\n\n                </div>\n            </li>\n            <li class=\"col-md-4\">\n                <div class=\"cnt-block equal-height\" style=\"height: 349px;\">\n                    <figure><img src=\"../../../../assets/images/wineshowcase.jpg\" class=\"img-responsive\" alt=\"\"></figure>\n                    <h3 class=\"soft-eng-names\">KHAMAE</h3>\n                    <p class=\"soft-eng-p\">Software Engineer Intern</p>\n\n                </div>\n            </li>\n            <li class=\"col-md-4\">\n                <div class=\"cnt-block equal-height\" style=\"height: 349px;\">\n                    <figure><img src=\"../../../../assets/images/lancepic.PNG\" class=\"img-responsive\" alt=\"\"></figure>\n                    <h3 class=\"soft-eng-names\">LANCE</h3>\n                    <p class=\"soft-eng-p\">Software Engineer Intern</p>\n\n                </div>\n            </li>\n        </ul>\n    </div>\n</section>\n<!--End of Team Section-->\n\n\n<!--Start of SecondContent-->\n<section id=\"secondContent\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"secondContent-left\">\n                    <h1>About the winery</h1>\n                    <h4>\"The best things in life aren’t created in an instant—they take time. That’s how we built our winery, and how we make our wines. <br><br> Pulled to Philippines from every corner of the country, we are all united by the idea that winemaking\n                        doesn’t need frills. It needs hard-working people who understand the nuances of the vines and the complexity of a single grape. It needs exquisite attention to detail and an appreciation for the terroir.<br><br> But most of all,\n                        it needs a group of people who share a deep appreciation of nature and the beauty it brings to both wine and life.<br>When you come to Winecom, we greet you as guests in our home. We welcome you to the life of the winecomers and\n                        invite you to indulge in the simple joys of good friends, good scenery, and good wine.\n                    </h4><br>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"secondContent-right\">\n                    <img src=\"../../../../assets/images/winerypeeps.jpg\" alt=\"\" id=\"historyImg\" class=\"responsive\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--End of Second Content-->\n\n<app-nav-links></app-nav-links>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/contact-us/contact-us.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/contact-us/contact-us.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"contact pt-100 pb-100\" id=\"contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xl-6 mx-auto text-center\">\n                <div class=\"section-title mb-100\">\n                    <h4>Contact Us</h4>\n                </div>\n            </div>\n        </div>\n        <div class=\"row text-center\">\n            <div class=\"col-md-8\">\n                <form action=\"#\" class=\"contact-form\">\n                    <div class=\"row\">\n                        <div class=\"col-xl-6\">\n                            <input type=\"text\" placeholder=\"name\">\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <input type=\"text\" placeholder=\"email\">\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <input type=\"text\" placeholder=\"subject\">\n                        </div>\n                        <div class=\"col-xl-6\">\n                            <input type=\"text\" placeholder=\"telephone\">\n                        </div>\n                        <div class=\"col-xl-12\">\n                            <textarea placeholder=\"message\" cols=\"30\" rows=\"10\"></textarea>\n                            <input type=\"submit\" value=\"send message\">\n                        </div>\n                    </div>\n                </form>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"single-contact\">\n                    <i class=\"fa fa-map-marker\"></i>\n                    <h5>Address</h5>\n                    <p>04, Metro Manila, Philippines</p>\n                </div>\n                <div class=\"single-contact\">\n                    <i class=\"fa fa-phone\"></i>\n                    <h5>Phone</h5>\n                    <p>(+1) 658 659 022</p>\n                </div>\n                <div class=\"single-contact\">\n                    <i class=\"fa fa-envelope\"></i>\n                    <h5>Email</h5>\n                    <p>www.winecom.com.ph</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-nav-links></app-nav-links>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/errorpage/errorpage.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/errorpage/errorpage.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-wrap d-flex flex-row align-items-center\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-12 text-center\">\n                <span class=\"display-1 d-block\">404</span>\n                <div class=\"mb-4 lead\">The page you are looking for was not found.</div>\n                <a routerLink=\"/login\" class=\"btn btn-link\">Back to Home</a>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start of the footer-->\n<footer class=\"container-fluid\">\n   \n    <div class=\"row justify-content-center\" id=\"footLinks\">\n        <a routerLink=\"/home\">Home</a>\n        <a routerLink=\"/about-us\">Our Story</a>\n        <a routerLink=\"/gallery\">Our Wines</a>\n        <a (click)=\"wineryPageChoice('brands');\" routerLink=\"\">Our Brands</a>\n        <a routerLink=\"/location\">Location</a>\n        <a routerLink=\"/contact\">Contact Us</a>\n    </div>\n\n    <div class=\"row justify-content-center\" id=\"socialLinks\">\n        <a href=\"https://www.facebook.com/winecom\"><i id=\"social-fb\" class=\"fa fa-facebook-square fa-3x social\"></i></a>\n        <a href=\"https://twitter.com\"><i id=\"social-tw\" class=\"fa fa-twitter-square fa-3x social\"></i></a>\n        <a href=\"https://google.com\"><i id=\"social-gp\" class=\"fa fa-google-plus-square fa-3x social\"></i></a>\n        <a href=\"https://google.com\"><i id=\"social-em\" class=\"fa fa-envelope-square fa-3x social\"></i></a>\n    </div>\n\n    <div class=\"row justify-content-center\">\n        <p class=\"text-center\">Winecom Copyright &copy; 2019</p>\n    </div>\n\n    </footer>\n    <!--End of footer-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/gallery-page/gallery-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/gallery-page/gallery-page.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image-gallery>\n</app-image-gallery>\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <p class=\"quote\">..where wines meet sophistication. \"</p>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div>\n            <h4>HARDYS AND SONS</h4>\n            <!-- HARDYS AND SONS -->\n            <table *ngIf=\"hardyList\">\n                <tr *ngFor=\"let i of rowHardyArray\">\n\n                    <td>\n                        <a routerLink=\"/single-product\">\n                            <div class=\"imagebox\">\n                                <img [src]=\"hardyList[5*i].imageUrl\" class=\"img-fluid\">\n                                <span class=\"imagebox-desc\">{{hardyList[5*i].caption}}</span>\n                            </div>\n                        </a>\n                    </td>\n\n                    <td *ngIf=\"hardyList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"hardyList[5*i+1].imageUrl\" class=\"img-fluid\">\n                            <span class=\"imagebox-desc\">{{hardyList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"hardyList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"hardyList[5*i+2].imageUrl\" class=\"img-fluid\">\n                            <span class=\"imagebox-desc\">{{hardyList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"hardyList[5*i+3]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"hardyList[5*i+3].imageUrl\" class=\"img-fluid\">\n                            <span class=\"imagebox-desc\">{{hardyList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"hardyList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"hardyList[5*i+4].imageUrl\" class=\"img-fluid\">\n                            <span class=\"imagebox-desc\">{{hardyList[5*i+4].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n\n            <h4>A MANO</h4>\n            <!-- AMANO -->\n            <table *ngIf=\"amanoList\">\n                <tr *ngFor=\"let i of rowIndexArray\">\n                    <td>\n                        <div class=\"imagebox\">\n                            <img [src]=\"amanoList[5*i].imageUrl\" (click)=\"getData(amanoList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{amanoList[5*i].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"amanoList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"amanoList[5*i+1].imageUrl\" (click)=\"getData(amanoList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{amanoList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"amanoList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"amanoList[5*i+2].imageUrl\" (click)=\"getData(amanoList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{amanoList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"amanoList[5*i+3]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"amanoList[5*i+3].imageUrl\" (click)=\"getData(amanoList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{amanoList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"amanoList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"amanoList[5*i+4].imageUrl\" (click)=\"getData(amanoList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{amanoList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n\n            <h4>YELLOW TAIL</h4>\n            <!-- YELLOW TAIL -->\n            <table *ngIf=\"yellowList\">\n                <tr *ngFor=\"let i of rowYellowArray\">\n\n                    <td>\n                        <div class=\"imagebox\">\n                            <img [src]=\"yellowList[5*i].imageUrl\" (click)=\"getData(yellowList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{yellowList[5*i].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"yellowList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"yellowList[5*i+1].imageUrl\" (click)=\"getData(yellowList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{yellowList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"yellowList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"yellowList[5*i+2].imageUrl\" (click)=\"getData(yellowList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{yellowList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"yellowList[5*i+5]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"yellowList[5*i+5].imageUrl\" (click)=\"getData(yellowList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{yellowList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"yellowList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"yellowList[5*i+4].imageUrl\" (click)=\"getData(yellowList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{yellowList[5*i+4].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n\n            <h4>BAREFOOT</h4>\n            <!-- BAREFOOT -->\n            <table *ngIf=\"barefootList\">\n                <tr *ngFor=\"let i of rowBarefootArray\">\n\n                    <td>\n                        <div class=\"imagebox\">\n                            <img [src]=\"barefootList[5*i].imageUrl\" (click)=\"getData(barefootList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{barefootList[5*i].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"barefootList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"barefootList[5*i+1].imageUrl\" (click)=\"getData(barefootList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{barefootList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"barefootList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"barefootList[5*i+2].imageUrl\" (click)=\"getData(barefootList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{barefootList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"barefootList[5*i+5]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"barefootList[5*i+5].imageUrl\" (click)=\"getData(barefootList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{barefootList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"barefootList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"barefootList[5*i+4].imageUrl\" (click)=\"getData(barefootList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{barefootList[5*i+4].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n\n            <h4>CONCHA TORO</h4>\n            <!-- CONCHA TORO -->\n            <table *ngIf=\"conchaList\">\n                <tr *ngFor=\"let i of rowConchaArray\">\n\n                    <td>\n                        <div class=\"imagebox\">\n                            <img [src]=\"conchaList[5*i].imageUrl\" (click)=\"getData(conchaList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{conchaList[5*i].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"conchaList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"conchaList[5*i+1].imageUrl\" (click)=\"getData(conchaList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{conchaList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"conchaList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"conchaList[5*i+2].imageUrl\" (click)=\"getData(conchaList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{conchaList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"conchaList[5*i+5]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"conchaList[5*i+5].imageUrl\" (click)=\"getData(conchaList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{conchaList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"conchaList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"conchaList[5*i+4].imageUrl\" (click)=\"getData(conchaList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{conchaList[5*i+4].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n\n            <h4>OTHERS</h4>\n            <!-- OTHERS -->\n            <table *ngIf=\"othersList\">\n                <tr *ngFor=\"let i of rowOthersArray\">\n\n                    <td>\n                        <div class=\"imagebox\">\n                            <img [src]=\"othersList[5*i].imageUrl\" (click)=\"getData(othersList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{othersList[5*i].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"othersList[5*i+1]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"othersList[5*i+1].imageUrl\" (click)=\"getData(othersList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{othersList[5*i+1].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"othersList[5*i+2]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"othersList[5*i+2].imageUrl\" (click)=\"getData(othersList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{othersList[5*i+2].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"othersList[5*i+5]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"othersList[5*i+5].imageUrl\" (click)=\"getData(othersList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{othersList[5*i+3].caption}}</span>\n                        </div>\n                    </td>\n                    <td *ngIf=\"othersList[5*i+4]\">\n                        <div class=\"imagebox\">\n                            <img [src]=\"othersList[5*i+4].imageUrl\" (click)=\"getData(othersList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                            <span class=\"imagebox-desc\">{{othersList[5*i+4].caption}}</span>\n                        </div>\n                    </td>\n\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n\n<app-images></app-images>\n<app-nav-links></app-nav-links>\n<app-navigation-bar></app-navigation-bar>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container-fluid\" id=\"banner\">\n    <div class=\"row\">\n          <img src=\"../../../../../assets/images/ourwines.PNG\" alt=\"\" style=\"width: 1780px; height: 780px\" class=\"img-responsive\">\n    </div>\n</div> -->\n\n\n<div id=\"banner\">\n        <div id=\"cloud-scroll\">\n            <div class=\"row justify-content-center\" id=\"prodTitle\">\n                    <h1>Our Wines</h1>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/homepage/homepage.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/homepage/homepage.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Start of the Main Content of the homepage-->\n<!--Start of the Homepage cover-->\n<!--Start of the Landing page-->\n<app-navigation-bar></app-navigation-bar>\n\n<div class=\"landing\">\n    <div class=\"home-wrap\">\n        <div class=\"home-inner\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\" id=\"lead1\">\n                        <h1>Winery Vintage Distillery</h1>\n                        <p class=\"\">\"A good wine is like a gentle kiss, its effect throughout the meal is scintillatingly sensual in an elegantly understated way. Wine grapes take an entire season to ripen and thus, wine is produced just once a year..\"\n                        </p>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <p class=\"lead2\">\"Take a strolling walk along a new, expanded route through the winery and aging cellars, and the distillery stillroom and fermentation room. \"<br><br> -Jesuchris Manlapaz <br> -Erica Nicdao <br> -Lance Buhay <br> -Satisfied Customers\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!--Start of the homepage cover-->\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"caption\">\n            <!-- <p *ngIf=\"user\">Welcome {{user?.displayName}}!</p> -->\n        </div>\n    </div>\n</div>\n<!-- End of the homepage cover -->\n\n<!--Start of the section page-->\n<section id=\"showcase\">\n    <div class=\"container\">\n        <div class=\"row\" style=\"background-color: transparent\">\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"showcase-left\">\n                    <h1>Great Wines for Great Encounters.</h1>\n                    <p>The winery overlooks 80+ acres of planted vineyards, pioneering the production of native muscadine grapes. Every year, the vines provide an abundant crop of grapes - the building blocks for our award-winning Lakeridge wines.\n                    </p><br>\n                    <h4>Wine Blend</h4>\n                    <p>Blending is a traditional method of winemaking, and today there are several famous wine blends produced in classic winemaking regions. Just so you know, most wine blends are mixed together after the fermentation (and aging) is complete.\n                        When grapes are blended and fermented together it is called a <strong>field blend</strong>. A famous example of a field blend is Port wine.</p><br>\n\n                    <div class=\"winefacts\">\n                        <i class=\"fas fa-glass-cheers\">\n                            <h4>Wine Facts</h4>\n                        </i>\n                        <ul class=\"facts\">\n                            <li> As red wines age, they become lighter in color.</li>\n                            <li> Drinking red wine in small doses is better.</li>\n                            <li> The color in red wine comes from the grape skins.</li>\n                            <li>As red wines age, they become lighter in color.</li>\n                            <li>Young red wines are better for you than old red wines.</li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"showcase-right\">\n                    <img src=\"../../../../../assets/images/winehome.jpg\" alt=\"\" class=\"responsive\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--End of the section page-->\n\n<!--Start of the info1-->\n<section id=\"info1\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"info-left\">\n                    <h2>The Origin of the term \"Vintage\"</h2>\n                    <p>Wine grapes take an entire season to ripen and thus, wine is produced just once a year. This is where the term vintage comes from: “Vint” stands for “Winemaking” and “age” implies the year it was made. If a vintage year listed on the\n                        label, that’s the year the grapes were picked and made into wine. The harvest season<span id=\"dots\">...</span><span id=\"more\">in the northern hemisphere (Europe, US) is from\n                            August–September and the harvest season in\n                            the southern hemisphere (Argentina, Australia) is from February–April.</span>\n                    </p><br>\n                    <button class=\"btn btn-primary\" id=\"read\" onclick=\"read()\">Read more</button>\n                </div>\n            </div>\n            <div class=\"col-md-6 col-sm-6\">\n                <div class=\"info-right\">\n                    <img src=\"../../../../../assets/images/winevintage.jpg\" style=\"width:100%\" alt=\"\" class=\"img-responsive\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--End of Info-1-->\n\n<!--Start of the info2-->\n<section id=\"info2\">\n    <section id=\"info2\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6 col-sm-6\">\n                    <div class=\"info-right\">\n                        <img src=\"../../../../../assets/images/w1.jpg\" style=\"width:100%\" alt=\"\" class=\"img-responsive\">\n                    </div>\n                </div>\n                <div class=\"col-md-6 col-sm-6\">\n                    <div class=\"info-left\">\n                        <h2>Winecom History</h2>\n                        <p>Winecom is home to Philippines' first Winery, Distillery, and Brewery facility. Winecom Facility has been producing wines from Philippine grapes since the post-prohibition resurgence in winemaking in the Sonoran desert. WInecom\n                            Distillery was the first licensed Craft Distillery in the Philippines and is the most and highest awarded distillery in the west. It was originally founded in 2003 and has again placed its license on hiatus until a new set\n                            of legislative challenges can be fixed.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</section>\n\n<div class=\"image\">\n    <img class=\"img-responsive\" id=\"bigPic\" src=\"../../../../../assets/images/w7.jpg\" alt=\"\">\n</div>\n<!--End of Info-2-->\n\n<!--Start of the info1-->\n<div class=\"album py-5 bg-light\">\n    <div class=\"container\">\n        <h1 style=\"text-align: center\">Winecom Best-sellers</h1>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                    <img src=\"../../../../assets/images/fat.jpg\" alt=\"\" style=\"width:100%; height: 225%\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is the number 1 best-seller of Winecom. This is the number 1 best-seller of Winecom. This is the number 2 best-seller of Winecom.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                    <img src=\"../../../../assets/images/fat2.jpg\" alt=\"\" style=\"width:100%; height: 225%\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is the number 2 best-seller of Winecom. This is the number 2 best-seller of Winecom. This is the number 2 best-seller of Winecom.\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"card mb-4 shadow-sm\">\n                    <img src=\"../../../../assets/images/fat3.jpg\" alt=\"\" style=\"width:100%; height: 225%\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">This is the number 3 best-seller of Winecom. This is the number 3 best-seller of Winecom. This is the number 2 best-seller of Winecom.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!--End of the Info1-->\n\n<!--Start of landing 2-->\n<div class=\"landing2\">\n    <div class=\"home-wrap2\">\n        <div class=\"home-inner2\">\n            <h1 class=\"tag\">Purchase <span class=\"purchase\">the wine</span> and build <span class=\"purchase2\">excitement\n                </span>around your brand.\n            </h1>\n        </div>\n    </div>\n</div>\n\n<!--End of landing2-->\n\n<div>\n    <app-nav-links (click)=\"onNavClickedTest('Winecom Message ahuehuehue')\"></app-nav-links>\n</div>\n\n<div id=\"snackbar\"> Welcome to Winecom {{user?.displayName}}! </div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/location/location.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/location/location.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"location-section section-padding\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-7\">\n                <div class=\"caption\">\n                    <img src=\"http://themexriver.com/digital-agency/assets/images/map.png\" alt=\"\">\n                </div>\n            </div>\n            <div class=\"col-sm-5\">\n                <div class=\"location-wrapper\">\n                    <div class=\"section-title text-center\">\n                        <span class=\"sub-header\">Our Offices</span>\n                        <div class=\"border\"></div>\n                        <h2>We Are WorldWide</h2>\n                        <p>Winecom Vintage Distillery is a place of community, acceptance, discovery and, family. We\n                            invite you to visit with us, join in the discovery of each vintage, and share this\n                            exploration with your friends and family. We believe in providing our customers with a\n                            relaxed environment to taste, learn and enjoy a beautiful glass of wine. Make \"our life\" a\n                            part of yours! </p>\n                        <button class=\"btn btn-default\"><a href=\"contact.html\">Explore Offices</a></button>\n                    </div> <!-- section-title -->\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-nav-links></app-nav-links>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header__container\">\n    <div class=\"header__row\">\n        <div class=\"row\">\n            <div class=\"col sm-6\">\n                <p *ngIf=\"user\">Welcome {{user?.displayName}}!</p>\n            </div>\n            <div class=\"col sm-6\">\n                <button class=\"btn2\" *ngIf=\"!user\" (click)=\"login()\">Login</button>\n            </div>\n            <button class=\"btn\" *ngIf=\"user\" (click)=\"logout()\">Logout</button>\n        </div>\n        <img (click)=\"goToHome()\" src='../../../../../assets/images/wlogo.png' alt=\"\" style=\"height:50px; margin-top:-45px; margin-left: 450px\">\n    </div>\n</header>\n\n<app-navigation-bar></app-navigation-bar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/navigation-bar/navigation-bar.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/navigation-bar/navigation-bar.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid fixed-top\" style=\"margin-top: 72px\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <div>\n                <span style=\"font-size:30px;cursor:pointer\" onclick=\"setTimeout('openNav()', 100)\">☰</span>\n            </div>\n            <nav id=\"myNav\" class=\"main-menu\">\n                <a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeNav()\">×</a>\n                <menu class=\"menu-item\">\n                    <ul>\n                        <li><a routerLink=\"/home\">Home</a></li>\n                        <li><a routerLink=\"/about-us\">About Us</a></li>\n                        <li (click)=\"onGalleryClick()\"><a routerLink=\"/gallery\">Gallery</a></li>\n                        <li (click)=\"onLocationClick()\"><a routerLink=\"/location\">Location</a></li>\n                        <li (click)=\"onContactClick()\"><a routerLink=\"/contact\">Contact Us</a></li>\n                        <li class=\"nav-item dropdown\">\n                            <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown04\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Winery</a>\n\n                            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown04\">\n                                <a class=\"dropdown-item\" (click)=\"wineryPageChoice('upload')\">Upload Wines</a>\n                                <a class=\"dropdown-item\" (click)=\"wineryPageChoice('update')\">Update Wines</a>\n                                <a class=\"dropdown-item\" (click)=\"wineryPageChoice('brands')\">Brands</a>\n                            </div>\n                        </li>\n                    </ul>\n                </menu>\n            </nav>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/prompt-message/prompt-message.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/prompt-message/prompt-message.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--This component runs frst every start up of the website-->\n\n<div id=\"bg\">\n    <!-- <img src=\"../../../../../assets/images/wineprompt.jpg\" alt=\"\"> -->\n</div>\n<!-- [ngClass]=\"setClasses() -->\n<div class=\"background\">\n    <div class=\"container w3-animate-opacity\" id=\"agePopup\" id=\"mainContainer\">\n        <div class=\"firstText\">\n            <div class=\"textContainer\">\n                <h1>Are you 21 years old or above?</h1>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"container-1\">\n                    <div class=\"btn btn-one\" (click)=\"login()\">\n                        <span>Yes, I am old enough</span>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"container-1\">\n                    <a class=\"btn btn-one\" href=\"https://www.barbie.com\">\n                        <span>No, I am not old enough</span>\n                    </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<!-- <ng-template [ngIf]=\"count==1\">\n        <div class=\"\">\n             <app-navigation-bar></app-navigation-bar>\n            <app-homepage></app-homepage> \n            <app-login></app-login>\n        </div>\n    </ng-template> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/winery-page/winery-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/dashboard/winery-page/winery-page.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"choices\">\n</div>\n<app-images class=\"image-label\"></app-images>\n<!-- ng template for different choices by the user in one page [jesu experiment code] -->\n\n<div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n        <li class=\"sidebar-brand\">Go To</li>\n        <li> <a id=\"uploadAnchor\" (click)=\"onClickCategory('upload'); wineryPageChoice('upload');\">Upload Wines</a> </li>\n        <li> <a id=\"updateAnchor\" (click)=\"onClickCategory('update'); wineryPageChoice('update');\">Update Wines</a> </li>\n        <li> <a id=\"viewAnchor\" (click)=\"onClickCategory('brands'); wineryPageChoice('brands');\">View All Brands</a> </li>\n    </ul>\n</div>\n<!-- /#sidebar-wrapper -->\n\n\n<div class=\"container\">\n    <!-- design for upload -->\n    <ng-template [ngIf]=\"wineryChoice=='upload'\">\n        <!-- design for upload -->\n        <app-upload></app-upload>\n    </ng-template>\n\n    <ng-template [ngIf]=\"wineryChoice=='update'\">\n        <!-- design for update -->\n        <div id=\"image-details\">\n            <app-image-details id=\"image-details\"></app-image-details>\n        </div>\n    </ng-template>\n\n    <ng-template [ngIf]=\"wineryChoice=='brands'\">\n        <!-- design for brands -->\n        <app-image-list></app-image-list>\n    </ng-template>\n</div>\n\n<app-nav-links></app-nav-links>\n<app-footer></app-footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/brands/brands.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/brands/brands.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--This component displays the product associated with the brand clicked by the user-->\n<div class=\"container\">\n    <div class=\"row header\">\n        <div class=\"col\">\n            <h1>Select your desired brand</h1>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row justify-content-center\">\n            <div class=\"col-md-2\">\n                <div class=\"card mb-4\">\n                    <img (click)=\"onClick('A-Mano')\" src='../../../../assets/amano-pictures/amano3.png' alt=\" \" style=\"width: 84%; height: auto; margin-left: 15px;\">\n                    <div class=\"card-body \">\n                        <p class=\"card-text \">Amano\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"card mb-4\">\n                    <img (click)=\"onClick('Yellow-Tail')\" src='../../../../assets/yellow-tail-pictures/yellowtail1.png' alt=\" \" style=\"width:90%; height: auto;  margin-left: 15px;\">\n                    <div class=\"card-body \">\n                        <p class=\"card-text \">Yellow Tail\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <div class=\"card mb-4\">\n                    <img (click)=\"onClick('Hardys and Sons')\" src='../../../../assets/hardys-pictures/hardys1.png' alt=\" \" style=\"width:80%; height: auto; margin-left: 25px;\">\n                    <div class=\"card-body \">\n                        <p class=\"card-text \">Hardys and Sons\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2 \">\n                <div class=\"card mb-4 \">\n                    <img (click)=\"onClick('Barefoot')\" src='../../../../assets/barefoot-pictures/barefoot1.png' alt=\" \" style=\"width:105%; height: auto;\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text \">Barefoot\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2 \">\n                <div class=\"card mb-4\">\n                    <img (click)=\"onClick('Concha Toro')\" src='../../../../assets/conchatoro-pictures/concha1.png' alt=\" \" style=\"width:75%; height: auto; margin-left: 15px;\">\n                    <div class=\"card-body \">\n                        <p class=\"card-text \">Concha Toro\n                        </p>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-2 \">\n                <div class=\"card mb-4\">\n                    <img (click)=\"onClick('Others')\" src='../../../../assets/conchatoro-pictures/concha4.png' alt=\" \" style=\"width:80%; height: auto; \">\n                    <div class=\"card-body \">\n                        <p class=\"card-text \">Others\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image-details/image-details.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/image-details/image-details.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--This component displays the image list summary of the products from the database-->\n\n<div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n        <li class=\"sidebar-brand\">Filter by Brands</li>\n        <li> <a (click)=\"onClickFilter('A Mano')\">A Mano</a> </li>\n        <li> <a (click)=\"onClickFilter('Concha Toro')\">Concha Toro</a> </li>\n        <li> <a (click)=\"onClickFilter('Yellow Tail')\">Yellow Tail</a> </li>\n        <li> <a (click)=\"onClickFilter('Barefoot')\">Barefoot</a> </li>\n        <li> <a (click)=\"onClickFilter('Hardys and Sons')\">Hardys and Sons</a> </li>\n        <li> <a (click)=\"onClickFilter('Others')\">Others</a> </li>\n    </ul>\n</div>\n<!-- /#sidebar-wrapper -->\n\n<div class=\"tableHeader\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>List of '{{filter}}' Wines</h1>\n        </div>\n    </div>\n</div>\n<!-- AMANO -->\n\n<table class=\"table\">\n    <thead class=\"thead-dark\">\n        <tr scope=\"row\">\n            <th scope=\"col\">Image Preview</th>\n            <th scope=\"col\">Alcohol Content</th>\n            <th scope=\"col\">Allergens</th>\n            <th scope=\"col\">Caption</th>\n            <th scope=\"col\">Category</th>\n            <th scope=\"col\">Country</th>\n            <th scope=\"col\">Description</th>\n            <th scope=\"col\">Type</th>\n            <th scope=\"col\"><span id=\"overlap\">---- </span>Action</th>\n            <th scope=\"col\"></th>\n        </tr>\n    </thead>\n\n    <tbody *ngIf=\"filter=='A Mano'\">\n        <tr *ngFor=\"let AMano of winesAMano | paginate: { itemsPerPage: 5, currentPage: a }\">\n            <td><img [src]='AMano.imageUrl' [title]='AMano.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{AMano.alcohol}}%</td>\n            <td>{{AMano.allergen}}</td>\n            <td>{{AMano.caption}}</td>\n            <td>{{AMano.category}}</td>\n            <td>{{AMano.country}}</td>\n            <td>{{AMano.description}}</td>\n            <td>{{AMano.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info\" (click)=\"populateForm(AMano)\" data-toggle=\"modal\" data-target=\"#AManoModal\">Edit</button>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-danger\" (click)=\"onDelete(AMano.$key, AMano.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"a = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n\n\n\n    <!-- YELLOW TAIL -->\n    <tbody *ngIf=\"filter=='Yellow Tail'\">\n        <tr *ngFor=\"let wines of winesYellowTail | paginate: { itemsPerPage: 3, currentPage: b }\">\n            <td><img [src]='wines.imageUrl' [title]='wines.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{wines.alcohol}}%</td>\n            <td>{{wines.allergen}}</td>\n            <td>{{wines.caption}}</td>\n            <td>{{wines.category}}</td>\n            <td>{{wines.country}}</td>\n            <td>{{wines.description}}</td>\n            <td>{{wines.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info\" (click)=\"populateForm(wines)\" data-toggle=\"modal\" data-target=\"#yellowTailModal\">Edit</button>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-danger\" (click)=\"onDelete(wines.$key, wines.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"b = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n\n    <!-- HARDYS AND SONS -->\n    <tbody *ngIf=\"filter=='Hardys and Sons'\">\n        <tr *ngFor=\"let hardy of winesHardys | paginate: { itemsPerPage: 5, currentPage: c }\">\n            <td><img [src]='hardy.imageUrl' [title]='hardy.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{hardy.alcohol}}%</td>\n            <td>{{hardy.allergen}}</td>\n            <td>{{hardy.caption}}</td>\n            <td>{{hardy.category}}</td>\n            <td>{{hardy.country}}</td>\n            <td>{{hardy.description}}</td>\n            <td>{{hardy.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info\" (click)=\"populateForm(hardy)\" data-toggle=\"modal\" data-target=\"#hardyModal\">Edit</button>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-danger\" (click)=\"onDelete(hardy.$key, hardy.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"c = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n\n    <!-- BAREFOOT -->\n    <tbody *ngIf=\"filter=='Barefoot'\">\n        <tr *ngFor=\"let bare of winesBarefoot | paginate: { itemsPerPage: 5, currentPage: d }\">\n            <td><img [src]='bare.imageUrl' [title]='bare.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{bare.alcohol}}%</td>\n            <td>{{bare.allergen}}</td>\n            <td>{{bare.caption}}</td>\n            <td>{{bare.category}}</td>\n            <td>{{bare.country}}</td>\n            <td>{{bare.description}}</td>\n            <td>{{bare.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info\" (click)=\"populateForm(bare)\" data-toggle=\"modal\" data-target=\"#BarefootModal\">Edit</button>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-danger\" (click)=\"onDelete(bare.$key, bare.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"d = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n\n    <!-- CONCHA TORO -->\n    <tbody *ngIf=\"filter=='Concha Toro'\">\n        <tr *ngFor=\"let concha of winesConchaToro | paginate: { itemsPerPage: 5, currentPage: e }\">\n            <td><img [src]='concha.imageUrl' [title]='concha.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{concha.alcohol}}%</td>\n            <td>{{concha.allergen}}</td>\n            <td>{{concha.caption}}</td>\n            <td>{{concha.category}}</td>\n            <td>{{concha.country}}</td>\n            <td>{{concha.description}}</td>\n            <td>{{concha.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-info\" (click)=\"populateForm(concha)\" data-toggle=\"modal\" data-target=\"#ConchaModal\">Edit</button>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <button class=\"btn btn-outline-danger\" (click)=\"onDelete(concha.$key, concha.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"e = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n\n    <!-- OTHERS -->\n    <tbody *ngIf=\"filter=='Others'\">\n        <tr *ngFor=\"let others of winesOthers | paginate: { itemsPerPage: 5, currentPage: f }\">\n            <td><img [src]='others.imageUrl' [title]='others.caption' [style.width.px]='imageWidth' [style.margin.px]='imageMargin'></td>\n            <td>{{others.alcohol}}%</td>\n            <td>{{others.allergen}}</td>\n            <td>{{others.caption}}</td>\n            <td>{{others.category}}</td>\n            <td>{{others.country}}</td>\n            <td>{{others.description}}</td>\n            <td>{{others.type}}</td>\n            <td>\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6\"><button class=\"btn btn-outline-info\" (click)=\"populateForm(others)\" data-toggle=\"modal\" data-target=\"#OthersModal\">Edit</button></div>\n                        <div class=\"col-md-6\"><button class=\"btn btn-outline-danger\" (click)=\"onDelete(others.$key, others.imageUrl)\">Delete</button>\n                        </div>\n                    </div>\n                </div>\n            </td>\n        </tr>\n        <tr>\n            <td class=\"footer\" colspan=\"9\">\n                <pagination-controls (pageChange)=\"f = $event\"></pagination-controls>\n            </td>\n        </tr>\n    </tbody>\n    <div *ngIf=\"filter=='All Products'\">\n        <!-- All Products Table Starts Here -->\n    </div>\n</table>\n\n<!-- Modals Here -->\n<!-- AMANO -->\n<div class=\"modal fade\" id=\"AManoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"AManoModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"AManoModalLabel\">Wine Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitAMano()\">Save changes AMano</button>\n            </div>\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>\n\n<!-- YELLOW TAIL MODAL -->\n<div class=\"modal fade\" id=\"yellowTailModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"yellowTailModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"yellowTailModalLabel\">Wine Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Save changes YellowTail</button>\n            </div>\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>\n\n<!-- HARDYS MODAL -->\n<div class=\"modal fade\" id=\"hardyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"hardyModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"hardyModalLabel\">Wine Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitHardy()\">Save changes Hardys and Sons</button>\n            </div>\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>\n\n<!-- BAREFOOT MODAL -->\n\n<div class=\"modal fade\" id=\"BarefootModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"BarefootModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"BarefootModalLabel\">Wine Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitBarefoot()\">Save changes Barefoot</button>\n            </div>\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>\n\n<!-- Concha Toro Modal -->\n<div class=\"modal fade\" id=\"ConchaModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ConchaModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"ConchaModalLabel\">Wine Details</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitConcha()\">Save changes Concha Toro</button>\n            </div>\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>\n\n<!-- OTHERS MODAL -->\n<div class=\"modal fade\" id=\"OthersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"OthersModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"OthersModalLabel\">Wine Update</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n            </div>\n            <div class=\"modal-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n                        <small>Name</small>\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n                        <small>Description</small>\n                        <input class=\"form-control\" formControlName=\"description\" placeholder=\"Description\">\n                        <small>Allergens</small>\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <small>Country</small>\n                        <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\">\n                        <small>Alcohol Content</small>\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n                        <small>Brand</small>\n                        <input class=\"form-control\" formControlName=\"type\" disabled>\n                        <small>Type</small>\n                        <input class=\"form-control\" formControlName=\"category\" disabled>\n                    </div>\n                </form>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"onSubmitOthers()\">Save changes to Others</button>\n            </div>\n\n            <div id=\"snackbar\"> {{ snackbarMessage }} </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image-list/image-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/image-list/image-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-brands (brandClick)=\"receiveBrandName($event)\"></app-brands>\n\n<h3>{{chosenBrand}} </h3>\n\n<!-- AMANO -->\n<div *ngIf=\"chosenBrand=='A-Mano'\" class=\"pb-5\">\n    <table *ngIf=\"amanoList\">\n        <tr *ngFor=\"let i of rowIndexArray | paginate: { itemsPerPage: 2, currentPage: a }\">\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"amanoList[5*i].imageUrl\" (click)=\"getData(amanoList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{amanoList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"amanoList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"amanoList[5*i+1].imageUrl\" (click)=\"getData(amanoList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{amanoList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"amanoList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"amanoList[5*i+2].imageUrl\" (click)=\"getData(amanoList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{amanoList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"amanoList[5*i+3]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"amanoList[5*i+3].imageUrl\" (click)=\"getData(amanoList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{amanoList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"amanoList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"amanoList[5*i+4].imageUrl\" (click)=\"getData(amanoList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{amanoList[5*i+3].caption}}</span>\n                </div>\n            </td>\n        </tr>\n    </table>\n    <div class=\"footer\" style=\"float: right\">\n        <pagination-controls (pageChange)=\"a = $event\"></pagination-controls>\n    </div>\n</div>\n\n<!-- HARDYS AND SONS -->\n<div *ngIf=\"chosenBrand=='Hardys and Sons'\" class=\"pb-5\">\n    <table *ngIf=\"hardyList\">\n        <tr *ngFor=\"let i of rowHardyArray | paginate: { itemsPerPage: 2, currentPage: b }\">\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"hardyList[5*i].imageUrl\" (click)=\"getData(hardyList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{hardyList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"hardyList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"hardyList[5*i+1].imageUrl\" (click)=\"getData(hardyList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{hardyList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"hardyList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"hardyList[5*i+2].imageUrl\" (click)=\"getData(hardyList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{hardyList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"hardyList[5*i+3]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"hardyList[5*i+3].imageUrl\" (click)=\"getData(hardyList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{hardyList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"hardyList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"hardyList[5*i+4].imageUrl\" (click)=\"getData(hardyList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{hardyList[5*i+4].caption}}</span>\n                </div>\n            </td>\n        </tr>\n        <div class=\"footer\" style=\"float: right\">\n            <pagination-controls (pageChange)=\"b = $event\"></pagination-controls>\n        </div>\n    </table>\n</div>\n\n<!-- YELLOWTAIL -->\n<div *ngIf=\"chosenBrand=='Yellow-Tail'\" class=\"pb-5\">\n    <table *ngIf=\"yellowList\">\n        <tr *ngFor=\"let i of rowYellowArray | paginate: { itemsPerPage: 2, currentPage: c }\">\n\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"yellowList[5*i].imageUrl\" (click)=\"getData(yellowList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{yellowList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"yellowList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"yellowList[5*i+1].imageUrl\" (click)=\"getData(yellowList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{yellowList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"yellowList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"yellowList[5*i+2].imageUrl\" (click)=\"getData(yellowList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{yellowList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"yellowList[5*i+5]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"yellowList[5*i+5].imageUrl\" (click)=\"getData(yellowList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{yellowList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"yellowList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"yellowList[5*i+4].imageUrl\" (click)=\"getData(yellowList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{yellowList[5*i+4].caption}}</span>\n                </div>\n            </td>\n        </tr>\n        <div class=\"footer\" style=\"float: right\">\n            <pagination-controls (pageChange)=\"c = $event\"></pagination-controls>\n        </div>\n    </table>\n</div>\n\n<!--BAREFOOT -->\n<div *ngIf=\"chosenBrand=='Barefoot'\" class=\"pb-5\">\n    <table *ngIf=\"barefootList\">\n        <tr *ngFor=\"let i of rowBarefootArray | paginate: { itemsPerPage: 2, currentPage: d }\">\n\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"barefootList[5*i].imageUrl\" (click)=\"getData(barefootList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{barefootList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"barefootList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"barefootList[5*i+1].imageUrl\" (click)=\"getData(barefootList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{barefootList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"barefootList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"barefootList[5*i+2].imageUrl\" (click)=\"getData(barefootList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{barefootList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"barefootList[5*i+5]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"barefootList[5*i+5].imageUrl\" (click)=\"getData(barefootList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{barefootList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"barefootList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"barefootList[5*i+4].imageUrl\" (click)=\"getData(barefootList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{barefootList[5*i+4].caption}}</span>\n                </div>\n            </td>\n        </tr>\n        <div class=\"footer\" style=\"float: right\">\n            <pagination-controls (pageChange)=\"d = $event\"></pagination-controls>\n        </div>\n    </table>\n</div>\n\n<!-- CONCHA TORO -->\n<div *ngIf=\"chosenBrand=='Concha Toro'\" class=\"pb-5\">\n    <table *ngIf=\"conchaList\">\n        <tr *ngFor=\"let i of rowConchaArray | paginate: { itemsPerPage: 2, currentPage: e }\">\n\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"conchaList[5*i].imageUrl\" (click)=\"getData(conchaList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{conchaList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"conchaList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"conchaList[5*i+1].imageUrl\" (click)=\"getData(conchaList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{conchaList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"conchaList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"conchaList[5*i+2].imageUrl\" (click)=\"getData(conchaList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{conchaList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"conchaList[5*i+5]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"conchaList[5*i+5].imageUrl\" (click)=\"getData(conchaList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{conchaList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"conchaList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"conchaList[5*i+4].imageUrl\" (click)=\"getData(conchaList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{conchaList[5*i+4].caption}}</span>\n                </div>\n            </td>\n        </tr>\n        <div class=\"footer\" style=\"float: right\">\n            <pagination-controls (pageChange)=\"e = $event\"></pagination-controls>\n        </div>\n    </table>\n</div>\n\n<!-- OTHERS -->\n<div *ngIf=\"chosenBrand=='Others'\" class=\"pb-5\">\n    <table *ngIf=\"othersList\">\n        <tr *ngFor=\"let i of rowOthersArray | paginate: { itemsPerPage: 2, currentPage: f }\">\n\n            <td>\n                <div class=\"imagebox\">\n                    <img [src]=\"othersList[5*i].imageUrl\" (click)=\"getData(othersList[5*i]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{othersList[5*i].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"othersList[5*i+1]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"othersList[5*i+1].imageUrl\" (click)=\"getData(othersList[5*i+1]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{othersList[5*i+1].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"othersList[5*i+2]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"othersList[5*i+2].imageUrl\" (click)=\"getData(othersList[5*i+2]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{othersList[5*i+2].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"othersList[5*i+5]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"othersList[5*i+5].imageUrl\" (click)=\"getData(othersList[5*i+3]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{othersList[5*i+3].caption}}</span>\n                </div>\n            </td>\n            <td *ngIf=\"othersList[5*i+4]\">\n                <div class=\"imagebox\">\n                    <img [src]=\"othersList[5*i+4].imageUrl\" (click)=\"getData(othersList[5*i+4]); clickFalse1();\" class=\"img-fluid\" data-toggle=\"modal\" data-target=\"#anyModal\">\n                    <span class=\"imagebox-desc\">{{othersList[5*i+4].caption}}</span>\n                </div>\n            </td>\n        </tr>\n        <div class=\"footer\" style=\"float: right\">\n            <pagination-controls (pageChange)=\"f = $event\"></pagination-controls>\n        </div>\n    </table>\n</div>\n\n<!-- UNIVERSAL MODAL - START -->\n<div *ngIf=\"anyDetails\">\n    <div class=\"modal fade\" id=\"anyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"anyModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-xl\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                            </div>\n                            <div class=\"col-6\" style=\"text-align: center;\">\n                                <h3 class=\"modal-title\" id=\"anyModalLabel\">{{anyDetails.caption}}</h3>\n                            </div>\n                            <div class=\"col\">\n                            </div>\n                        </div>\n                    </div>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n                </div>\n\n                <div class=\"row\" name=\"OG ROW\">\n                    <div class=\"col-sm-11\" name=\"LEVEL 1\">\n                        <div class=\"row\" name=\"LEVEL 2\">\n                            <div class=\"col-4-col col-sm-6\" name=\"LEFT COLUMN\">\n                                <div class=\"modal-body\">\n\n                                    <div *ngIf=\"imageClicked === false\">\n                                        <div class=\"imagebox\">\n                                            <img [src]=\"anyDetails.imageUrl\" class=\"img-fluid\" style=\"width: 500px; height: 500px\">\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"imageClicked2 === false\">\n                                        <div class=\"imagebox\">\n                                            <img [src]=\"anyDetails.imageUrl\" class=\"img-fluid\" style=\"width: 500px; height: 500px\">\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"imageClicked3 === false\">\n                                        <div class=\"imagebox\">\n                                            <img [src]=\"anyDetails.imageUrl\" class=\"img-fluid\" style=\"width: 500px; height: 500px\">\n                                        </div>\n                                    </div>\n\n                                </div>\n                            </div>\n                            <div class=\"col-8-col col-sm-6\" name=\"RIGHT-COLUMN\" id=\"margins\">\n                                <div>\n                                    <br>\n                                    <h5>Description: <span>{{anyDetails.description}}</span></h5><br>\n                                    <h5>Type: <span>{{anyDetails.type}}</span></h5><br>\n                                    <h5>Country: <span>{{anyDetails.country}}</span></h5><br>\n                                    <h5>Allergen(s): <span>{{anyDetails.allergen}}</span></h5><br>\n                                    <h5>Alcohol Content: <span>{{anyDetails.alcohol}}%</span></h5><br>\n\n                                    <!-- ng-templates to avoid white spaces after multiple ngIfs -->\n                                    <ng-template [ngIf]=\"chosenBrand=='A-Mano'\">\n                                        <h5>Visit Our Partner For More Details: <span><a href=\"https://www.amanowine.com/en/\">https://www.amanowine.com/en/</a></span></h5><br>\n                                    </ng-template>\n                                    <ng-template [ngIf]=\"chosenBrand=='Hardys and Sons'\">\n                                        <h5>Visit Our Partner For More Details: <span><a href=\"http://www.hardyswines.com\">http://www.hardyswines.com</a></span></h5>\n                                    </ng-template>\n                                    <ng-template [ngIf]=\"chosenBrand=='Yellow-Tail'\">\n                                        <h5>Visit Our Partner For More Details: <span><a href=\"https://www.yellowtailwine.com\">https://www.yellowtailwine.com</a></span></h5><br>\n                                    </ng-template>\n                                    <ng-template [ngIf]=\"chosenBrand=='Barefoot'\">\n                                        <h5>Visit Our Partner For More Details: <span><a href=\"https://www.barefootwine.com/\">https://www.barefootwine.com/</a></span></h5><br>\n                                    </ng-template>\n                                    <ng-template [ngIf]=\"chosenBrand=='Concha Toro'\">\n                                        <h5>Visit Our Partner For More Details: <span><a href=\"https://conchaytoro.com/en/\">https://conchaytoro.com/en/</a></span></h5><br>\n                                    </ng-template>\n\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"modal-footer\">\n                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- UNIVERSAL MODAL - END -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image/image.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/image/image.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--This component lets the users upload a product to the database-->\n<div class=\"row\" style=\"padding-top: 100px\">\n    <div class=\"col-md-6\">\n        <div class=\"card\" style=\"width: 27rem; height: 96%;\">\n            <div class=\"card-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"text-center\">\n                        <div class=\"img-responsive\" *ngIf=\"defaultPic\">\n                            <img [src]=\"imgSrc\" width=\"380px\" height=\"350px\" (click)=\"fileUploader.click()\">\n                        </div>\n                        <div class=\"img-responsive\" *ngIf=\"!defaultPic\">\n                            <img [src]=\"imgSrc\" width=\"100px\" height=\"350px\" (click)=\"fileUploader.click()\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <h6>Select an image to upload</h6>\n                        <input type=\"file\" accept=\"image/*\" class=\"form-control\" #fileUploader formControlName=\"imageUrl\" (change)=\"showPreview($event)\">\n                        <!-- <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.imageUrl.errors?.required\">This field is required.\n                        </div> -->\n                    </div>\n                    <div class=\"form-group\">\n                        <select formControlName=\"category\" class=\"form-control\">\n                            <option value=\"\" disabled selected>--Select a Brand--</option>\n                            <option value=\"A Mano\">A Mano</option>\n                            <option value=\"Barefoot\">Barefoot</option>\n                            <option value=\"Concha Toro\">Concha Toro</option>\n                            <!-- <option value=\"Gallo\">Gallo</option> -->\n                            <option value=\"Hardys and Sons\">Hardys and Sons</option>\n                            <option value=\"YellowTail\">YellowTail</option>\n                            <option value=\"Others\">Others</option>\n                        </select>\n                        <!-- <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.category.errors?.required\">This field is required.\n                        </div> -->\n                    </div>\n                    <div class=\"form-group\">\n                        <select formControlName=\"type\" class=\"form-control\">\n                            <option value=\"\" disabled selected>--Select a Type--</option>\n                            <option value=\"Red Wine\">Red Wine</option>\n                            <option value=\"White Wine\">White Wine</option>\n                            <option value=\"Rose Wine\">Rose</option>\n                            <option value=\"Sparkling Wine\">Sparkling Wine</option>\n                        </select>\n                    </div>\n                </form>\n                <div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\n                    Deleted successfully.\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-6\">\n        <h5>Please complete all the fields</h5>\n        <div class=\"card\" style=\"width: 27rem;\">\n            <div class=\"card-body\">\n                <form [formGroup]=\"formTemplate\">\n                    <div class=\"form-group\">\n\n                        <input type=\"text\" class=\"d-none\" formControlName=\"hiddenImage\" id=\"\">\n\n                        <input class=\"form-control\" formControlName=\"caption\" placeholder=\"Name\">\n\n                        <textarea class=\"form-control\" formControlName=\"description\" placeholder=\"Description\"></textarea>\n\n                        <input class=\"form-control\" formControlName=\"allergen\" placeholder=\"Allergens\">\n                        <!-- <input class=\"form-control\" formControlName=\"country\" placeholder=\"Country\"> -->\n\n                        <select style=\"margin-bottom: 11px;\" formControlName=\"country\" class=\"form-control\">\n                                <option value=\"\" disabled selected>Country</option>\n                                <option value=\"Germany\">Germany</option>\n                                <option value=\"Ireland\">Ireland</option>\n                                <option value=\"Italy\">Italy</option>\n                                <option value=\"Mexico\">Mexico</option>\n                                <option value=\"Portugal\">Portugal</option>\n                                <option value=\"Japan\">Japan</option>\n                                <option value=\"New Zealand\">New Zealand</option>\n                        </select>\n\n                        <input class=\"form-control\" formControlName=\"alcohol\" placeholder=\"Alcohol Content\" type=\"number\">\n\n                        <!-- <div class=\"text-danger\" *ngIf=\"isSubmitted && formControls.imageUrl.errors?.required\">This field is required.\n                        </div> -->\n                    </div>\n\n                    <div class=\"form-row\">\n                        <div class=\"form-group col-md-6\">\n                            <a id=\"goToProductList-a\" (click)=\"toProductList('Showing Product List')\" class=\"btn btn-primary btn-block float-right\">Go To\n                                    Product List</a>\n                        </div>\n                        <div class=\"form-group col-md-6\">\n                            <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-success btn-block float-right\">Submit</button>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Snackbar -->\n\n<div id=\"snackbar\"> {{ snackbarMessage }} </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/images/images.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/images/images.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- HEADER HTML -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/component/single-product/single-product.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/component/single-product/single-product.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div id=\"banner\">\n        <div id=\"cloud-scroll\">\n            <div class=\"row justify-content-center\" id=\"prodTitle\">\n                    <h1>Product Information</h1>\n            </div>\n        </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/products/container/upload/upload.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/products/container/upload/upload.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image (formSubmit)=\"onUploadSubmit($event)\" (wineFormSubmit)=\"onWineFormSubmit($event)\"></app-image>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/users/components/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/users/components/login/login.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-login-background></app-login-background> -->\n\n<div id=\"bg\">\n</div>\n<div class=\"container\">\n    <img src=\"../../../../../assets/images/trans.png\" alt=\"\" class=\"img-responsive\">\n</div>\n\n<div class=\"container\" id=\"loginbg\">\n\n    <div class=\"box\">\n        <svg>\n            <rect></rect>\n        </svg>\n        <div class=\"content\">\n            <form [formGroup]=\"formLogin\" class=\"f\">\n                <div class=\"login-box\" *ngIf=\"authError\">\n\n                    <!-- displaying authentication error -->\n                    <h1>Login</h1>\n                    <!-- <div class=\"alert alert-danger\">{{authError?.message}}</div> -->\n                </div>\n\n                <div class=\"textbox\">\n                    <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                    <input formControlName=\"email\" type=\"email\" placeholder=\"Email\" (click)='loginDirty()'>\n                </div>\n                <div class=\"text-danger\" *ngIf='isEmail === false'>This field is required.\n                </div>\n\n                <small id=\"emailHelp\" class=\"form-text text-muted\">ex.baileyshark@gmail.com</small>\n                <div class=\"textbox\">\n                    <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                    <input formControlName=\"password\" type=\"password\" placeholder=\"Password\" (click)='loginDirty()'>\n                </div>\n                <div class=\"text-danger\" *ngIf='isPassword === false'>This field is required.\n                </div>\n\n                <div class=\"row mt-2\">\n                    <div class=\"col-12\">\n                        <button class=\"btn btn-one\" (click)=\"login(formLogin.value); loginValidators()\">Login</button>\n                    </div>\n                    <small><button class=\"btnReg fixed-top\" (click)=\"register()\"\n                            style=\"position: right; margin-top:190px;\">Click\n                            here to register</button></small>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/features/users/components/registration/registration.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/users/components/registration/registration.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- html codes for registering a user account -->\n<div id=\"bg\"></div>\n<img src=\"../../../../../assets/images/trans.png\" alt=\"\" class=\"img-responsive\">\n<!-- Form Registration -->\n\n<small><button class=\"btnReg fixed-top\" (click)=\"backToLogin()\" style=\"margin: 20px\">Back to Login</button></small>\n<div class=\"container\">\n    <form [formGroup]=\"formRegistration\" class=\"f\">\n        <div class=\"login-box\" *ngIf=\"authError\">\n            <div class=\"col-10 alert alert-danger\">{{authError?.message}}</div>\n        </div>\n\n        <h1>Registration</h1>\n\n        <!-- First Name Input -->\n        <div class=\"textbox\">\n            <input formControlName=\"firstName\" type=\"text\" placeholder=\"First Name\">\n        </div>\n        <div>\n            <small class=\"text-danger\" *ngIf=\"isSubmitted === false && formControls.firstName.errors?.required\">This field is required.</small>\n        </div>\n\n        <!-- Last Name Input -->\n        <div class=\"textbox\">\n            <input formControlName=\"lastName\" type=\"text\" placeholder=\"Last Name\">\n        </div>\n        <div class=\"text-danger\">\n            <small *ngIf=\"isSubmitted === false && formControls.firstName.errors?.required\">This field is required.</small>\n        </div>\n\n        <!-- Email Input -->\n        <div class=\"textbox\">\n            <input formControlName=\"email\" type=\"email\" placeholder=\"Email Address\">\n        </div>\n        <div class=\"text-danger\">\n            <small *ngIf=\"isSubmitted === false && formControls.firstName.errors?.required\">This field is required.</small>\n        </div>\n        <small id=\"emailHelp\" class=\"form-text text-muted\">example: choco@nowcom.com</small>\n\n        <!-- Password Input -->\n        <div class=\"textbox\" id=\"pass\">\n            <input formControlName=\"password\" type=\"password\" placeholder=\"Password\">\n        </div>\n        <div>\n            <small id=\"emailHelp\" class=\"form-text text-muted\">Minimum of 6 characters.</small>\n            <small *ngIf=\"formControls.errors?.minlength\" class=\"text-danger\">Username must be at least 6 characters long!</small>\n        </div>\n\n        <!-- Confirm Password Input -->\n        <div class=\"textbox\">\n            <input [class.is-invalid]=\"formRegistration.errors?.misMatch\" formControlName=\"confirmPassword\" type=\"password\" placeholder=\"Confirm Password\">\n        </div>\n        <small class=\"text-danger\" *ngIf=\"formRegistration.errors?.misMatch\">Password does not match!</small>\n\n        <div class=\"reg\">\n            <button class=\"btn\" (click)=\"createUser(formRegistration.value)\">Register</button>\n        </div>\n    </form>\n</div>"

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
/* harmony import */ var _features_dashboard_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/dashboard/errorpage/errorpage.component */ "./src/app/features/dashboard/errorpage/errorpage.component.ts");




var routes = [
    { path: '', loadChildren: './features/dashboard/dashboard.module#DashboardModule' },
    { path: 'users', loadChildren: './features/users/users.module#UsersModule' },
    { path: 'images', loadChildren: './features/products/products.module#ProductsModule' },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' },
    { path: 'error404', component: _features_dashboard_errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_3__["ErrorpageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

/*  {
   path: '', redirectTo: 'images', pathMatch: 'full'}, */
/*  {
   path: 'images', component: ImagesComponent,
   children: [
     {
       path: '',
       loadChildren: './features/products/products.module#ProductsModule'
     }
   ]
 },
 {
   path: 'list', component: ImageListComponent
 } */


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'upload-img';
        this.year = 2019;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./features/dashboard/dashboard.module */ "./src/app/features/dashboard/dashboard.module.ts");
/* harmony import */ var _features_users_users_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./features/users/users.module */ "./src/app/features/users/users.module.ts");
/* harmony import */ var _features_products_products_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./features/products/products.module */ "./src/app/features/products/products.module.ts");
/* harmony import */ var _shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/authenticationGuard.service */ "./src/app/shared/authenticationGuard.service.ts");
/* harmony import */ var src_app_features_users_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/features/users/auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ././shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");

// Original Modules




// Database Modules






// Component Modules




// Services



// Peripherals


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig, _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebaseConfig2),
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorageModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabaseModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                _features_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["DashboardModule"],
                _features_users_users_module__WEBPACK_IMPORTED_MODULE_13__["UsersModule"],
                _features_products_products_module__WEBPACK_IMPORTED_MODULE_14__["ProductsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                    toastClass: 'toast toast-bootstrap-compatibility-fix'
                }),
            ],
            providers: [
                _shared_image_service__WEBPACK_IMPORTED_MODULE_17__["ImageService"],
                src_app_features_users_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _shared_authenticationGuard_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationGuard"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/about-us/about-us.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/features/dashboard/about-us/about-us.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Alice|Josefin+Slab&display=swap\");\n.firstImg {\n  position: absolute;\n}\n.navbar {\n  margin-bottom: 150px;\n}\n/* Carousel base class */\n.carousel {\n  margin-bottom: 15em;\n}\n/* Since positioning the image, we need to help out the caption */\n.carousel-caption {\n  bottom: 0;\n  z-index: 10;\n  color: black;\n}\n/* Declare heights because of positioning of img element */\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 20rem;\n}\n.carousel-indicators li {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n}\n/* FOR THE CLOCK **/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: \"Teko\", sans-serif;\n}\n.clock-box {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  padding: 2em 1.5em;\n  background-image: linear-gradient(45deg, #d40e0e, #1b0101);\n  border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;\n  -webkit-animation: bgblob 4s infinite 0.5s;\n          animation: bgblob 4s infinite 0.5s;\n  position: relative;\n}\nh3.header-title {\n  font-weight: 600;\n}\n#taglines {\n  font-size: 7.5em;\n  text-shadow: 0 5px 5px #000000bb;\n  color: white;\n}\n@media screen and (max-width: 768px) {\n  #taglines {\n    font-size: 6em;\n  }\n}\n@-webkit-keyframes bgblob {\n  0% {\n    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;\n  }\n  25% {\n    border-radius: 75% 25% 45% 55%/30% 30% 70% 70%;\n  }\n  50% {\n    border-radius: 61% 39% 27% 73%/62% 77% 23% 38%;\n  }\n  75% {\n    border-radius: 38% 62% 74% 26%/75% 57% 43% 25%;\n  }\n  100% {\n    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;\n  }\n}\n@keyframes bgblob {\n  0% {\n    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;\n  }\n  25% {\n    border-radius: 75% 25% 45% 55%/30% 30% 70% 70%;\n  }\n  50% {\n    border-radius: 61% 39% 27% 73%/62% 77% 23% 38%;\n  }\n  75% {\n    border-radius: 38% 62% 74% 26%/75% 57% 43% 25%;\n  }\n  100% {\n    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;\n  }\n}\n/* this is where about us content scss starts */\n.firstContent {\n  height: 720px;\n  padding-top: 150px;\n}\n#missionContainer {\n  background-color: white;\n  margin-top: 8rem;\n}\n.box {\n  text-align: center;\n  color: #fff;\n  position: relative;\n}\n.box .box-content,\n.box:after {\n  width: 100%;\n  position: absolute;\n  left: 0;\n}\n.box:after {\n  content: \"\";\n  height: 100%;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0)), color-stop(69%, rgba(0, 0, 0, 0.08)), to(rgba(0, 0, 0, 0.76)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.08) 69%, rgba(0, 0, 0, 0.76) 100%);\n  top: 0;\n  -webkit-transition: all 0.5s ease 0s;\n  transition: all 0.5s ease 0s;\n}\n.box .post,\n.box .title {\n  -webkit-transform: translateY(145px);\n          transform: translateY(145px);\n  -webkit-transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;\n  transition: all 0.4s cubic-bezier(0.13, 0.62, 0.81, 0.91) 0s;\n}\n.box:hover:after {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(0, 0, 0, 0.01)), color-stop(11%, rgba(0, 0, 0, 0.09)), color-stop(13%, rgba(0, 0, 0, 0.12)), color-stop(20%, rgba(0, 0, 0, 0.19)), color-stop(28%, rgba(0, 0, 0, 0.29)), color-stop(29%, rgba(0, 0, 0, 0.29)), color-stop(38%, rgba(0, 0, 0, 0.42)), color-stop(43%, rgba(0, 0, 0, 0.46)), color-stop(47%, rgba(0, 0, 0, 0.53)), color-stop(69%, rgba(0, 0, 0, 0.75)), color-stop(84%, rgba(0, 0, 0, 0.87)), color-stop(99%, rgba(0, 0, 0, 0.98)), to(rgba(0, 0, 0, 0.94)));\n  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.01) 0, rgba(0, 0, 0, 0.09) 11%, rgba(0, 0, 0, 0.12) 13%, rgba(0, 0, 0, 0.19) 20%, rgba(0, 0, 0, 0.29) 28%, rgba(0, 0, 0, 0.29) 29%, rgba(0, 0, 0, 0.42) 38%, rgba(0, 0, 0, 0.46) 43%, rgba(0, 0, 0, 0.53) 47%, rgba(0, 0, 0, 0.75) 69%, rgba(0, 0, 0, 0.87) 84%, rgba(0, 0, 0, 0.98) 99%, rgba(0, 0, 0, 0.94) 100%);\n}\n.box img {\n  width: 100%;\n  height: auto;\n}\n.box .box-content {\n  padding: 20px;\n  margin-bottom: 20px;\n  bottom: 0;\n  z-index: 1;\n}\n.box .title {\n  font-size: 22px;\n  font-weight: 700;\n  text-transform: uppercase;\n  margin: 0 0 10px;\n}\n.box .post {\n  display: block;\n  padding: 8px 0;\n  font-size: 15px;\n}\n.box .social li a,\n.box17 .icon li a {\n  border-radius: 50%;\n  font-size: 20px;\n  color: #fff;\n}\n.box:hover .post,\n.box:hover .title {\n  -webkit-transform: translateY(0);\n          transform: translateY(0);\n}\n.box .social {\n  list-style: none;\n  padding: 0 0 5px;\n  margin: 40px 0 25px;\n  opacity: 0;\n  position: relative;\n  -webkit-transform: perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);\n          transform: perspective(500px) rotateX(-90deg) rotateY(0) rotateZ(0);\n  -webkit-transition: all 0.6s cubic-bezier(0, 0, 0.58, 1) 0s;\n  transition: all 0.6s cubic-bezier(0, 0, 0.58, 1) 0s;\n}\n.box:hover .social {\n  opacity: 1;\n  -webkit-transform: perspective(500px) rotateX(0) rotateY(0) rotateZ(0);\n          transform: perspective(500px) rotateX(0) rotateY(0) rotateZ(0);\n}\n.box .social:before {\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background: #fff;\n  margin: 0 auto;\n  position: absolute;\n  top: -23px;\n  left: 0;\n  right: 0;\n}\n.box .social li {\n  display: inline-block;\n}\n.box .social li a {\n  display: block;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  background: #6d3795;\n  margin-right: 10px;\n  -webkit-transition: all 0.3s ease 0s;\n  transition: all 0.3s ease 0s;\n}\n.box17 .icon li,\n.box17 .icon li a {\n  display: inline-block;\n}\n.box .social li a:hover {\n  background: #bea041;\n}\n.box .social li:last-child a {\n  margin-right: 0;\n}\n@media only screen and (max-width: 990px) {\n  .box {\n    margin-bottom: 30px;\n  }\n}\n.secondContent {\n  color: black;\n  background-color: white;\n  margin-top: 500px;\n  padding-top: 50px;\n  text-align: justify;\n}\n#secondContent h1 {\n  font-family: \"Kaushan Script\", cursive;\n  font-size: 50px;\n  text-align: center;\n  padding-bottom: 50px;\n}\n#secondContent .row {\n  text-align: center;\n  background-color: white;\n  padding-top: 20px;\n  margin-bottom: 10rem;\n}\nsection {\n  background-color: #ffffff;\n}\n.wrap {\n  background: white;\n  border-radius: 0.5rem;\n  box-shadow: 7px 7px 30px -5px rgba(0, 0, 0, 0.1);\n  height: 12rem;\n}\n.visionH1,\n#missionContainer h1 {\n  font-family: \"Kaushan Script\";\n}\n.secondContent-left {\n  padding-top: 4rem;\n}\n.secondContent-right img {\n  height: 27rem;\n  margin-top: 11rem;\n}\n.secondContent-right {\n  font-weight: 300px;\n  font-size: 20px;\n}\n.wrap:hover {\n  background: linear-gradient(135deg, #9b5f5f 0%, #a13b3b 100%);\n  color: white;\n  text-shadow: 2px 2px #a01a1a;\n}\n.vcenter {\n  margin: auto;\n}\n.mbr-section-title3 {\n  text-align: left;\n}\nh2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.display-5 {\n  font-size: 1.4rem;\n}\n.mbr-bold {\n  font-weight: 700;\n}\np {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  line-height: 25px;\n}\n.display-6 {\n  font-size: 1rem;\n}\nh3 {\n  text-align: center;\n  margin-bottom: 50px;\n  font-size: 25px;\n  text-align: center;\n}\n.visionH1 {\n  padding-top: 50px;\n}\n.team {\n  background-color: white;\n}\n.team h2 {\n  font-family: \"Kaushan Script\";\n}\n.team .cnt-block {\n  float: left;\n  width: 100%;\n  background: #fff;\n  padding: 20px 10px;\n  text-align: center;\n  border: 2px solid #d5d5d5;\n  margin: 0 0 28px;\n}\n.team .cnt-block figure {\n  width: 148px;\n  height: 148px;\n  border-radius: 100%;\n  display: inline-block;\n  margin-bottom: 5px;\n}\n.team .cnt-block img {\n  width: 148px;\n  height: 148px;\n  border-radius: 100%;\n}\n.team .cnt-block h3 {\n  color: #2a2a2a;\n  font-size: 20px;\n  font-weight: 500;\n  padding: 6px 0;\n  text-transform: uppercase;\n}\n.team .cnt-block h3 a {\n  text-decoration: none;\n  color: #2a2a2a;\n}\n.team .cnt-block h3 a:hover {\n  color: #337ab7;\n}\n.team .cnt-block p {\n  color: #2a2a2a;\n  font-size: 13px;\n  line-height: 20px;\n  font-weight: 400;\n}\n.team .cnt-block .follow-us {\n  margin: 20px 0 0;\n}\n.team .cnt-block .follow-us li {\n  display: inline-block;\n  width: auto;\n  margin: 0 5px;\n}\n.team .cnt-block .follow-us li .fa {\n  font-size: 24px;\n  color: #767676;\n}\n.team .cnt-block .follow-us li .fa:hover {\n  color: #025a8e;\n}\n.row.heading h2 {\n  color: #2e2e2e;\n  font-size: 52.52px;\n  line-height: 95px;\n  font-weight: 400;\n  text-align: center;\n  margin: 0 0 40px;\n  padding-bottom: 6px;\n}\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.heading.heading-icon {\n  display: block;\n}\n.padding-lg {\n  display: block;\n  padding-top: 40px;\n}\n.practice-area.padding-lg {\n  padding-bottom: 55px;\n  padding-top: 55px;\n}\n.practice-area .inner {\n  border: 1px solid #999999;\n  text-align: center;\n  margin-bottom: 28px;\n  padding: 40px 25px;\n}\n.cnt-block:hover {\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\n  border: 0;\n}\n.practice-area .inner h3 {\n  color: #3c3c3c;\n  font-size: 24px;\n  font-weight: 500;\n  font-family: \"Poppins\", sans-serif;\n  padding: 10px 0;\n}\n.practice-area .inner p {\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 400;\n}\n.practice-area .inner img {\n  display: inline-block;\n}\np.soft-eng-p {\n  font-weight: bolder !important;\n  font-size: 15px !important;\n  font-family: \"Alice\";\n}\nh3.soft-eng-names {\n  font-weight: bold !important;\n  margin-top: 5px;\n  font-family: \"Alice\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Fib3V0LXVzL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxhYm91dC11c1xcYWJvdXQtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFWSxzRkFBQTtBQUNSO0VBQ0ksa0JBQUE7QUNEUjtBRElJO0VBQ0ksb0JBQUE7QUNEUjtBREdJLHdCQUFBO0FBRUE7RUFDSSxtQkFBQTtBQ0RSO0FER0ksaUVBQUE7QUFFQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0RSO0FER0ksMERBQUE7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0pSO0FET0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDSlI7QURNSSxtQkFBQTtBQUdBOzs7RUFHSSxzQkFBQTtFQUNBLCtCQUFBO0FDTFI7QURRSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBEQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRFFJO0VBQ0ksZ0JBQUE7QUNMUjtBRFFJO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7QUNMUjtBRFFJO0VBQ0k7SUFDSSxjQUFBO0VDTFY7QUFDRjtBRFFJO0VBQ0k7SUFDSSw4Q0FBQTtFQ05WO0VEUU07SUFDSSw4Q0FBQTtFQ05WO0VEUU07SUFDSSw4Q0FBQTtFQ05WO0VEUU07SUFDSSw4Q0FBQTtFQ05WO0VEUU07SUFDSSw4Q0FBQTtFQ05WO0FBQ0Y7QURUSTtFQUNJO0lBQ0ksOENBQUE7RUNOVjtFRFFNO0lBQ0ksOENBQUE7RUNOVjtFRFFNO0lBQ0ksOENBQUE7RUNOVjtFRFFNO0lBQ0ksOENBQUE7RUNOVjtFRFFNO0lBQ0ksOENBQUE7RUNOVjtBQUNGO0FEUUksK0NBQUE7QUFFQTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtBQ1JSO0FEV0k7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDUlI7QURZSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDVFI7QURZSTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0FDVFI7QURZSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkpBQUE7RUFBQSw2R0FBQTtFQUNBLE1BQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDVFI7QURZSTs7RUFFSSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0Esb0VBQUE7RUFBQSw0REFBQTtBQ1RSO0FEWUk7RUFDSSwwaEJBQUE7RUFBQSwwV0FBQTtBQ1RSO0FEWUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ1RSO0FEWUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1RSO0FEWUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDVFI7QURZSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1RSO0FEWUk7O0VBRUksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ1RSO0FEWUk7O0VBRUksZ0NBQUE7VUFBQSx3QkFBQTtBQ1RSO0FEWUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0VBQ0EsMkRBQUE7RUFBQSxtREFBQTtBQ1RSO0FEWUk7RUFDSSxVQUFBO0VBQ0Esc0VBQUE7VUFBQSw4REFBQTtBQ1RSO0FEWUk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQ1RSO0FEWUk7RUFDSSxxQkFBQTtBQ1RSO0FEWUk7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUFBLDRCQUFBO0FDVFI7QURZSTs7RUFFSSxxQkFBQTtBQ1RSO0FEWUk7RUFDSSxtQkFBQTtBQ1RSO0FEWUk7RUFDSSxlQUFBO0FDVFI7QURZSTtFQUNJO0lBQ0ksbUJBQUE7RUNUVjtBQUNGO0FEYUk7RUFFSSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGdCSTtFQUNJLHNDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNiUjtBRGdCSTtFQUVJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDZFI7QURrQkk7RUFDSSx5QkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdEQUFBO0VBQ0EsYUFBQTtBQ2ZSO0FEa0JJOztFQUVJLDZCQUFBO0FDZlI7QURrQkk7RUFDSSxpQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDZlI7QURrQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNmUjtBRGtCSTtFQUNJLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FDZlI7QURrQkk7RUFDSSxZQUFBO0FDZlI7QURrQkk7RUFDSSxnQkFBQTtBQ2ZSO0FEa0JJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ2ZSO0FEa0JJO0VBRUksaUJBQUE7QUNoQlI7QURtQkk7RUFDSSxnQkFBQTtBQ2hCUjtBRG1CSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtBQ2hCUjtBRG1CSTtFQUVJLGVBQUE7QUNqQlI7QURvQkk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDakJSO0FEb0JJO0VBQ0ksaUJBQUE7QUNqQlI7QURxQkk7RUFDSSx1QkFBQTtBQ2xCUjtBRHFCSTtFQUNJLDZCQUFBO0FDbEJSO0FEcUJJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDbEJSO0FEcUJJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQkk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDbEJSO0FEcUJJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ2xCUjtBRHFCSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQ2xCUjtBRHFCSTtFQUNJLGNBQUE7QUNsQlI7QURxQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQlI7QURxQkk7RUFDSSxnQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNsQlI7QURxQkk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ2xCUjtBRHFCSTtFQUNJLGNBQUE7QUNsQlI7QURxQkk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDbEJSO0FEcUJJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLGNBQUE7QUNsQlI7QURxQkk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNsQlI7QURxQkk7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FDbEJSO0FEcUJJO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNsQlI7QURxQkk7RUFDSSwyQ0FBQTtFQUNBLFNBQUE7QUNsQlI7QURxQkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDbEJSO0FEcUJJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNsQlI7QURxQkk7RUFDSSxxQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQkFBQTtBQ2xCUjtBRHFCSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDbEJSIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC8vIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG4gICAgLy8gQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDo3MDAmZGlzcGxheT1zd2FwJyk7XG4gICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1BbGljZXxKb3NlZmluK1NsYWImZGlzcGxheT1zd2FwJyk7XG4gICAgLmZpcnN0SW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBcbiAgICAubmF2YmFyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgfVxuICAgIC8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cbiAgICBcbiAgICAuY2Fyb3VzZWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNWVtO1xuICAgIH1cbiAgICAvKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbiAgICBcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogMTA7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbiAgICBcbiAgICAvLyAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAvLyAgICAgaGVpZ2h0OiA1MHJlbTtcbiAgICAvLyAgIH1cbiAgICAuY2Fyb3VzZWwtaXRlbT5pbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwcmVtO1xuICAgIH1cbiAgICBcbiAgICAuY2Fyb3VzZWwtaW5kaWNhdG9ycyBsaSB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgfVxuICAgIC8qIEZPUiBUSEUgQ0xPQ0sgKiovXG4gICAgXG4gICAgLy8gQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286cmVndWxhcik7XG4gICAgKixcbiAgICAqOjpiZWZvcmUsXG4gICAgKjo6YWZ0ZXIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBmb250LWZhbWlseTogXCJUZWtvXCIsIHNhbnMtc2VyaWY7XG4gICAgfVxuICAgIFxuICAgIC5jbG9jay1ib3gge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyZW0gMS41ZW07XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2Q0MGUwZSwgIzFiMDEwMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJSA3MCUgNzAlIDMwJSAvIDMwJSAzMCUgNzAlIDcwJTtcbiAgICAgICAgYW5pbWF0aW9uOiBiZ2Jsb2IgNHMgaW5maW5pdGUgMC41cztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgICBcbiAgICBoMy5oZWFkZXItdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICAjdGFnbGluZXMge1xuICAgICAgICBmb250LXNpemU6IDcuNWVtO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMCA1cHggNXB4ICMwMDAwMDBiYjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAjdGFnbGluZXMge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2ZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyBiZ2Jsb2Ige1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XG4gICAgICAgIH1cbiAgICAgICAgMjUlIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDc1JSAyNSUgNDUlIDU1JSAvIDMwJSAzMCUgNzAlIDcwJTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNjElIDM5JSAyNyUgNzMlIC8gNjIlIDc3JSAyMyUgMzglO1xuICAgICAgICB9XG4gICAgICAgIDc1JSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzOCUgNjIlIDc0JSAyNiUgLyA3NSUgNTclIDQzJSAyNSU7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUgLyAzMCUgMzAlIDcwJSA3MCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyogdGhpcyBpcyB3aGVyZSBhYm91dCB1cyBjb250ZW50IHNjc3Mgc3RhcnRzICovXG4gICAgXG4gICAgLmZpcnN0Q29udGVudCB7XG4gICAgICAgIGhlaWdodDogNzIwcHg7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDE1MHB4O1xuICAgIH1cbiAgICBcbiAgICAjbWlzc2lvbkNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICAgICAgbWFyZ2luLXRvcDogOHJlbTtcbiAgICB9XG4gICAgXG4gICAgLy9Gb3IgQWJvdXQgVXMgU2VjdGlvblxuICAgIC5ib3gge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIFxuICAgIC5ib3ggLmJveC1jb250ZW50LFxuICAgIC5ib3g6YWZ0ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwXG4gICAgfVxuICAgIFxuICAgIC5ib3g6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCwgcmdiYSgwLCAwLCAwLCAuMDgpIDY5JSwgcmdiYSgwLCAwLCAwLCAuNzYpIDEwMCUpO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZSAwc1xuICAgIH1cbiAgICBcbiAgICAuYm94IC5wb3N0LFxuICAgIC5ib3ggLnRpdGxlIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE0NXB4KTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBjdWJpYy1iZXppZXIoLjEzLCAuNjIsIC44MSwgLjkxKSAwc1xuICAgIH1cbiAgICBcbiAgICAuYm94OmhvdmVyOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAuMDEpIDAsIHJnYmEoMCwgMCwgMCwgLjA5KSAxMSUsIHJnYmEoMCwgMCwgMCwgLjEyKSAxMyUsIHJnYmEoMCwgMCwgMCwgLjE5KSAyMCUsIHJnYmEoMCwgMCwgMCwgLjI5KSAyOCUsIHJnYmEoMCwgMCwgMCwgLjI5KSAyOSUsIHJnYmEoMCwgMCwgMCwgLjQyKSAzOCUsIHJnYmEoMCwgMCwgMCwgLjQ2KSA0MyUsIHJnYmEoMCwgMCwgMCwgLjUzKSA0NyUsIHJnYmEoMCwgMCwgMCwgLjc1KSA2OSUsIHJnYmEoMCwgMCwgMCwgLjg3KSA4NCUsIHJnYmEoMCwgMCwgMCwgLjk4KSA5OSUsIHJnYmEoMCwgMCwgMCwgLjk0KSAxMDAlKVxuICAgIH1cbiAgICBcbiAgICAuYm94IGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICB9XG4gICAgXG4gICAgLmJveCAuYm94LWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IDFcbiAgICB9XG4gICAgXG4gICAgLmJveCAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHhcbiAgICB9XG4gICAgXG4gICAgLmJveCAucG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XG4gICAgfVxuICAgIFxuICAgIC5ib3ggLnNvY2lhbCBsaSBhLFxuICAgIC5ib3gxNyAuaWNvbiBsaSBhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmXG4gICAgfVxuICAgIFxuICAgIC5ib3g6aG92ZXIgLnBvc3QsXG4gICAgLmJveDpob3ZlciAudGl0bGUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMClcbiAgICB9XG4gICAgXG4gICAgLmJveCAuc29jaWFsIHtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMCAwIDVweDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IDAgMjVweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKC05MGRlZykgcm90YXRlWSgwKSByb3RhdGVaKDApO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGN1YmljLWJlemllcigwLCAwLCAuNTgsIDEpIDBzXG4gICAgfVxuICAgIFxuICAgIC5ib3g6aG92ZXIgLnNvY2lhbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNTAwcHgpIHJvdGF0ZVgoMCkgcm90YXRlWSgwKSByb3RhdGVaKDApXG4gICAgfVxuICAgIFxuICAgIC5ib3ggLnNvY2lhbDpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLTIzcHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwXG4gICAgfVxuICAgIFxuICAgIC5ib3ggLnNvY2lhbCBsaSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xuICAgIH1cbiAgICBcbiAgICAuYm94IC5zb2NpYWwgbGkgYSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzZkMzc5NTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UgMHNcbiAgICB9XG4gICAgXG4gICAgLmJveDE3IC5pY29uIGxpLFxuICAgIC5ib3gxNyAuaWNvbiBsaSBhIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrXG4gICAgfVxuICAgIFxuICAgIC5ib3ggLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2JlYTA0MVxuICAgIH1cbiAgICBcbiAgICAuYm94IC5zb2NpYWwgbGk6bGFzdC1jaGlsZCBhIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwXG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6OTkwcHgpIHtcbiAgICAgICAgLmJveCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy9IaXN0b3J5IENzc1xuICAgIC5zZWNvbmRDb250ZW50IHtcbiAgICAgICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MDBweDtcbiAgICAgICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIC8vICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuICAgIFxuICAgICNzZWNvbmRDb250ZW50IGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG4gICAgXG4gICAgI3NlY29uZENvbnRlbnQgLnJvdyB7XG4gICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTByZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gICAgfVxuICAgIFxuICAgIC8vRm9yIFZpc2lvbiBTdHlsaW5nXG4gICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgfVxuICAgIFxuICAgIC53cmFwIHtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIGJveC1zaGFkb3c6IDdweCA3cHggMzBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgaGVpZ2h0OiAxMnJlbTtcbiAgICB9XG4gICAgXG4gICAgLnZpc2lvbkgxLFxuICAgICNtaXNzaW9uQ29udGFpbmVyIGgxIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCc7XG4gICAgfVxuICAgIFxuICAgIC5zZWNvbmRDb250ZW50LWxlZnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLnNlY29uZENvbnRlbnQtcmlnaHQgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAyN3JlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTFyZW07XG4gICAgfVxuICAgIFxuICAgIC5zZWNvbmRDb250ZW50LXJpZ2h0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMHB4O1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC53cmFwOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzliNWY1ZiAwJSwgI2ExM2IzYiAxMDAlKTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjYTAxYTFhO1xuICAgIH1cbiAgICBcbiAgICAudmNlbnRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG4gICAgLm1ici1zZWN0aW9uLXRpdGxlMyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICAgIFxuICAgIGgyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuICAgIFxuICAgIC5kaXNwbGF5LTUge1xuICAgICAgICAvLyBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIH1cbiAgICBcbiAgICAubWJyLWJvbGQge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgIH1cbiAgICBcbiAgICBwIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgfVxuICAgIFxuICAgIC5kaXNwbGF5LTYge1xuICAgICAgICAvLyBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgaDMge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAudmlzaW9uSDEge1xuICAgICAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICB9XG4gICAgXG4gICAgLy9UaGlyZCBDb250ZW50XG4gICAgLnRlYW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIGgyIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCc7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIC5jbnQtYmxvY2sge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDVkNWQ1O1xuICAgICAgICBtYXJnaW46IDAgMCAyOHB4O1xuICAgIH1cbiAgICBcbiAgICAudGVhbSAuY250LWJsb2NrIGZpZ3VyZSB7XG4gICAgICAgIHdpZHRoOiAxNDhweDtcbiAgICAgICAgaGVpZ2h0OiAxNDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIC5jbnQtYmxvY2sgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE0OHB4O1xuICAgICAgICBoZWlnaHQ6IDE0OHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAudGVhbSAuY250LWJsb2NrIGgzIHtcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgcGFkZGluZzogNnB4IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIC5jbnQtYmxvY2sgaDMgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6ICMyYTJhMmE7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIC5jbnQtYmxvY2sgaDMgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjMzM3YWI3O1xuICAgIH1cbiAgICBcbiAgICAudGVhbSAuY250LWJsb2NrIHAge1xuICAgICAgICBjb2xvcjogIzJhMmEyYTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gICAgXG4gICAgLnRlYW0gLmNudC1ibG9jayAuZm9sbG93LXVzIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDAgMDtcbiAgICB9XG4gICAgXG4gICAgLnRlYW0gLmNudC1ibG9jayAuZm9sbG93LXVzIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gICAgXG4gICAgLnRlYW0gLmNudC1ibG9jayAuZm9sbG93LXVzIGxpIC5mYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgY29sb3I6ICM3Njc2NzY7XG4gICAgfVxuICAgIFxuICAgIC50ZWFtIC5jbnQtYmxvY2sgLmZvbGxvdy11cyBsaSAuZmE6aG92ZXIge1xuICAgICAgICBjb2xvcjogIzAyNWE4ZTtcbiAgICB9XG4gICAgXG4gICAgLnJvdy5oZWFkaW5nIGgyIHtcbiAgICAgICAgY29sb3I6IHJnYig0NiwgNDYsIDQ2KTtcbiAgICAgICAgZm9udC1zaXplOiA1Mi41MnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogOTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDAgMCA0MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnB4O1xuICAgIH1cbiAgICBcbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRpbmcuaGVhZGluZy1pY29uIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIC5wYWRkaW5nLWxnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIH1cbiAgICBcbiAgICAucHJhY3RpY2UtYXJlYS5wYWRkaW5nLWxnIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDU1cHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1NXB4O1xuICAgIH1cbiAgICBcbiAgICAucHJhY3RpY2UtYXJlYSAuaW5uZXIge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI4cHg7XG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjVweDtcbiAgICB9XG4gICAgXG4gICAgLmNudC1ibG9jazpob3ZlciB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICB9XG4gICAgXG4gICAgLnByYWN0aWNlLWFyZWEgLmlubmVyIGgzIHtcbiAgICAgICAgY29sb3I6ICMzYzNjM2M7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgICBcbiAgICAucHJhY3RpY2UtYXJlYSAuaW5uZXIgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIFxuICAgIC5wcmFjdGljZS1hcmVhIC5pbm5lciBpbWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIHAuc29mdC1lbmctcCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXIgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQWxpY2UnO1xuICAgIH1cbiAgICBcbiAgICBoMy5zb2Z0LWVuZy1uYW1lcyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdBbGljZSc7XG4gICAgfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsaWNlfEpvc2VmaW4rU2xhYiZkaXNwbGF5PXN3YXBcIik7XG4uZmlyc3RJbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5uYXZiYXIge1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cblxuLyogQ2Fyb3VzZWwgYmFzZSBjbGFzcyAqL1xuLmNhcm91c2VsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVlbTtcbn1cblxuLyogU2luY2UgcG9zaXRpb25pbmcgdGhlIGltYWdlLCB3ZSBuZWVkIHRvIGhlbHAgb3V0IHRoZSBjYXB0aW9uICovXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGJvdHRvbTogMDtcbiAgei1pbmRleDogMTA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHJlbTtcbn1cblxuLmNhcm91c2VsLWluZGljYXRvcnMgbGkge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4vKiBGT1IgVEhFIENMT0NLICoqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IFwiVGVrb1wiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2xvY2stYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDEuNWVtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNkNDBlMGUsICMxYjAxMDEpO1xuICBib3JkZXItcmFkaXVzOiAzMCUgNzAlIDcwJSAzMCUvMzAlIDMwJSA3MCUgNzAlO1xuICBhbmltYXRpb246IGJnYmxvYiA0cyBpbmZpbml0ZSAwLjVzO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmgzLmhlYWRlci10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiN0YWdsaW5lcyB7XG4gIGZvbnQtc2l6ZTogNy41ZW07XG4gIHRleHQtc2hhZG93OiAwIDVweCA1cHggIzAwMDAwMGJiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICN0YWdsaW5lcyB7XG4gICAgZm9udC1zaXplOiA2ZW07XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmdibG9iIHtcbiAgMCUge1xuICAgIGJvcmRlci1yYWRpdXM6IDMwJSA3MCUgNzAlIDMwJS8zMCUgMzAlIDcwJSA3MCU7XG4gIH1cbiAgMjUlIHtcbiAgICBib3JkZXItcmFkaXVzOiA3NSUgMjUlIDQ1JSA1NSUvMzAlIDMwJSA3MCUgNzAlO1xuICB9XG4gIDUwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNjElIDM5JSAyNyUgNzMlLzYyJSA3NyUgMjMlIDM4JTtcbiAgfVxuICA3NSUge1xuICAgIGJvcmRlci1yYWRpdXM6IDM4JSA2MiUgNzQlIDI2JS83NSUgNTclIDQzJSAyNSU7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogMzAlIDcwJSA3MCUgMzAlLzMwJSAzMCUgNzAlIDcwJTtcbiAgfVxufVxuLyogdGhpcyBpcyB3aGVyZSBhYm91dCB1cyBjb250ZW50IHNjc3Mgc3RhcnRzICovXG4uZmlyc3RDb250ZW50IHtcbiAgaGVpZ2h0OiA3MjBweDtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4jbWlzc2lvbkNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA4cmVtO1xufVxuXG4uYm94IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94IC5ib3gtY29udGVudCxcbi5ib3g6YWZ0ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xufVxuXG4uYm94OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDApIDAsIHJnYmEoMCwgMCwgMCwgMC4wOCkgNjklLCByZ2JhKDAsIDAsIDAsIDAuNzYpIDEwMCUpO1xuICB0b3A6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UgMHM7XG59XG5cbi5ib3ggLnBvc3QsXG4uYm94IC50aXRsZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNDVweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGN1YmljLWJlemllcigwLjEzLCAwLjYyLCAwLjgxLCAwLjkxKSAwcztcbn1cblxuLmJveDpob3ZlcjphZnRlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4wMSkgMCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAxMSUsIHJnYmEoMCwgMCwgMCwgMC4xMikgMTMlLCByZ2JhKDAsIDAsIDAsIDAuMTkpIDIwJSwgcmdiYSgwLCAwLCAwLCAwLjI5KSAyOCUsIHJnYmEoMCwgMCwgMCwgMC4yOSkgMjklLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDM4JSwgcmdiYSgwLCAwLCAwLCAwLjQ2KSA0MyUsIHJnYmEoMCwgMCwgMCwgMC41MykgNDclLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDY5JSwgcmdiYSgwLCAwLCAwLCAwLjg3KSA4NCUsIHJnYmEoMCwgMCwgMCwgMC45OCkgOTklLCByZ2JhKDAsIDAsIDAsIDAuOTQpIDEwMCUpO1xufVxuXG4uYm94IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5ib3ggLmJveC1jb250ZW50IHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYm94IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbWFyZ2luOiAwIDAgMTBweDtcbn1cblxuLmJveCAucG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uYm94IC5zb2NpYWwgbGkgYSxcbi5ib3gxNyAuaWNvbiBsaSBhIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYm94OmhvdmVyIC5wb3N0LFxuLmJveDpob3ZlciAudGl0bGUge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5ib3ggLnNvY2lhbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDAgMCA1cHg7XG4gIG1hcmdpbjogNDBweCAwIDI1cHg7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg1MDBweCkgcm90YXRlWCgtOTBkZWcpIHJvdGF0ZVkoMCkgcm90YXRlWigwKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNnMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuNTgsIDEpIDBzO1xufVxuXG4uYm94OmhvdmVyIC5zb2NpYWwge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDUwMHB4KSByb3RhdGVYKDApIHJvdGF0ZVkoMCkgcm90YXRlWigwKTtcbn1cblxuLmJveCAuc29jaWFsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjNweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5ib3ggLnNvY2lhbCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmJveCAuc29jaWFsIGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQ6ICM2ZDM3OTU7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cblxuLmJveDE3IC5pY29uIGxpLFxuLmJveDE3IC5pY29uIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5ib3ggLnNvY2lhbCBsaSBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2JlYTA0MTtcbn1cblxuLmJveCAuc29jaWFsIGxpOmxhc3QtY2hpbGQgYSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCkge1xuICAuYm94IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG4uc2Vjb25kQ29udGVudCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDUwMHB4O1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuI3NlY29uZENvbnRlbnQgaDEge1xuICBmb250LWZhbWlseTogXCJLYXVzaGFuIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbiNzZWNvbmRDb250ZW50IC5yb3cge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XG59XG5cbnNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4ud3JhcCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDdweCA3cHggMzBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgaGVpZ2h0OiAxMnJlbTtcbn1cblxuLnZpc2lvbkgxLFxuI21pc3Npb25Db250YWluZXIgaDEge1xuICBmb250LWZhbWlseTogXCJLYXVzaGFuIFNjcmlwdFwiO1xufVxuXG4uc2Vjb25kQ29udGVudC1sZWZ0IHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5zZWNvbmRDb250ZW50LXJpZ2h0IGltZyB7XG4gIGhlaWdodDogMjdyZW07XG4gIG1hcmdpbi10b3A6IDExcmVtO1xufVxuXG4uc2Vjb25kQ29udGVudC1yaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ud3JhcDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5YjVmNWYgMCUsICNhMTNiM2IgMTAwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1zaGFkb3c6IDJweCAycHggI2EwMWExYTtcbn1cblxuLnZjZW50ZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYnItc2VjdGlvbi10aXRsZTMge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5oMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZGlzcGxheS01IHtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5tYnItYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbnAge1xuICBwYWRkaW5nLXRvcDogMC41cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cblxuLmRpc3BsYXktNiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmlzaW9uSDEge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLnRlYW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnRlYW0gaDIge1xuICBmb250LWZhbWlseTogXCJLYXVzaGFuIFNjcmlwdFwiO1xufVxuXG4udGVhbSAuY250LWJsb2NrIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAycHggc29saWQgI2Q1ZDVkNTtcbiAgbWFyZ2luOiAwIDAgMjhweDtcbn1cblxuLnRlYW0gLmNudC1ibG9jayBmaWd1cmUge1xuICB3aWR0aDogMTQ4cHg7XG4gIGhlaWdodDogMTQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udGVhbSAuY250LWJsb2NrIGltZyB7XG4gIHdpZHRoOiAxNDhweDtcbiAgaGVpZ2h0OiAxNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLnRlYW0gLmNudC1ibG9jayBoMyB7XG4gIGNvbG9yOiAjMmEyYTJhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4udGVhbSAuY250LWJsb2NrIGgzIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMmEyYTJhO1xufVxuXG4udGVhbSAuY250LWJsb2NrIGgzIGE6aG92ZXIge1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLnRlYW0gLmNudC1ibG9jayBwIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50ZWFtIC5jbnQtYmxvY2sgLmZvbGxvdy11cyB7XG4gIG1hcmdpbjogMjBweCAwIDA7XG59XG5cbi50ZWFtIC5jbnQtYmxvY2sgLmZvbGxvdy11cyBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi50ZWFtIC5jbnQtYmxvY2sgLmZvbGxvdy11cyBsaSAuZmEge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzY3Njc2O1xufVxuXG4udGVhbSAuY250LWJsb2NrIC5mb2xsb3ctdXMgbGkgLmZhOmhvdmVyIHtcbiAgY29sb3I6ICMwMjVhOGU7XG59XG5cbi5yb3cuaGVhZGluZyBoMiB7XG4gIGNvbG9yOiAjMmUyZTJlO1xuICBmb250LXNpemU6IDUyLjUycHg7XG4gIGxpbmUtaGVpZ2h0OiA5NXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwIDQwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4uaGVhZGluZy5oZWFkaW5nLWljb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGRpbmctbGcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5cbi5wcmFjdGljZS1hcmVhLnBhZGRpbmctbGcge1xuICBwYWRkaW5nLWJvdHRvbTogNTVweDtcbiAgcGFkZGluZy10b3A6IDU1cHg7XG59XG5cbi5wcmFjdGljZS1hcmVhIC5pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjhweDtcbiAgcGFkZGluZzogNDBweCAyNXB4O1xufVxuXG4uY250LWJsb2NrOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4ucHJhY3RpY2UtYXJlYSAuaW5uZXIgaDMge1xuICBjb2xvcjogIzNjM2MzYztcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cblxuLnByYWN0aWNlLWFyZWEgLmlubmVyIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4ucHJhY3RpY2UtYXJlYSAuaW5uZXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5wLnNvZnQtZW5nLXAge1xuICBmb250LXdlaWdodDogYm9sZGVyICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJBbGljZVwiO1xufVxuXG5oMy5zb2Z0LWVuZy1uYW1lcyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgZm9udC1mYW1pbHk6IFwiQWxpY2VcIjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/dashboard/about-us/about-us.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/dashboard/about-us/about-us.component.ts ***!
  \*******************************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        /*   setInterval(()=>{
              this.today = Date.now();
          }, 1000
          ); */
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.scss */ "./src/app/features/dashboard/about-us/about-us.component.scss")]
        })
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/contact-us/contact-us.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/features/dashboard/contact-us/contact-us.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pb-100 {\n  padding-bottom: 100px;\n}\n\n.pt-100 {\n  padding-top: 100px;\n}\n\n.mb-100 {\n  margin-bottom: 100px;\n}\n\na {\n  text-decoration: none;\n  color: #333;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.section-title {\n  position: relative;\n}\n\n.section-title p {\n  font-size: 16px;\n  margin-bottom: 5px;\n  font-weight: 400;\n}\n\n.section-title h4 {\n  font-size: 40px;\n  font-weight: 600;\n  text-transform: capitalize;\n  position: relative;\n  padding-bottom: 20px;\n  display: inline-block;\n}\n\n.section-title h4::before {\n  position: absolute;\n  content: \"\";\n  width: 80px;\n  height: 2px;\n  background-color: #d8d8d8;\n  bottom: 0;\n  left: 50%;\n  margin-left: -40px;\n}\n\n.section-title h4::after {\n  position: absolute;\n  content: \"\";\n  width: 50px;\n  height: 2px;\n  background-color: #860000;\n  left: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -25px;\n}\n\n.contact {\n  background: white;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  color: black;\n}\n\n.contact-form input,\ntextarea {\n  width: 100%;\n  border: 1px solid #555;\n  padding: 5px 10px;\n  text-transform: capitalize;\n  margin-top: 15px;\n  background-color: transparent;\n  color: #757575;\n}\n\n.contact:before {\n  position: absolute;\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: white;\n  z-index: -1;\n  opacity: 0.85;\n}\n\n.single-contact {\n  text-align: left;\n  position: relative;\n  padding-left: 70px;\n  margin-bottom: 50px;\n  margin-top: 10px;\n}\n\n.single-contact i.fa {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  background-color: white;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  border-radius: 3px;\n}\n\n.single-contact h5 {\n  font-size: 18px;\n  margin-bottom: 10px;\n  font-weight: 500;\n}\n\n.single-contact p {\n  font-size: 15px;\n  font-weight: 400;\n}\n\n.contact-form input[type=submit] {\n  background-color: #350000;\n  border: 0px;\n  cursor: pointer;\n  font-size: 16px;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n}\n\n.contact-form input[type=submit]:hover {\n  background-color: #350000;\n}\n\n.contact-form input:focus, textarea:focus {\n  border-color: #5a0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2NvbnRhY3QtdXMvQzpcXFVzZXJzXFxtamVzdVxcd2luZWNvbVxcd2luZWNvbXYxXFx3aW5lY29tdjIvc3JjXFxhcHBcXGZlYXR1cmVzXFxkYXNoYm9hcmRcXGNvbnRhY3QtdXNcXGNvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDQyxxQkFBQTtBQ0REOztBREdBO0VBQ0Msa0JBQUE7QUNBRDs7QURFQTtFQUNDLG9CQUFBO0FDQ0Q7O0FEQ0E7RUFDQyxxQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FDRUQ7O0FEQUE7RUFDQyxrQkFBQTtBQ0dEOztBRERBO0VBQ0MsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNJRDs7QURGQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0FDS0Q7O0FESEE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQ01EOztBREpBO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0FDT0Q7O0FETEE7RUFFQyxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUdHLFlBQUE7QUNLSjs7QURIQTs7RUFFQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7QUNNRDs7QURKQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSx1QkFBQTtFQUNHLFdBQUE7RUFDQSxhQUFBO0FDT0o7O0FESkE7RUFDQyxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDT0Q7O0FETEE7RUFDQyxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsbUNBQUE7RUFDUSwyQkFBQTtFQUNSLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNRRDs7QUROQTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDU0Q7O0FEUEE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUNVRDs7QURSQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ1dEOztBRFRBO0VBQ0MseUJBQUE7QUNZRDs7QURWQTtFQUNDLHFCQUFBO0FDYUQiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vL0NvbnRhY3QgVXMgY3NzXG4ucGItMTAwIHtcblx0cGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuLnB0LTEwMCB7XG5cdHBhZGRpbmctdG9wOiAxMDBweDtcbn1cbi5tYi0xMDAge1xuXHRtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiAjMzMzO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC40cztcblx0dHJhbnNpdGlvbjogLjRzO1xufVxuLnNlY3Rpb24tdGl0bGUge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi10aXRsZSBwIHtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRtYXJnaW4tYm90dG9tOiA1cHg7XG5cdGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uc2VjdGlvbi10aXRsZSBoNCB7XG5cdGZvbnQtc2l6ZTogNDBweDtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZWN0aW9uLXRpdGxlIGg0OjpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDJweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiAtNDBweDtcbn1cbi5zZWN0aW9uLXRpdGxlIGg0OjphZnRlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Y29udGVudDogXCJcIjtcblx0d2lkdGg6IDUwcHg7XG5cdGhlaWdodDogMnB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAwLCAwKTtcblx0bGVmdDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiA1MCU7XG5cdG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cbi5jb250YWN0IHtcblx0Ly8gYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ibGFja2hkLmpwZ1wiKTtcblx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG5cdC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ly8gei1pbmRleDogMjtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xufVxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcbnRleHRhcmVhIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XG5cdHBhZGRpbmc6IDVweCAxMHB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcblx0bWFyZ2luLXRvcDogMTVweDtcblx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cdGNvbG9yOiByZ2IoMTE3LCAxMTcsIDExNyk7XG59XG4uY29udGFjdDpiZWZvcmUge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbnRlbnQ6IFwiXCI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGxlZnQ6IDA7XG5cdHRvcDogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9wYWNpdHk6IDAuODU7XG5cdC8vIC1tcy1maWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LkFscGhhKE9wYWNpdHk9ODUpXCI7XG59XG4uc2luZ2xlLWNvbnRhY3Qge1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmctbGVmdDogNzBweDtcblx0bWFyZ2luLWJvdHRvbTogNTBweDtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbi5zaW5nbGUtY29udGFjdCBpLmZhIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHR0b3A6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG5cdCAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG5cdHdpZHRoOiA0MHB4O1xuXHRoZWlnaHQ6IDQwcHg7XG5cdGxpbmUtaGVpZ2h0OiA0MHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbi5zaW5nbGUtY29udGFjdCBoNSB7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5zaW5nbGUtY29udGFjdCBwIHtcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuLmNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDUzLCAwLCAwKTtcblx0Ym9yZGVyOiAwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHQtd2Via2l0LXRyYW5zaXRpb246IC40cztcblx0dHJhbnNpdGlvbjogLjRzXG59XG4uY29udGFjdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOnJnYig1MywgMCwgMCk7XG59XG4uY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG5cdGJvcmRlci1jb2xvcjogcmdiKDkwLCAwLCAwKVxufVxuIiwiLnBiLTEwMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cblxuLnB0LTEwMCB7XG4gIHBhZGRpbmctdG9wOiAxMDBweDtcbn1cblxuLm1iLTEwMCB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5hIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzMzMztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNlY3Rpb24tdGl0bGUgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNCB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDQ6OmJlZm9yZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSBoNDo6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg2MDAwMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcbn1cblxuLmNvbnRhY3Qge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb250YWN0LWZvcm0gaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNTU1O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzc1NzU3NTtcbn1cblxuLmNvbnRhY3Q6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAtMTtcbiAgb3BhY2l0eTogMC44NTtcbn1cblxuLnNpbmdsZS1jb250YWN0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zaW5nbGUtY29udGFjdCBpLmZhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLnNpbmdsZS1jb250YWN0IGg1IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uc2luZ2xlLWNvbnRhY3QgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUwMDAwO1xuICBib3JkZXI6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE2cHg7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUwMDAwO1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLCB0ZXh0YXJlYTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzVhMDAwMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/dashboard/contact-us/contact-us.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/features/dashboard/contact-us/contact-us.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/features/dashboard/contact-us/contact-us.component.scss")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/dashboard-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/dashboard/dashboard-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/features/dashboard/homepage/homepage.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/features/dashboard/about-us/about-us.component.ts");
/* harmony import */ var _prompt_message_prompt_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt-message/prompt-message.component */ "./src/app/features/dashboard/prompt-message/prompt-message.component.ts");
/* harmony import */ var _users_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users/components/login/login.component */ "./src/app/features/users/components/login/login.component.ts");
/* harmony import */ var _winery_page_winery_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./winery-page/winery-page.component */ "./src/app/features/dashboard/winery-page/winery-page.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/features/dashboard/gallery-page/gallery-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/features/dashboard/contact-us/contact-us.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location.component */ "./src/app/features/dashboard/location/location.component.ts");
/* harmony import */ var _products_component_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../products/component/single-product/single-product.component */ "./src/app/features/products/component/single-product/single-product.component.ts");



// Importing Dashboard components









var routes = [
    // temporary redirect routing
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'about-us', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_4__["AboutUsComponent"] },
    { path: 'prompt', component: _prompt_message_prompt_message_component__WEBPACK_IMPORTED_MODULE_5__["PromptMessageComponent"] },
    { path: 'login', component: _users_components_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"] },
    { path: 'winery', component: _winery_page_winery_page_component__WEBPACK_IMPORTED_MODULE_7__["WineryPageComponent"] },
    { path: 'gallery', component: _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_8__["GalleryPageComponent"] },
    { path: 'location', component: _location_location_component__WEBPACK_IMPORTED_MODULE_10__["LocationComponent"] },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_9__["ContactUsComponent"] },
    { path: 'single-product', component: _products_component_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_11__["SingleProductComponent"] }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/dashboard.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation-bar/navigation-bar.component */ "./src/app/features/dashboard/navigation-bar/navigation-bar.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/features/dashboard/homepage/homepage.component.ts");
/* harmony import */ var _prompt_message_prompt_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prompt-message/prompt-message.component */ "./src/app/features/dashboard/prompt-message/prompt-message.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/features/dashboard/about-us/about-us.component.ts");
/* harmony import */ var _winery_page_winery_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./winery-page/winery-page.component */ "./src/app/features/dashboard/winery-page/winery-page.component.ts");
/* harmony import */ var _navigation_bar_nav_links_nav_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation-bar/nav-links/nav-links.component */ "./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.ts");
/* harmony import */ var _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery-page/gallery-page.component */ "./src/app/features/dashboard/gallery-page/gallery-page.component.ts");
/* harmony import */ var _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./errorpage/errorpage.component */ "./src/app/features/dashboard/errorpage/errorpage.component.ts");
/* harmony import */ var _gallery_page_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gallery-page/image-gallery/image-gallery.component */ "./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.ts");
/* harmony import */ var _users_users_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../users/users.module */ "./src/app/features/users/users.module.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/features/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _products_products_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../products/products.module */ "./src/app/features/products/products.module.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/features/dashboard/contact-us/contact-us.component.ts");
/* harmony import */ var _location_location_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./location/location.component */ "./src/app/features/dashboard/location/location.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/features/dashboard/footer/footer.component.ts");



// To import dashboard components









// To import other modules






var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"],
                _prompt_message_prompt_message_component__WEBPACK_IMPORTED_MODULE_5__["PromptMessageComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"],
                _winery_page_winery_page_component__WEBPACK_IMPORTED_MODULE_7__["WineryPageComponent"],
                _navigation_bar_nav_links_nav_links_component__WEBPACK_IMPORTED_MODULE_8__["NavLinksComponent"],
                _gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"],
                _gallery_page_image_gallery_image_gallery_component__WEBPACK_IMPORTED_MODULE_11__["ImageGalleryComponent"],
                _errorpage_errorpage_component__WEBPACK_IMPORTED_MODULE_10__["ErrorpageComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_15__["ContactUsComponent"],
                _location_location_component__WEBPACK_IMPORTED_MODULE_16__["LocationComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_13__["DashboardRoutingModule"],
                _users_users_module__WEBPACK_IMPORTED_MODULE_12__["UsersModule"],
                _products_products_module__WEBPACK_IMPORTED_MODULE_14__["ProductsModule"],
            ],
            exports: [
                _navigation_bar_navigation_bar_component__WEBPACK_IMPORTED_MODULE_3__["NavigationBarComponent"],
                _navigation_bar_nav_links_nav_links_component__WEBPACK_IMPORTED_MODULE_8__["NavLinksComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/features/dashboard/errorpage/errorpage.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/features/dashboard/errorpage/errorpage.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-wrap {\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Vycm9ycGFnZS9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXGRhc2hib2FyZFxcZXJyb3JwYWdlXFxlcnJvcnBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9lcnJvcnBhZ2UvZXJyb3JwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9lcnJvcnBhZ2UvZXJyb3JwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcCB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG59IiwiLnBhZ2Utd3JhcCB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/dashboard/errorpage/errorpage.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/dashboard/errorpage/errorpage.component.ts ***!
  \*********************************************************************/
/*! exports provided: ErrorpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorpageComponent", function() { return ErrorpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorpageComponent = /** @class */ (function () {
    function ErrorpageComponent() {
    }
    ErrorpageComponent.prototype.ngOnInit = function () {
    };
    ErrorpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-errorpage',
            template: __webpack_require__(/*! raw-loader!./errorpage.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/errorpage/errorpage.component.html"),
            styles: [__webpack_require__(/*! ./errorpage.component.scss */ "./src/app/features/dashboard/errorpage/errorpage.component.scss")]
        })
    ], ErrorpageComponent);
    return ErrorpageComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/footer/footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/features/dashboard/footer/footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\n  color: #333;\n}\n\n/*\n      Multicoloured Hover Variations\n  */\n\n#social-fb:hover {\n  color: #3B5998;\n  padding-left: 5px;\n  font-weight: 700;\n}\n\n#social-tw:hover {\n  color: #4099FF;\n  padding-left: 5px;\n  font-weight: 700;\n}\n\n#social-gp:hover {\n  color: #d34836;\n  padding-left: 5px;\n  font-weight: 700;\n}\n\n#social-em:hover {\n  color: #f39c12;\n  padding-left: 5px;\n  font-weight: 700;\n}\n\nfooter {\n  padding: 20px;\n  background: #050505;\n  color: white;\n}\n\n#footLinks a {\n  margin-bottom: 50px;\n  padding-right: 3rem;\n  -webkit-transition: 0.2s all ease;\n  transition: 0.2s all ease;\n}\n\n#footLinks a:hover {\n  color: #646464;\n  margin-bottom: 5px;\n  font-weight: 700;\n}\n\n#socialLinks a {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Zvb3Rlci9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXGRhc2hib2FyZFxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBQTtBQ0FKOztBRFlBOztHQUFBOztBQUlBO0VBQ0ksY0FBQTtFQUNELGlCQUFBO0VBQ0YsZ0JBQUE7QUNWRDs7QURhQTtFQUNJLGNBQUE7RUFDRCxpQkFBQTtFQUNGLGdCQUFBO0FDVkQ7O0FEYUE7RUFDSSxjQUFBO0VBQ0QsaUJBQUE7RUFDRixnQkFBQTtBQ1ZEOztBRGFBO0VBQ0ksY0FBQTtFQUNELGlCQUFBO0VBQ0YsZ0JBQUE7QUNWRDs7QURhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNWSjs7QURjQTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFFSCxpQ0FBQTtFQUFBLHlCQUFBO0FDWkQ7O0FEZUE7RUFDSSxjQUFBO0VBQ0gsa0JBQUE7RUFDQSxnQkFBQTtBQ1pEOztBRGVBO0VBQ0ksa0JBQUE7QUNaSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5hIHtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuLy8gLnNvY2lhbDpob3ZlciB7XG4vLyAgICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuLy8gfVxuXG4vLyAuc29jaWFsIHtcbi8vICAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4vLyAgICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbi8vIH1cblxuLypcbiAgICAgIE11bHRpY29sb3VyZWQgSG92ZXIgVmFyaWF0aW9uc1xuICAqL1xuXG4jc29jaWFsLWZiOmhvdmVyIHtcbiAgICBjb2xvcjogIzNCNTk5ODtcbiAgIHBhZGRpbmctbGVmdDo1cHg7XG5cdGZvbnQtd2VpZ2h0OjcwMDtcbn1cblxuI3NvY2lhbC10dzpob3ZlciB7XG4gICAgY29sb3I6ICM0MDk5RkY7XG4gICBwYWRkaW5nLWxlZnQ6NXB4O1xuXHRmb250LXdlaWdodDo3MDA7XG59XG5cbiNzb2NpYWwtZ3A6aG92ZXIge1xuICAgIGNvbG9yOiAjZDM0ODM2O1xuICAgcGFkZGluZy1sZWZ0OjVweDtcblx0Zm9udC13ZWlnaHQ6NzAwO1xufVxuXG4jc29jaWFsLWVtOmhvdmVyIHtcbiAgICBjb2xvcjogI2YzOWMxMjtcbiAgIHBhZGRpbmctbGVmdDo1cHg7XG5cdGZvbnQtd2VpZ2h0OjcwMDtcbn1cblxuZm9vdGVyIHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYig1LCA1LCA1KTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuI2Zvb3RMaW5rcyBhe1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZy1yaWdodDogM3JlbTtcbiBcblx0dHJhbnNpdGlvbjogLjJzIGFsbCBlYXNlO1xufVxuXG4jZm9vdExpbmtzIGE6aG92ZXJ7XG4gICAgY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcblx0bWFyZ2luLWJvdHRvbTo1cHg7XG5cdGZvbnQtd2VpZ2h0OjcwMDtcbn1cblxuI3NvY2lhbExpbmtzIGF7XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xufSIsImEge1xuICBjb2xvcjogIzMzMztcbn1cblxuLypcbiAgICAgIE11bHRpY29sb3VyZWQgSG92ZXIgVmFyaWF0aW9uc1xuICAqL1xuI3NvY2lhbC1mYjpob3ZlciB7XG4gIGNvbG9yOiAjM0I1OTk4O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3NvY2lhbC10dzpob3ZlciB7XG4gIGNvbG9yOiAjNDA5OUZGO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3NvY2lhbC1ncDpob3ZlciB7XG4gIGNvbG9yOiAjZDM0ODM2O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3NvY2lhbC1lbTpob3ZlciB7XG4gIGNvbG9yOiAjZjM5YzEyO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuZm9vdGVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzA1MDUwNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jZm9vdExpbmtzIGEge1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xuICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlO1xufVxuXG4jZm9vdExpbmtzIGE6aG92ZXIge1xuICBjb2xvcjogIzY0NjQ2NDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jc29jaWFsTGlua3MgYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/dashboard/footer/footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/features/dashboard/footer/footer.component.ts ***!
  \***************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.route.fragment.subscribe(function (value) {
            _this.wineryChoice = value;
            console.log(value, 'wineryChoice');
        });
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.wineryPageChoice = function () {
        this.router.navigate(['/winery'], { fragment: 'brands' });
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/features/dashboard/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/gallery-page/gallery-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/features/dashboard/gallery-page/gallery-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n.quote {\n  color: gray;\n  font-size: 2rem;\n  text-align: center;\n  font-family: \"Kaushan Script\";\n}\n.imagebox {\n  background: transparent;\n  padding: 0px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n}\n.imagebox img {\n  opacity: 1;\n  -webkit-transition: 0.5s opacity;\n  transition: 0.5s opacity;\n  /** Added by ate Khamae, For fitting the image **/\n  -o-object-fit: contain;\n     object-fit: contain;\n  width: 350px;\n  height: 350px;\n  cursor: pointer;\n}\n.imagebox .imagebox-desc {\n  background-color: rgba(0, 0, 0, 0.6);\n  bottom: 0px;\n  height: 20%;\n  color: white;\n  font-size: 1.2em;\n  left: 0px;\n  padding: 10px 15px;\n  position: absolute;\n  -webkit-transition: 0.5s padding;\n  transition: 0.5s padding;\n  text-align: center;\n  width: 100%;\n}\n.imagebox:hover img {\n  opacity: 0.7;\n}\n.imagebox:hover .imagebox-desc {\n  padding-bottom: 100px;\n}\n@media only screen and (max-width: 992px) {\n  h3 {\n    background-color: red;\n    color: pink;\n  }\n}\ntd {\n  margin: 5px;\n  width: 350px;\n  height: 350px;\n}\ntable {\n  margin-bottom: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2dhbGxlcnktcGFnZS9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXGRhc2hib2FyZFxcZ2FsbGVyeS1wYWdlXFxnYWxsZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9nYWxsZXJ5LXBhZ2UvZ2FsbGVyeS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBQ1I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUNDSjtBREdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjtBREdBO0VBQ0ksVUFBQTtFQUNBLGdDQUFBO0VBQUEsd0JBQUE7RUFDQSxpREFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjtBREdBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0FDQUo7QURHQTtFQUNJLHFCQUFBO0FDQUo7QURTQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxXQUFBO0VDTk47QUFDRjtBRFNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUEo7QURVQTtFQUNJLG9CQUFBO0FDUEoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZ2FsbGVyeS1wYWdlL2dhbGxlcnktcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG4ucXVvdGUge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCc7XG4gICAgXG59XG5cbi5pbWFnZWJveCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZWJveCBpbWcge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogMC41cyBvcGFjaXR5O1xuICAgIC8qKiBBZGRlZCBieSBhdGUgS2hhbWFlLCBGb3IgZml0dGluZyB0aGUgaW1hZ2UgKiovXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZWJveCAuaW1hZ2Vib3gtZGVzYyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGhlaWdodDogMjAlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGxlZnQ6IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IDAuNXMgcGFkZGluZztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbWFnZWJveDpob3ZlciBpbWcge1xuICAgIG9wYWNpdHk6IDAuNztcbn1cblxuLmltYWdlYm94OmhvdmVyIC5pbWFnZWJveC1kZXNjIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbi8vIGg1OmhvdmVyLmJyYW5kcyB7XG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICM3NDc0NzQsICRhbW91bnQ6IDApO1xuLy8gICAgIGNvbG9yOiB3aGl0ZTtcbi8vIH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5MnB4KSB7XG4gICAgaDMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgIGNvbG9yOiBwaW5rO1xuICAgIH1cbn1cblxudGQge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4XG59XG5cbnRhYmxle1xuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcbi5xdW90ZSB7XG4gIGNvbG9yOiBncmF5O1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIjtcbn1cblxuLmltYWdlYm94IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Vib3ggaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cyBvcGFjaXR5O1xuICAvKiogQWRkZWQgYnkgYXRlIEtoYW1hZSwgRm9yIGZpdHRpbmcgdGhlIGltYWdlICoqL1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlYm94IC5pbWFnZWJveC1kZXNjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3R0b206IDBweDtcbiAgaGVpZ2h0OiAyMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbGVmdDogMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNpdGlvbjogMC41cyBwYWRkaW5nO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Vib3g6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaW1hZ2Vib3g6aG92ZXIgLmltYWdlYm94LWRlc2Mge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgaDMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICBjb2xvcjogcGluaztcbiAgfVxufVxudGQge1xuICBtYXJnaW46IDVweDtcbiAgd2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDM1MHB4O1xufVxuXG50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/dashboard/gallery-page/gallery-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/dashboard/gallery-page/gallery-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/image.service */ "./src/app/shared/image.service.ts");


// import { ImageService } from '../../../../app/shared/image.service';

var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent(service) {
        this.service = service;
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getImageDetailList();
        // AMANO DISPLAY
        this.service.imageAMano.snapshotChanges().subscribe(function (list) {
            _this.amanoList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowIndexArray = Array.from(Array(Math.ceil(_this.amanoList.length / 5)).keys());
        });
        // HARDY AND SONS DISPLAY
        this.service.imageHardysAndSons.snapshotChanges().subscribe(function (list) {
            _this.hardyList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowHardyArray = Array.from(Array(Math.ceil(_this.hardyList.length / 5)).keys());
        });
        // YELLOWTAIL DISPLAY
        this.service.imageYellowTail.snapshotChanges().subscribe(function (list) {
            _this.yellowList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowYellowArray = Array.from(Array(Math.ceil(_this.yellowList.length / 5)).keys());
        });
        // BAREFOOT DISPLAY
        this.service.imageBarefoot.snapshotChanges().subscribe(function (list) {
            _this.barefootList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowBarefootArray = Array.from(Array(Math.ceil(_this.barefootList.length / 5)).keys());
        });
        // CONCHA TORO DISPLAY
        this.service.imageConchaToro.snapshotChanges().subscribe(function (list) {
            _this.conchaList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowConchaArray = Array.from(Array(Math.ceil(_this.conchaList.length / 5)).keys());
        });
        // GALLO DISPLAY
        this.service.imageGallo.snapshotChanges().subscribe(function (list) {
            _this.galloList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowGalloArray = Array.from(Array(Math.ceil(_this.galloList.length / 5)).keys());
        });
        // OTHERS DISPLAY
        this.service.imageOthers.snapshotChanges().subscribe(function (list) {
            _this.othersList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowOthersArray = Array.from(Array(Math.ceil(_this.othersList.length / 5)).keys());
        });
    };
    GalleryPageComponent.ctorParameters = function () { return [
        { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
    ]; };
    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/features/dashboard/gallery-page/gallery-page.component.scss")]
        })
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Cedarville+Cursive|Niconne&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Monoton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:500&display=swap\");\n.ourGallery {\n  margin-left: 100px;\n  background-color: gray;\n}\n.absolute {\n  margin-left: 500px;\n}\n.text {\n  background-color: gray;\n  margin-top: 12rem;\n  text-align: center;\n  padding-top: 50px;\n  padding-bottom: 50px;\n  font-family: \"Kaushan Script\";\n}\n#front {\n  width: 250px;\n  height: 250px;\n  position: relative;\n  top: 150px;\n  left: 255px;\n}\n#right {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 200px;\n  left: 750px;\n  -webkit-animation: right 1s ease;\n          animation: right 1s ease;\n  opacity: 1;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n}\n#left {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 200px;\n  left: 250px;\n  -webkit-animation: left 1s ease;\n          animation: left 1s ease;\n  opacity: 1;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n}\n#right1 {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 200px;\n  left: 1000px;\n  -webkit-animation: right1 1s 1s, op 1s;\n          animation: right1 1s 1s, op 1s;\n  opacity: 1;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n}\n#left1 {\n  width: 250px;\n  height: 250px;\n  position: absolute;\n  top: 200px;\n  left: 0px;\n  -webkit-animation: left1 1s 1s ease, op 1s;\n          animation: left1 1s 1s ease, op 1s;\n  opacity: 1;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n}\n@-webkit-keyframes left {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 250px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@keyframes left {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 250px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@-webkit-keyframes right {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 750px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@keyframes right {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 750px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.8);\n            transform: scale(0.8);\n  }\n}\n@-webkit-keyframes op {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes op {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes left1 {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 0px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}\n@keyframes left1 {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 0px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}\n@-webkit-keyframes right1 {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 1000px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}\n@keyframes right1 {\n  0% {\n    top: 200px;\n    left: 500px;\n    width: 250px;\n    height: 250px;\n    opacity: 0;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% {\n    position: fixed;\n    top: 200px;\n    left: 1000px;\n    width: 250px;\n    height: 250px;\n    opacity: 1;\n    -webkit-transform: scale(0.75);\n            transform: scale(0.75);\n  }\n}\nimg {\n  padding-right: -30rem;\n}\n.container-fluid {\n  position: relative;\n  text-align: center;\n  color: black;\n}\n#banner {\n  background-image: linear-gradient(120deg, black 0%, black 87%);\n  position: relative;\n  width: 100%;\n  height: 950px;\n}\n#cloud-scroll {\n  background: url('mirrored.png') repeat-x;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  position: absolute;\n  -webkit-animation: 9000000s backgroundScroll infinite linear;\n  animation: 2500000s backgroundScroll infinite linear;\n}\n@-webkit-keyframes backgroundScroll {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -99999999px 0;\n  }\n}\n@keyframes backgroundScroll {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -99999999px 0;\n  }\n}\n#prodTitle h1 {\n  position: absolute;\n  color: #e4e1e1;\n  margin-top: 15rem;\n  font-size: 10rem;\n  text-shadow: 2px 5px #424242;\n  font-family: \"Dancing Script\", cursive;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2dhbGxlcnktcGFnZS9pbWFnZS1nYWxsZXJ5L0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxnYWxsZXJ5LXBhZ2VcXGltYWdlLWdhbGxlcnlcXGltYWdlLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9nYWxsZXJ5LXBhZ2UvaW1hZ2UtZ2FsbGVyeS9pbWFnZS1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLGtGQUFBO0FBQ0EsOEZBQUE7QUFDQSxzRkFBQTtBQUNBLDJFQUFBO0FBQ0EsNEVBQUE7QUFFUjtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7QUNBSjtBREdBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtVQUFBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNBSjtBRElBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNETjtFREdFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7WUFBQSxxQkFBQTtFQ0ROO0FBQ0Y7QURoQkE7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7WUFBQSxtQkFBQTtFQ0ROO0VER0U7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtZQUFBLHFCQUFBO0VDRE47QUFDRjtBRElBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNGTjtFRElFO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7WUFBQSxxQkFBQTtFQ0ZOO0FBQ0Y7QURmQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0VDRk47RURJRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDZCQUFBO1lBQUEscUJBQUE7RUNGTjtBQUNGO0FES0E7RUFDSTtJQUNJLFVBQUE7RUNITjtFREtFO0lBQ0ksVUFBQTtFQ0hOO0FBQ0Y7QURIQTtFQUNJO0lBQ0ksVUFBQTtFQ0hOO0VES0U7SUFDSSxVQUFBO0VDSE47QUFDRjtBRE1BO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNKTjtFRE1FO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtFQ0pOO0FBQ0Y7QURiQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSwyQkFBQTtZQUFBLG1CQUFBO0VDSk47RURNRTtJQUNJLGVBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDhCQUFBO1lBQUEsc0JBQUE7RUNKTjtBQUNGO0FET0E7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsMkJBQUE7WUFBQSxtQkFBQTtFQ0xOO0VET0U7SUFDSSxlQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSw4QkFBQTtZQUFBLHNCQUFBO0VDTE47QUFDRjtBRFpBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtJQUNBLDJCQUFBO1lBQUEsbUJBQUE7RUNMTjtFRE9FO0lBQ0ksZUFBQTtJQUNBLFVBQUE7SUFDQSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsOEJBQUE7WUFBQSxzQkFBQTtFQ0xOO0FBQ0Y7QURVQTtFQUNJLHFCQUFBO0FDUko7QURZQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDVEo7QURZQTtFQUNJLDhEQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ1RKO0FEWUE7RUFDSSx3Q0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7RUFJQSxvREFBQTtBQ1RKO0FEWUE7RUFDSTtJQUNJLHdCQUFBO0VDVE47RURXRTtJQUNJLGtDQUFBO0VDVE47QUFDRjtBRFlBO0VBQ0k7SUFDSSx3QkFBQTtFQ1ZOO0VEWUU7SUFDSSxrQ0FBQTtFQ1ZOO0FBQ0Y7QURhQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNDQUFBO0FDWEoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvZ2FsbGVyeS1wYWdlL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNlZGFydmlsbGUrQ3Vyc2l2ZXxOaWNvbm5lJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDo3MDAmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbm90b24mZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVRla286NTAwJmRpc3BsYXk9c3dhcCcpO1xuXG4ub3VyR2FsbGVyeXtcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmFic29sdXRle1xuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcbn1cblxuLnRleHR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBtYXJnaW4tdG9wOiAxMnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCc7XG59XG5cbiNmcm9udCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTUwcHg7XG4gICAgbGVmdDogMjU1cHg7XG59XG5cbiNyaWdodCB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogNzUwcHg7XG4gICAgYW5pbWF0aW9uOiByaWdodCAxcyBlYXNlO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XG59XG5cbiNsZWZ0IHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAyNTBweDtcbiAgICBhbmltYXRpb246IGxlZnQgMXMgZWFzZTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjgpO1xufVxuXG4jcmlnaHQxIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAxMDAwcHg7XG4gICAgYW5pbWF0aW9uOiByaWdodDEgMXMgMXMsIG9wIDFzO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xufVxuXG4jbGVmdDEge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDBweDtcbiAgICBhbmltYXRpb246IGxlZnQxIDFzIDFzIGVhc2UsIG9wIDFzO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xufVxuXG4vLyBrZXlmcmFtZXNcbkBrZXlmcmFtZXMgbGVmdCB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBsZWZ0OiA1MDBweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBsZWZ0OiAyNTBweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC44KTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgcmlnaHQge1xuICAgIDAlIHtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbGVmdDogNTAwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbGVmdDogNzUwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguOCk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIG9wIHtcbiAgICAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBsZWZ0MSB7XG4gICAgMCUge1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBsZWZ0OiA1MDBweDtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNzUpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyByaWdodDEge1xuICAgIDAlIHtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbGVmdDogNTAwcHg7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbGVmdDogMTAwMHB4O1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjc1KTtcbiAgICB9XG59XG5cblxuLy9iYW5uZXJcbmltZ3tcbiAgICBwYWRkaW5nLXJpZ2h0OiAtMzByZW07XG59XG5cblxuLmNvbnRhaW5lci1mbHVpZHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuI2Jhbm5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgcmdiKDAsIDAsIDApIDAlLCByZ2IoMCwgMCwgMCkgODclKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA5NTBweDtcbn1cblxuI2Nsb3VkLXNjcm9sbCB7XG4gICAgYmFja2dyb3VuZDogdXJsKHNyYy9hc3NldHMvaW1hZ2VzL21pcnJvcmVkLnBuZykgcmVwZWF0LXg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiA5MDAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgICAtbW96LWFuaW1hdGlvbjogOTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgICAtby1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW1zLWFuaW1hdGlvbjogOTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IDI1MDAwMDBzIGJhY2tncm91bmRTY3JvbGwgaW5maW5pdGUgbGluZWFyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja2dyb3VuZFNjcm9sbCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTk5OTk5OTlweCAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kU2Nyb2xsIHtcbiAgICBmcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05OTk5OTk5OXB4IDA7XG4gICAgfVxufVxuXG4jcHJvZFRpdGxlIGgxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogcmdiKDIyOCwgMjI1LCAyMjUpO1xuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgdGV4dC1zaGFkb3c6IDJweCA1cHggIzQyNDI0MjtcbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICBcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DZWRhcnZpbGxlK0N1cnNpdmV8Tmljb25uZSZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1EYW5jaW5nK1NjcmlwdDo3MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TW9ub3RvbiZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjUwMCZkaXNwbGF5PXN3YXBcIik7XG4ub3VyR2FsbGVyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbn1cblxuLmFic29sdXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xufVxuXG4udGV4dCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDEycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIjtcbn1cblxuI2Zyb250IHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDI1NXB4O1xufVxuXG4jcmlnaHQge1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogNzUwcHg7XG4gIGFuaW1hdGlvbjogcmlnaHQgMXMgZWFzZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xufVxuXG4jbGVmdCB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAyNTBweDtcbiAgYW5pbWF0aW9uOiBsZWZ0IDFzIGVhc2U7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn1cblxuI3JpZ2h0MSB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICBsZWZ0OiAxMDAwcHg7XG4gIGFuaW1hdGlvbjogcmlnaHQxIDFzIDFzLCBvcCAxcztcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbn1cblxuI2xlZnQxIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgYW5pbWF0aW9uOiBsZWZ0MSAxcyAxcyBlYXNlLCBvcCAxcztcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbn1cblxuQGtleWZyYW1lcyBsZWZ0IHtcbiAgMCUge1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogNTAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDI1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpZ2h0IHtcbiAgMCUge1xuICAgIHRvcDogMjAwcHg7XG4gICAgbGVmdDogNTAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDc1MHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIG9wIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuQGtleWZyYW1lcyBsZWZ0MSB7XG4gIDAlIHtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDUwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpZ2h0MSB7XG4gIDAlIHtcbiAgICB0b3A6IDIwMHB4O1xuICAgIGxlZnQ6IDUwMHB4O1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDI1MHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMDBweDtcbiAgICBsZWZ0OiAxMDAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICB9XG59XG5pbWcge1xuICBwYWRkaW5nLXJpZ2h0OiAtMzByZW07XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4jYmFubmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgYmxhY2sgMCUsIGJsYWNrIDg3JSk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTUwcHg7XG59XG5cbiNjbG91ZC1zY3JvbGwge1xuICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbWlycm9yZWQucG5nKSByZXBlYXQteDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiA5MDAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgLW1vei1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gIC1vLWFuaW1hdGlvbjogOTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgLW1zLWFuaW1hdGlvbjogOTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbiAgYW5pbWF0aW9uOiAyNTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tncm91bmRTY3JvbGwge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05OTk5OTk5OXB4IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja2dyb3VuZFNjcm9sbCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk5OTk5OTk5cHggMDtcbiAgfVxufVxuI3Byb2RUaXRsZSBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNlNGUxZTE7XG4gIG1hcmdpbi10b3A6IDE1cmVtO1xuICBmb250LXNpemU6IDEwcmVtO1xuICB0ZXh0LXNoYWRvdzogMnB4IDVweCAjNDI0MjQyO1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ImageGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryComponent", function() { return ImageGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageGalleryComponent = /** @class */ (function () {
    function ImageGalleryComponent() {
    }
    ImageGalleryComponent.prototype.ngOnInit = function () {
    };
    ImageGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-gallery',
            template: __webpack_require__(/*! raw-loader!./image-gallery.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.html"),
            styles: [__webpack_require__(/*! ./image-gallery.component.scss */ "./src/app/features/dashboard/gallery-page/image-gallery/image-gallery.component.scss")]
        })
    ], ImageGalleryComponent);
    return ImageGalleryComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/homepage/homepage.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/features/dashboard/homepage/homepage.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Cedarville+Cursive|Niconne&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Monoton&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Teko:500&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Nunito+Sans|Roboto:300&display=swap\");\nbody {\n  overflow-x: hidden;\n  font-size: 16px;\n}\n.showcase-left {\n  padding-top: 4rem;\n}\n.showcase-right img {\n  height: 45rem;\n}\n.showcase-right {\n  margin-top: 80px;\n}\np.text-center {\n  font-weight: 300px;\n  font-size: 20px;\n}\n.showcase-right p {\n  margin-left: 50px;\n}\n#showcase h1 {\n  font-size: 40px;\n  font-family: \"Kaushan Script\", cursive;\n}\nh4,\nh1,\nh2 {\n  font-family: \"Kaushan Script\", cursive;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.winefacts {\n  border: 1px solid black;\n  padding: 1rem;\n  color: darkred;\n}\n.facts li {\n  margin-top: 5px;\n  font-family: \"Dancing Script\", cursive;\n  padding-left: 4rem;\n  font-size: 1rem;\n  list-style: none;\n}\n.tag {\n  text-transform: uppercase;\n  color: white;\n  font-size: 7rem;\n  margin-top: 10rem;\n  font-family: \"Teko\", sans-serif;\n}\n.purchase {\n  color: black;\n  font-size: 10rem;\n  text-shadow: 1px 1px 2px black, 0 0 25px #dbdbdb, 0 0 5px white;\n}\n.purchase2 {\n  color: black;\n  font-size: 6rem;\n  text-shadow: 1px 1px 2px #470000, 0 0 25px #dbdbdb, 0 0 5px white;\n}\n/*\n * Cover\n */\n.cover {\n  padding: 0 1.5rem;\n}\n.cover .btn-lg {\n  padding: 0.75rem 1.25rem;\n  font-weight: 700;\n}\n/*-- Landing Page--*/\n.landing {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: table;\n  background: #E9ECEF;\n  z-index: -1;\n}\n.home-wrap {\n  clip: rect(0, auto, auto, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.home-inner {\n  position: fixed;\n  display: table;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  will-change: transform;\n  background-image: url('w12.jpg');\n  -webkit-animation: slide 50s infinite;\n          animation: slide 50s infinite;\n}\n.home-inner h1 {\n  color: white;\n  font-family: \"Kaushan Script\", cursive;\n  letter-spacing: 2px;\n}\n.home-inner p {\n  color: #706c6c;\n}\n#lead1 {\n  margin-top: 15rem;\n  padding-right: 10rem;\n}\n.lead2 {\n  margin-top: 30rem;\n  padding-left: 10rem;\n  padding-right: 2rem;\n}\n#testimonial {\n  background: white;\n  background: -webkit-gradient(linear, left bottom, left top, from(white), color-stop(15%, #d77777), color-stop(30%, #dd2020), color-stop(50%, #cf0808), color-stop(70%, #dd2020), color-stop(85%, #d77777), to(white));\n  background: linear-gradient(0deg, white 0%, #d77777 15%, #dd2020 30%, #cf0808 50%, #dd2020 70%, #d77777 85%, white 100%);\n  padding: 50px 0 30px 0;\n  text-align: center;\n  margin-top: 40px;\n}\n#testimonial2 {\n  background: #464545;\n  padding: 50px 0 30px 0;\n  text-align: center;\n  margin-top: 40px;\n  color: white;\n}\n#testimonial2 img {\n  left: 0;\n}\n#testimonial p {\n  font-size: 65px;\n  color: white;\n  /*     font-family: 'Cedarville Cursive', cursive; */\n  /*    font-family: 'Niconne', cursive; */\n  font-family: \"Dancing Script\", cursive;\n  letter-spacing: 5px;\n}\n#testimonial p.customer {\n  font-size: 20px;\n  color: #626360;\n}\n#info1 .info-right {\n  margin-top: 90px;\n  text-align: justify;\n}\n#info1 .info-left {\n  margin-top: 90px;\n}\n#info1 .info-left img {\n  height: 20rem;\n}\n#info2 {\n  margin-top: 100px;\n  padding-bottom: 50px;\n}\n#contact img {\n  margin-top: 50px;\n  width: 100%;\n}\n.btnLearn {\n  background-color: transparent;\n  color: white;\n  border: 0;\n  font-size: 1.2em;\n  border-radius: 25px Solid White;\n}\n.btnLearn:hover {\n  background-color: white;\n  color: black;\n}\n.btnLearn2 {\n  background-color: white;\n  border-radius: 1px solid black;\n  color: black;\n}\np {\n  text-align: justify;\n}\n.responsive {\n  width: 100%;\n  max-width: 700px;\n  height: auto;\n}\n#firstDiv {\n  width: 1600px;\n  height: 500px;\n  position: absolute;\n  z-index: 1;\n  background: #380000;\n}\n#secondDiv {\n  width: 200px;\n  height: 200px;\n  margin: 14px;\n  position: absolute;\n  background: blue;\n}\n.landing2 {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  display: table;\n  background: #E9ECEF;\n  z-index: -1;\n}\n.home-wrap2 {\n  clip: rect(0, auto, auto, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.home-inner2 {\n  position: fixed;\n  display: table;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-position: center center;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  will-change: transform;\n  color: black;\n  background-color: black;\n}\n#more {\n  display: none;\n}\n#showcase0 {\n  background-image: url('background-blur-blurred-1547.jpg');\n}\n.image img#bigPic {\n  /* The image used */\n  background-image: url('w7.jpg');\n  padding: 0;\n  width: 1583px;\n  background-size: cover;\n}\n.link #links h1 {\n  position: relative;\n  color: white;\n  margin-top: 50px;\n  margin-left: 0;\n  margin-right: 10px;\n  cursor: pointer;\n  text-align: center;\n  padding-top: 30px;\n}\np {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 18px;\n  font-weight: 600;\n  color: #666565;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2hvbWVwYWdlL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxob21lcGFnZVxcaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNBLDhGQUFBO0FBQ0Esc0ZBQUE7QUFDQSwyRUFBQTtBQUNBLDRFQUFBO0FBQ0EsMEZBQUE7QUFLUjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUE7RUFDSSxpQkFBQTtBQ0hKO0FETUE7RUFDSSxhQUFBO0FDSEo7QURNQTtFQUNJLGdCQUFBO0FDSEo7QURNQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0hKO0FETUE7RUFDSSxpQkFBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7QUNISjtBRE1BOzs7RUFHSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ0hKO0FETUE7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hKO0FET0E7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrREFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlFQUFBO0FDSko7QURRQTs7RUFBQTtBQUlBO0VBQ0ksaUJBQUE7QUNOSjtBRFNBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtBQ05KO0FEVUEsb0JBQUE7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUko7QURXQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUko7QURXQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNSSjtBRFdBO0VBQ0ksWUFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFdBO0VBQ0ksY0FBQTtBQ1JKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDUko7QURXQTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxpQkFBQTtFQUNBLHFOQUFBO0VBQUEsd0hBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNSSjtBRFdBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDUko7QURXQTtFQUNJLE9BQUE7QUNSSjtBRFdBO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxvREFBQTtFQUNBLHdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FDUko7QURXQTtFQUNJLGdCQUFBO0FDUko7QURXQTtFQUNJLGFBQUE7QUNSSjtBRFdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ1JKO0FEV0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7QUNSSjtBRFdBO0VBQ0ksNkJBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNSSjtBRFdBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0FDUko7QURXQTtFQUNJLHVCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FDUko7QURXQTtFQUNJLG1CQUFBO0FDUko7QURXQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNSSjtBRFdBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEV0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDUko7QURXQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDUko7QURXQTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDUko7QURZQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNUSjtBRFlBO0VBQ0ksYUFBQTtBQ1RKO0FEWUE7RUFDSSx5REFBQTtBQ1RKO0FEWUE7RUFDSSxtQkFBQTtFQUNBLCtCQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFLQSxzQkFBQTtBQ1hKO0FEY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWEo7QURjQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FuVU87QUN3VFgiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1DZWRhcnZpbGxlK0N1cnNpdmV8Tmljb25uZSZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RGFuY2luZytTY3JpcHQ6NzAwJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Nb25vdG9uJmRpc3BsYXk9c3dhcCcpO1xuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UZWtvOjUwMCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnN8Um9ib3RvOjMwMCZkaXNwbGF5PXN3YXAnKTtcbiRkYXJrR3JheTogcmdiKDEwMixcbjEwMSxcbjEwMSk7XG4vL1N0YXJ0IG9mIHRoZSBIb21lcGFnZVxuYm9keSB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnNob3djYXNlLWxlZnQge1xuICAgIHBhZGRpbmctdG9wOiA0cmVtO1xufVxuXG4uc2hvd2Nhc2UtcmlnaHQgaW1nIHtcbiAgICBoZWlnaHQ6IDQ1cmVtO1xufVxuXG4uc2hvd2Nhc2UtcmlnaHQge1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbnAudGV4dC1jZW50ZXIge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zaG93Y2FzZS1yaWdodCBwIHtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbn1cblxuI3Nob3djYXNlIGgxIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG59XG5cbmg0LFxuaDEsXG5oMiB7XG4gICAgZm9udC1mYW1pbHk6ICdLYXVzaGFuIFNjcmlwdCcsIGN1cnNpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi53aW5lZmFjdHMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6IGRhcmtyZWQ7XG59XG5cbi5mYWN0cyBsaSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGZvbnQtZmFtaWx5OiAnRGFuY2luZyBTY3JpcHQnLCBjdXJzaXZlO1xuICAgIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLy9mb3IgbGFzdC1wYWcgdGFnbGluZVxuLnRhZyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiA3cmVtO1xuICAgIG1hcmdpbi10b3A6IDEwcmVtO1xuICAgIGZvbnQtZmFtaWx5OiAnVGVrbycsIHNhbnMtc2VyaWY7XG59XG5cbi5wdXJjaGFzZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMTByZW07XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCByZ2IoMjE5LCAyMTksIDIxOSksIDAgMCA1cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4ucHVyY2hhc2UyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2IoNzEsIDAsIDApLCAwIDAgMjVweCByZ2IoMjE5LCAyMTksIDIxOSksIDAgMCA1cHggcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG5cbi8qXG4gKiBDb3ZlclxuICovXG5cbi5jb3ZlciB7XG4gICAgcGFkZGluZzogMCAxLjVyZW07XG59XG5cbi5jb3ZlciAuYnRuLWxnIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG5cbi8qLS0gTGFuZGluZyBQYWdlLS0qL1xuXG4ubGFuZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYmFja2dyb3VuZDogI0U5RUNFRjtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmhvbWUtd3JhcCB7XG4gICAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaG9tZS1pbm5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3cxMi5qcGcnKTtcbiAgICBhbmltYXRpb246IHNsaWRlIDUwcyBpbmZpbml0ZTtcbn1cblxuLmhvbWUtaW5uZXIgaDEge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uaG9tZS1pbm5lciBwIHtcbiAgICBjb2xvcjogcmdiKDExMiwgMTA4LCAxMDgpO1xufVxuXG4jbGVhZDEge1xuICAgIG1hcmdpbi10b3A6IDE1cmVtO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcmVtO1xufVxuXG4ubGVhZDIge1xuICAgIG1hcmdpbi10b3A6IDMwcmVtO1xuICAgIHBhZGRpbmctbGVmdDogMTByZW07XG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcbn1cblxuI3Rlc3RpbW9uaWFsIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsIHJnYmEoMjE1LCAxMTksIDExOSwgMSkgMTUlLCByZ2JhKDIyMSwgMzIsIDMyLCAxKSAzMCUsIHJnYmEoMjA3LCA4LCA4LCAxKSA1MCUsIHJnYmEoMjIxLCAzMiwgMzIsIDEpIDcwJSwgcmdiYSgyMTUsIDExOSwgMTE5LCAxKSA4NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7XG4gICAgcGFkZGluZzogNTBweCAwIDMwcHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbn1cblxuI3Rlc3RpbW9uaWFsMiB7XG4gICAgYmFja2dyb3VuZDogIzQ2NDU0NTtcbiAgICBwYWRkaW5nOiA1MHB4IDAgMzBweCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3Rlc3RpbW9uaWFsMiBpbWcge1xuICAgIGxlZnQ6IDA7XG59XG5cbiN0ZXN0aW1vbmlhbCBwIHtcbiAgICBmb250LXNpemU6IDY1cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qICAgICBmb250LWZhbWlseTogJ0NlZGFydmlsbGUgQ3Vyc2l2ZScsIGN1cnNpdmU7ICovXG4gICAgLyogICAgZm9udC1mYW1pbHk6ICdOaWNvbm5lJywgY3Vyc2l2ZTsgKi9cbiAgICBmb250LWZhbWlseTogJ0RhbmNpbmcgU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4jdGVzdGltb25pYWwgcC5jdXN0b21lciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiByZ2IoOTgsIDk5LCA5Nik7XG59XG5cbiNpbmZvMSAuaW5mby1yaWdodCB7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4jaW5mbzEgLmluZm8tbGVmdCB7XG4gICAgbWFyZ2luLXRvcDogOTBweDtcbn1cblxuI2luZm8xIC5pbmZvLWxlZnQgaW1nIHtcbiAgICBoZWlnaHQ6IDIwcmVtO1xufVxuXG4jaW5mbzIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4jY29udGFjdCBpbWcge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5idG5MZWFybiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggU29saWQgV2hpdGU7XG59XG5cbi5idG5MZWFybjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuTGVhcm4yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnJlc3BvbnNpdmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jZmlyc3REaXYge1xuICAgIHdpZHRoOiAxNjAwcHg7XG4gICAgaGVpZ2h0OiA1MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTYsIDAsIDApO1xufVxuXG4jc2Vjb25kRGl2IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBtYXJnaW46IDE0cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6IGJsdWU7XG59XG5cbi5sYW5kaW5nMiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgYmFja2dyb3VuZDogI0U5RUNFRjtcbiAgICB6LWluZGV4OiAtMTtcbn1cblxuLmhvbWUtd3JhcDIge1xuICAgIGNsaXA6IHJlY3QoMCwgYXV0bywgYXV0bywgMCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB6LWluZGV4OiAtMTtcbn1cblxuLmhvbWUtaW5uZXIyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogdGFibGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbiNtb3JlIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2hvd2Nhc2UwIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZC1ibHVyLWJsdXJyZWQtMTU0Ny5qcGcnKTtcbn1cblxuLmltYWdlIGltZyNiaWdQaWMge1xuICAgIC8qIFRoZSBpbWFnZSB1c2VkICovXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3c3LmpwZycpO1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAtMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1ODNweDtcbiAgICAvLyBiYWNrZ3JvdW5kOiB1cmwoaW1hZ2VzL2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7IFxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubGluayAjbGlua3MgaDEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxucCB7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAkZGFya0dyYXk7XG59IiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2VkYXJ2aWxsZStDdXJzaXZlfE5pY29ubmUmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RGFuY2luZytTY3JpcHQ6NzAwJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbm90b24mZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGVrbzo1MDAmZGlzcGxheT1zd2FwXCIpO1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvK1NhbnN8Um9ib3RvOjMwMCZkaXNwbGF5PXN3YXBcIik7XG5ib2R5IHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5zaG93Y2FzZS1sZWZ0IHtcbiAgcGFkZGluZy10b3A6IDRyZW07XG59XG5cbi5zaG93Y2FzZS1yaWdodCBpbWcge1xuICBoZWlnaHQ6IDQ1cmVtO1xufVxuXG4uc2hvd2Nhc2UtcmlnaHQge1xuICBtYXJnaW4tdG9wOiA4MHB4O1xufVxuXG5wLnRleHQtY2VudGVyIHtcbiAgZm9udC13ZWlnaHQ6IDMwMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5zaG93Y2FzZS1yaWdodCBwIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG59XG5cbiNzaG93Y2FzZSBoMSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIiwgY3Vyc2l2ZTtcbn1cblxuaDQsXG5oMSxcbmgyIHtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ud2luZWZhY3RzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiBkYXJrcmVkO1xufVxuXG4uZmFjdHMgbGkge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmU7XG4gIHBhZGRpbmctbGVmdDogNHJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udGFnIHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDdyZW07XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xuICBmb250LWZhbWlseTogXCJUZWtvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5wdXJjaGFzZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxMHJlbTtcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IGJsYWNrLCAwIDAgMjVweCAjZGJkYmRiLCAwIDAgNXB4IHdoaXRlO1xufVxuXG4ucHVyY2hhc2UyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjNDcwMDAwLCAwIDAgMjVweCAjZGJkYmRiLCAwIDAgNXB4IHdoaXRlO1xufVxuXG4vKlxuICogQ292ZXJcbiAqL1xuLmNvdmVyIHtcbiAgcGFkZGluZzogMCAxLjVyZW07XG59XG5cbi5jb3ZlciAuYnRuLWxnIHtcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKi0tIExhbmRpbmcgUGFnZS0tKi9cbi5sYW5kaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGJhY2tncm91bmQ6ICNFOUVDRUY7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uaG9tZS13cmFwIHtcbiAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ob21lLWlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3cxMi5qcGdcIik7XG4gIGFuaW1hdGlvbjogc2xpZGUgNTBzIGluZmluaXRlO1xufVxuXG4uaG9tZS1pbm5lciBoMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiS2F1c2hhbiBTY3JpcHRcIiwgY3Vyc2l2ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmhvbWUtaW5uZXIgcCB7XG4gIGNvbG9yOiAjNzA2YzZjO1xufVxuXG4jbGVhZDEge1xuICBtYXJnaW4tdG9wOiAxNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMTByZW07XG59XG5cbi5sZWFkMiB7XG4gIG1hcmdpbi10b3A6IDMwcmVtO1xuICBwYWRkaW5nLWxlZnQ6IDEwcmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xufVxuXG4jdGVzdGltb25pYWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsIHdoaXRlIDAlLCAjZDc3Nzc3IDE1JSwgI2RkMjAyMCAzMCUsICNjZjA4MDggNTAlLCAjZGQyMDIwIDcwJSwgI2Q3Nzc3NyA4NSUsIHdoaXRlIDEwMCUpO1xuICBwYWRkaW5nOiA1MHB4IDAgMzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbiN0ZXN0aW1vbmlhbDIge1xuICBiYWNrZ3JvdW5kOiAjNDY0NTQ1O1xuICBwYWRkaW5nOiA1MHB4IDAgMzBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuI3Rlc3RpbW9uaWFsMiBpbWcge1xuICBsZWZ0OiAwO1xufVxuXG4jdGVzdGltb25pYWwgcCB7XG4gIGZvbnQtc2l6ZTogNjVweDtcbiAgY29sb3I6IHdoaXRlO1xuICAvKiAgICAgZm9udC1mYW1pbHk6ICdDZWRhcnZpbGxlIEN1cnNpdmUnLCBjdXJzaXZlOyAqL1xuICAvKiAgICBmb250LWZhbWlseTogJ05pY29ubmUnLCBjdXJzaXZlOyAqL1xuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuXG4jdGVzdGltb25pYWwgcC5jdXN0b21lciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICM2MjYzNjA7XG59XG5cbiNpbmZvMSAuaW5mby1yaWdodCB7XG4gIG1hcmdpbi10b3A6IDkwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbiNpbmZvMSAuaW5mby1sZWZ0IHtcbiAgbWFyZ2luLXRvcDogOTBweDtcbn1cblxuI2luZm8xIC5pbmZvLWxlZnQgaW1nIHtcbiAgaGVpZ2h0OiAyMHJlbTtcbn1cblxuI2luZm8yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4jY29udGFjdCBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJ0bkxlYXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4IFNvbGlkIFdoaXRlO1xufVxuXG4uYnRuTGVhcm46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uYnRuTGVhcm4yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDFweCBzb2xpZCBibGFjaztcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLnJlc3BvbnNpdmUge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4jZmlyc3REaXYge1xuICB3aWR0aDogMTYwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6ICMzODAwMDA7XG59XG5cbiNzZWNvbmREaXYge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMTRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4ubGFuZGluZzIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgYmFja2dyb3VuZDogI0U5RUNFRjtcbiAgei1pbmRleDogLTE7XG59XG5cbi5ob21lLXdyYXAyIHtcbiAgY2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5ob21lLWlubmVyMiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogdGFibGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuI21vcmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jc2hvd2Nhc2UwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWJsdXItYmx1cnJlZC0xNTQ3LmpwZ1wiKTtcbn1cblxuLmltYWdlIGltZyNiaWdQaWMge1xuICAvKiBUaGUgaW1hZ2UgdXNlZCAqL1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3c3LmpwZ1wiKTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDE1ODNweDtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5saW5rICNsaW5rcyBoMSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbnAge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzY2NjU2NTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/dashboard/homepage/homepage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/dashboard/homepage/homepage.component.ts ***!
  \*******************************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.year = 2019;
        this.count = 0;
    }
    // contents inside
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem('hasLoadedPrompt')) {
            localStorage.setItem('hasLoadedPrompt', '1');
            this.router.navigate(['/dashboard/prompt']);
        }
        this.auth.getUserState()
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
        // snackbar snippet
        setTimeout(function () {
            var x = document.getElementById('snackbar');
            x.className = 'show';
            setTimeout(function () { x.className = x.className.replace('show', ''); }, 3000);
            this.snackBarMessage = 'Welcome to Winecom!';
        }, 1000);
    };
    HomepageComponent.prototype.setClasses = function () {
        var myClasses = {
            over21: this.count === 1
        };
        return myClasses;
    };
    HomepageComponent.prototype.onClick = function () {
        this.count = 1;
    };
    HomepageComponent.ctorParameters = function () { return [
        { type: _users_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/features/dashboard/homepage/homepage.component.scss")]
        })
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/location/location.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/features/dashboard/location/location.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".location-section {\n  background: url(http://themexriver.com/digital-agency/assets/images/pattern-bg.jpg) no-repeat center;\n  background-size: cover;\n}\n\n.section-padding {\n  padding: 140px 0;\n}\n\n.location-section .location-wrapper .section-title h2 {\n  font-size: 40px;\n}\n\n.section-title h2 {\n  font-size: 42px;\n  font-weight: 700;\n  line-height: 55px;\n  color: #000000;\n  letter-spacing: -1.8px;\n  margin: 6px 0 20px;\n}\n\n.section-title p {\n  color: #6a7788;\n  margin-bottom: 34px;\n}\n\n.btn-default {\n  position: relative;\n  font-size: 18px;\n  background-color: #FFFFFF;\n  border: 2px solid #610000;\n  border-radius: 0;\n  padding: 8px 22px;\n  border-radius: 25px;\n  overflow: hidden;\n  z-index: 5;\n  background: -webkit-gradient(linear, left top, right top, from(#193775), to(#00abc9));\n  background: linear-gradient(left, #193775, #00abc9);\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.sub-header {\n  font-size: 22px;\n  color: #770000;\n}\n\n.border {\n  border-bottom: 1px solid #995353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2xvY2F0aW9uL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxsb2NhdGlvblxcbG9jYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9HQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLGdCQUFBO0FDRUo7O0FEQUE7RUFDSSxlQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDSUo7O0FERkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFLQSxxRkFBQTtFQUFBLG1EQUFBO0VBQ0EsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0Esd0JBQUE7RUFLQSxnQkFBQTtBQ01KOztBREpBO0VBQVksZUFBQTtFQUFnQixjQUFBO0FDUzVCOztBRFJBO0VBQ0ksZ0NBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9sb2NhdGlvbi9sb2NhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2NhdGlvbi1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoaHR0cDovL3RoZW1leHJpdmVyLmNvbS9kaWdpdGFsLWFnZW5jeS9hc3NldHMvaW1hZ2VzL3BhdHRlcm4tYmcuanBnKSBuby1yZXBlYXQgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4uc2VjdGlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAxNDBweCAwO1xufVxuLmxvY2F0aW9uLXNlY3Rpb24gLmxvY2F0aW9uLXdyYXBwZXIgLnNlY3Rpb24tdGl0bGUgaDIge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbn1cbi5zZWN0aW9uLXRpdGxlIGgyIHtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogNTVweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTEuOHB4O1xuICAgIG1hcmdpbjogNnB4IDAgMjBweDtcbn1cbi5zZWN0aW9uLXRpdGxlIHAge1xuICAgIGNvbG9yOiAjNmE3Nzg4O1xuICAgIG1hcmdpbi1ib3R0b206IDM0cHg7XG59XG4uYnRuLWRlZmF1bHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNjEwMDAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgcGFkZGluZzogOHB4IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHotaW5kZXg6IDU7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICMxOTM3NzUsICMwMGFiYzkpO1xuICAgIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KGxlZnQsICMxOTM3NzUsICMwMGFiYzkpO1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1raHRtbC10cmFuc2l0aW9uOiAwLjVzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgICAtbXMtdHJhbnNpdGlvbjogMC41cztcbiAgICAtby10cmFuc2l0aW9uOiAwLjVzO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG59XG4uc3ViLWhlYWRlcntmb250LXNpemU6MjJweDsgY29sb3I6cmdiKDExOSwgMCwgMCk7fVxuLmJvcmRlcntcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE1MywgODMsIDgzKTtcbn0iLCIubG9jYXRpb24tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6IHVybChodHRwOi8vdGhlbWV4cml2ZXIuY29tL2RpZ2l0YWwtYWdlbmN5L2Fzc2V0cy9pbWFnZXMvcGF0dGVybi1iZy5qcGcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zZWN0aW9uLXBhZGRpbmcge1xuICBwYWRkaW5nOiAxNDBweCAwO1xufVxuXG4ubG9jYXRpb24tc2VjdGlvbiAubG9jYXRpb24td3JhcHBlciAuc2VjdGlvbi10aXRsZSBoMiB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUgaDIge1xuICBmb250LXNpemU6IDQycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiA1NXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xLjhweDtcbiAgbWFyZ2luOiA2cHggMCAyMHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSBwIHtcbiAgY29sb3I6ICM2YTc3ODg7XG4gIG1hcmdpbi1ib3R0b206IDM0cHg7XG59XG5cbi5idG4tZGVmYXVsdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNjEwMDAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiA4cHggMjJweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogNTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsICMxOTM3NzUsICMwMGFiYzkpO1xuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQobGVmdCwgIzE5Mzc3NSwgIzAwYWJjOSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChsZWZ0LCAjMTkzNzc1LCAjMDBhYmM5KTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC41cztcbiAgLWtodG1sLXRyYW5zaXRpb246IDAuNXM7XG4gIC1tb3otdHJhbnNpdGlvbjogMC41cztcbiAgLW1zLXRyYW5zaXRpb246IDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IDAuNXM7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5zdWItaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzc3MDAwMDtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk1MzUzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/dashboard/location/location.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/features/dashboard/location/location.component.ts ***!
  \*******************************************************************/
/*! exports provided: LocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationComponent", function() { return LocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationComponent = /** @class */ (function () {
    function LocationComponent() {
    }
    LocationComponent.prototype.ngOnInit = function () {
    };
    LocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location',
            template: __webpack_require__(/*! raw-loader!./location.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/location/location.component.html"),
            styles: [__webpack_require__(/*! ./location.component.scss */ "./src/app/features/dashboard/location/location.component.scss")]
        })
    ], LocationComponent);
    return LocationComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Cedarville+Cursive|Niconne&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Bilbo+Swash+Caps&display=swap\");\nheader {\n  display: block;\n}\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.25);\n}\np {\n  color: white;\n  margin-top: 35px;\n  font-family: \"Bilbo Swash Caps\", cursive;\n  margin-left: -7em;\n  font-size: 1.5em;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n.header__container {\n  width: 100%;\n  min-width: 320px;\n  height: 115px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background: -webkit-gradient(linear, left top, left bottom, from(black), color-stop(50%, rgba(0, 0, 0, 0.99)), to(rgba(0, 0, 0, 0)));\n  background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.99) 50%, rgba(0, 0, 0, 0) 100%);\n}\n.header__row {\n  margin: 0 auto;\n  padding: 0 30px;\n  width: 100%;\n  max-width: 1260px;\n  height: 100%;\n  display: table;\n}\n* {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.25);\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n* {\n  position: relative;\n  outline: 0 !important;\n  z-index: 0;\n}\n@media (max-width: 1200px) {\n  .main-menu__container {\n    right: 30px;\n  }\n}\n.btn,\n.btn2 {\n  color: white;\n  margin-top: 20px;\n  font-family: \"Bilbo Swash Caps\", cursive;\n  margin-right: -10rem;\n  font-size: 1.5em;\n}\nimg {\n  position: absolute;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL25hdmlnYXRpb24tYmFyL25hdi1saW5rcy9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXGRhc2hib2FyZFxcbmF2aWdhdGlvbi1iYXJcXG5hdi1saW5rc1xcbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvbmF2aWdhdGlvbi1iYXIvbmF2LWxpbmtzL25hdi1saW5rcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNBLDhGQUFBO0FBQ0Esc0ZBQUE7QUFFQSxvRkFBQTtBQUNSO0VBQ0ksY0FBQTtBQ0FKO0FER0E7RUFDSSxnREFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBOzs7RUFLSSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0lBQUE7RUFBQSxnR0FBQTtBQ0FKO0FER0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQUo7QURHQTtFQUNJLGdEQUFBO0FDQUo7QURHQTs7O0VBS0ksc0JBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNBSjtBREdBO0VBQ0k7SUFDSSxXQUFBO0VDQU47QUFDRjtBREdBOztFQUVJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9uYXZpZ2F0aW9uLWJhci9uYXYtbGlua3MvbmF2LWxpbmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCZkaXNwbGF5PXN3YXAnKTtcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Q2VkYXJ2aWxsZStDdXJzaXZlfE5pY29ubmUmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OjcwMCZkaXNwbGF5PXN3YXAnKTtcbi8vIE5FVyBGT05UUyBcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9QmlsYm8rU3dhc2grQ2FwcyZkaXNwbGF5PXN3YXAnKTtcbmhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbioge1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxucCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgZm9udC1mYW1pbHk6ICdCaWxibyBTd2FzaCBDYXBzJywgY3Vyc2l2ZTtcbiAgICBtYXJnaW4tbGVmdDogLTdlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAzMjBweDtcbiAgICBoZWlnaHQ6IDExNXB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDEpIDAlLCByZ2JhKDAsIDAsIDAsIDAuOTkpIDUwJSwgcmdiYSgwLCAwLCAwLCAwKSAxMDAlKTtcbn1cblxuLmhlYWRlcl9fcm93IHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMjYwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4qIHtcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gICAgLm1haW4tbWVudV9fY29udGFpbmVyIHtcbiAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgfVxufVxuXG4uYnRuLFxuLmJ0bjIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQmlsYm8gU3dhc2ggQ2FwcycsIGN1cnNpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTByZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW1nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNlZGFydmlsbGUrQ3Vyc2l2ZXxOaWNvbm5lJmRpc3BsYXk9c3dhcFwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PURhbmNpbmcrU2NyaXB0OjcwMCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1CaWxibytTd2FzaCtDYXBzJmRpc3BsYXk9c3dhcFwiKTtcbmhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4qIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xufVxuXG5wIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBmb250LWZhbWlseTogXCJCaWxibyBTd2FzaCBDYXBzXCIsIGN1cnNpdmU7XG4gIG1hcmdpbi1sZWZ0OiAtN2VtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oZWFkZXJfX2NvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDExNXB4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgYmxhY2sgMCUsIHJnYmEoMCwgMCwgMCwgMC45OSkgNTAlLCByZ2JhKDAsIDAsIDAsIDApIDEwMCUpO1xufVxuXG4uaGVhZGVyX19yb3cge1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMjYwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbioge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5tYWluLW1lbnVfX2NvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDMwcHg7XG4gIH1cbn1cbi5idG4sXG4uYnRuMiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiQmlsYm8gU3dhc2ggQ2Fwc1wiLCBjdXJzaXZlO1xuICBtYXJnaW4tcmlnaHQ6IC0xMHJlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLinksComponent", function() { return NavLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_features_users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/users/auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavLinksComponent = /** @class */ (function () {
    function NavLinksComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    NavLinksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserState()
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    NavLinksComponent.prototype.login = function () {
        this.router.navigate(['/login']);
        window.scrollTo(0, 0);
    };
    NavLinksComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
        window.scrollTo(0, 0);
    };
    NavLinksComponent.prototype.goToHome = function () {
        this.router.navigate(['/home']);
        window.scrollTo(0, 0);
    };
    NavLinksComponent.ctorParameters = function () { return [
        { type: src_app_features_users_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-links',
            template: __webpack_require__(/*! raw-loader!./nav-links.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.html"),
            styles: [__webpack_require__(/*! ./nav-links.component.scss */ "./src/app/features/dashboard/navigation-bar/nav-links/nav-links.component.scss")]
        })
    ], NavLinksComponent);
    return NavLinksComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/navigation-bar/navigation-bar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/navigation-bar/navigation-bar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\na {\n  font-family: \"Helvetica\", sans-serif;\n  text-decoration: none;\n}\n\n.logo {\n  text-align: center;\n  margin-top: -1.3em;\n}\n\n.main-menu .logo {\n  text-align: center;\n  position: absolute;\n  color: #fff;\n}\n\n.main-menu {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  background: white;\n  left: 0;\n  /*     background-image: url('../../../../assets/images/blackred.jpg');\n  */\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.menu-item {\n  position: relative;\n  top: 25%;\n  width: 100%;\n  text-align: center;\n  margin-top: 30px;\n}\n\n.main-menu li a {\n  padding: 8px;\n  text-decoration: none;\n  font-size: 36px;\n  color: black;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  text-transform: uppercase;\n}\n\n.main-menu li a:hover,\n.overlay li a:focus {\n  color: #f1f1f1;\n}\n\n.main-menu .closebtn {\n  position: absolute;\n  top: 20px;\n  right: 45px;\n  font-size: 60px;\n  text-decoration: none;\n}\n\n@media screen and (max-height: 450px) {\n  .main-menu li a {\n    font-size: 20px;\n  }\n\n  .main-menu .closebtn {\n    font-size: 40px;\n    top: 15px;\n    right: 35px;\n  }\n}\n\n.nav-item a {\n  color: black;\n  font-size: 18px;\n  font-family: \"Livvic\", sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n\nli a:hover {\n  color: red !important;\n}\n\n.nav-item a:hover {\n  color: red !important;\n}\n\ndiv.dropdown-menu a.dropdown-item {\n  text-transform: capitalize !important;\n  color: black;\n  font-size: 20px;\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\ndiv.dropdown-menu {\n  background-color: transparent;\n  text-align: center;\n  border-style: none;\n  margin-left: 245px;\n}\n\n.menu-item {\n  margin-top: -40px;\n}\n\nul li {\n  list-style: none;\n  letter-spacing: 5px;\n}\n\n.nav-item #dropdown04 {\n  letter-spacing: 5px;\n}\n\n@-webkit-keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -100%, 0);\n    transform: translate3d(0, -100%, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.fadeInDown {\n  -webkit-animation-name: fadeInDown;\n  animation-name: fadeInDown;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL25hdmlnYXRpb24tYmFyL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxuYXZpZ2F0aW9uLWJhclxcbmF2aWdhdGlvbi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9uYXZpZ2F0aW9uLWJhci9uYXZpZ2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxvQ0FBQTtFQUNBLHFCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQTtHQUFBO0VBRUEsa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7O0VBRUksY0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VEQ0U7SUFDSSxlQUFBO0lBQ0EsU0FBQTtJQUNBLFdBQUE7RUNFTjtBQUNGOztBRENBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFFSSxxQkFBQTtBQ0FKOztBREdBO0VBRUkscUJBQUE7QUNESjs7QURJQTtFQUNJLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDREo7O0FESUE7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLFVBQUE7SUFDQSwyQ0FBQTtJQUNBLG1DQUFBO0VDRE47RURHRTtJQUNJLFVBQUE7SUFDQSx1Q0FBQTtJQUNBLCtCQUFBO0VDRE47QUFDRjs7QURUQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLDJDQUFBO0lBQ0EsbUNBQUE7RUNETjtFREdFO0lBQ0ksVUFBQTtJQUNBLHVDQUFBO0lBQ0EsK0JBQUE7RUNETjtBQUNGOztBRElBO0VBQ0ksa0NBQUE7RUFDQSwwQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL25hdmlnYXRpb24tYmFyL25hdmlnYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSxcbmEge1xuICAgIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogLTEuM2VtO1xufVxuXG4ubWFpbi1tZW51IC5sb2dvIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDA7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgLyogICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9ibGFja3JlZC5qcGcnKTtcbiAqL1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4ubWVudS1pdGVtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNSU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5tYWluLW1lbnUgbGkgYSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm1haW4tbWVudSBsaSBhOmhvdmVyLFxuLm92ZXJsYXkgbGkgYTpmb2N1cyB7XG4gICAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5tYWluLW1lbnUgLmNsb3NlYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiA0NXB4O1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAgIC5tYWluLW1lbnUgbGkgYSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweFxuICAgIH1cbiAgICAubWFpbi1tZW51IC5jbG9zZWJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgdG9wOiAxNXB4O1xuICAgICAgICByaWdodDogMzVweDtcbiAgICB9XG59XG5cbi5uYXYtaXRlbSBhIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTGl2dmljJywgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5saSBhOmhvdmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjZmZmZiwgJGFtb3VudDogMjApO1xuICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLm5hdi1pdGVtIGE6aG92ZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICNmZmZmLCAkYW1vdW50OiAyMCk7XG4gICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5kaXYuZHJvcGRvd24tbWVudSBhLmRyb3Bkb3duLWl0ZW0ge1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyZW07XG59XG5cbmRpdi5kcm9wZG93bi1tZW51IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAyNDVweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5uYXYtaXRlbSAjZHJvcGRvd24wNCB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICBmcm9tIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbn1cblxuLmZhZGVJbkRvd24ge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbkRvd247XG59IiwiYm9keSxcbmEge1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgc2Fucy1zZXJpZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogLTEuM2VtO1xufVxuXG4ubWFpbi1tZW51IC5sb2dvIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFpbi1tZW51IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBsZWZ0OiAwO1xuICAvKiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JsYWNrcmVkLmpwZycpO1xuICAqL1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5tZW51LWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjUlO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubWFpbi1tZW51IGxpIGEge1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWFpbi1tZW51IGxpIGE6aG92ZXIsXG4ub3ZlcmxheSBsaSBhOmZvY3VzIHtcbiAgY29sb3I6ICNmMWYxZjE7XG59XG5cbi5tYWluLW1lbnUgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA0NXB4O1xuICBmb250LXNpemU6IDYwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gIC5tYWluLW1lbnUgbGkgYSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG5cbiAgLm1haW4tbWVudSAuY2xvc2VidG4ge1xuICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB0b3A6IDE1cHg7XG4gICAgcmlnaHQ6IDM1cHg7XG4gIH1cbn1cbi5uYXYtaXRlbSBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxpdnZpY1wiLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmxpIGE6aG92ZXIge1xuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtaXRlbSBhOmhvdmVyIHtcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG5kaXYuZHJvcGRvd24tbWVudSBhLmRyb3Bkb3duLWl0ZW0ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cblxuZGl2LmRyb3Bkb3duLW1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAyNDVweDtcbn1cblxuLm1lbnUtaXRlbSB7XG4gIG1hcmdpbi10b3A6IC00MHB4O1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbi5uYXYtaXRlbSAjZHJvcGRvd24wNCB7XG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLmZhZGVJbkRvd24ge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/dashboard/navigation-bar/navigation-bar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/dashboard/navigation-bar/navigation-bar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NavigationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationBarComponent", function() { return NavigationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../users/auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavigationBarComponent = /** @class */ (function () {
    function NavigationBarComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        // parent component
        // child component to winery
        this.wineryNavChoice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goToGalleryPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goToContactPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.goToLocationPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NavigationBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserState()
            .subscribe(function (user) {
            _this.user = user;
            console.log(_this.user);
        });
    };
    NavigationBarComponent.prototype.login = function () {
        this.router.navigate(['/login']);
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.logout = function () {
        this.auth.logout();
        this.router.navigate(['/login']);
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.register = function () {
        this.router.navigate(['/registration']);
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.wineryPageChoice = function (a) {
        this.router.navigate(['/winery'], { fragment: a });
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.onGalleryClick = function () {
        this.goToGalleryPage.emit('gallerySelected');
        console.log('galleryTest');
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.onContactClick = function () {
        this.goToContactPage.emit('contactSelected');
        console.log('contactTest');
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.prototype.onLocationClick = function () {
        this.goToLocationPage.emit('locationSelected');
        console.log('locationTest');
        window.scrollTo(0, 0);
    };
    NavigationBarComponent.ctorParameters = function () { return [
        { type: _users_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavigationBarComponent.prototype, "wineryNavChoice", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavigationBarComponent.prototype, "goToGalleryPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavigationBarComponent.prototype, "goToContactPage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], NavigationBarComponent.prototype, "goToLocationPage", void 0);
    NavigationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation-bar',
            template: __webpack_require__(/*! raw-loader!./navigation-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/navigation-bar/navigation-bar.component.html"),
            styles: [__webpack_require__(/*! ./navigation-bar.component.scss */ "./src/app/features/dashboard/navigation-bar/navigation-bar.component.scss")]
        })
    ], NavigationBarComponent);
    return NavigationBarComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/prompt-message/prompt-message.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/features/dashboard/prompt-message/prompt-message.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Alex+Brush|Lora&display=swap\");\n.over21 {\n  opacity: 0.5;\n  background: #CCC;\n  display: none;\n}\n#mainContainer.container {\n  width: 600px;\n  height: 780px;\n  font-family: \"Lora\", serif;\n  text-align: center;\n  background-repeat: no-repeat;\n}\n.btn {\n  font-size: 20px;\n  font-family: \"Lora\", serif;\n}\ndiv.firstText {\n  padding-top: 150px;\n}\ndiv.textContainer {\n  background: transparent;\n}\ndiv.textContainer h1 {\n  margin: 5%;\n  font-weight: bold;\n  font-size: 70px;\n  width: 500px;\n  font-family: \"Lora\", serif;\n  font-family: \"Alex Brush\", cursive;\n  color: white;\n}\n.btn {\n  position: relative;\n  color: white;\n  width: 256px;\n  cursor: pointer;\n  height: 64px;\n  text-shadow: 1px 1px 0 #444;\n  line-height: 64px;\n  padding-bottom: 70px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  box-shadow: 3px 3px 5px 6px #ccc;\n}\n.btn span {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n}\n.btn::before,\n.btn::after {\n  content: \"\";\n  position: absolute;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n}\n.btn-one::before {\n  left: 4px;\n  z-index: 1;\n  opacity: 0;\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-transform: scale(0.1, 1);\n          transform: scale(0.1, 1);\n}\n.btn-one:hover::before {\n  opacity: 1;\n  -webkit-transform: scale(1, 1);\n          transform: scale(1, 1);\n}\n.btn-one::after {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.btn-one:hover::after {\n  -webkit-transform: scale(1, 0.1);\n          transform: scale(1, 0.1);\n  opacity: 0;\n}\n.row {\n  background: rgba(0, 0, 0, 0.5);\n  text-align: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n}\nspan {\n  font-weight: bold;\n}\n.background {\n  position: relative;\n}\n#bg {\n  position: fixed;\n  top: -50%;\n  left: -50%;\n  width: 200%;\n  height: 200%;\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3Byb21wdC1tZXNzYWdlL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFxwcm9tcHQtbWVzc2FnZVxccHJvbXB0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC9wcm9tcHQtbWVzc2FnZS9wcm9tcHQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxtRkFBQTtBQUVSO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0FKO0FER0E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7QUNBSjtBREdBO0VBRUksdUJBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUFBLG9CQUFBO0VBT0EsZ0NBQUE7QUNMSjtBRERJO0VBQ0ksNEJBQUE7RUFBQSxvQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNHUjtBRElBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQUEsb0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0RKO0FESUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNESjtBRElBO0VBQ0ksVUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUNESjtBRElBO0VBQ0ksNEJBQUE7RUFBQSxvQkFBQTtFQUNBLDBDQUFBO0FDREo7QURJQTtFQUNJLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxVQUFBO0FDREo7QURJQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0RKO0FESUE7RUFDSSxpQkFBQTtBQ0RKO0FESUE7RUFDSSxrQkFBQTtBQ0RKO0FESUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9kYXNoYm9hcmQvcHJvbXB0LW1lc3NhZ2UvcHJvbXB0LW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZXgrQnJ1c2h8TG9yYSZkaXNwbGF5PXN3YXAnKTtcbiRibHVlOiAjOTFDQ0MyO1xuLm92ZXIyMSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGJhY2tncm91bmQ6ICNDQ0M7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI21haW5Db250YWluZXIuY29udGFpbmVyIHtcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgaGVpZ2h0OiA3ODBweDtcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnTG9yYScsIHNlcmlmO1xufVxuXG5kaXYuZmlyc3RUZXh0IHtcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XG59XG5cbmRpdi50ZXh0Q29udGFpbmVyIHtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmRpdi50ZXh0Q29udGFpbmVyIGgxIHtcbiAgICBtYXJnaW46IDUlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgZm9udC1mYW1pbHk6ICdMb3JhJywgc2VyaWY7XG4gICAgZm9udC1mYW1pbHk6ICdBbGV4IEJydXNoJywgY3Vyc2l2ZTtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAyNTZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDAgIzQ0NDtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBzcGFuIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSwgMSk7XG4gICAgfVxuICAgIC1tb3otYm94LXNoYWRvdyA6IDNweCAzcHggNXB4IDZweCAjY2NjO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XG4gICAgYm94LXNoYWRvdyA6IDNweCAzcHggNXB4IDZweCAjY2NjO1xufVxuXG4uYnRuOjpiZWZvcmUsXG4uYnRuOjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uYnRuLW9uZTo6YmVmb3JlIHtcbiAgICBsZWZ0OiA0cHg7XG4gICAgei1pbmRleDogMTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSwgMSk7XG59XG5cbi5idG4tb25lOmhvdmVyOjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cblxuLmJ0bi1vbmU6OmFmdGVyIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG59XG5cbi5idG4tb25lOmhvdmVyOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLCAuMSk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnJvdyB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYmcge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IC01MCU7XG4gICAgbGVmdDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi8vZm9yIGltYWdlIGZ1bGxzaXplXG4vLyAgICNiZyBpbWcge1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4vLyAgICAgdG9wOiAwOyBcbi8vICAgICBsZWZ0OiAwOyBcbi8vICAgICByaWdodDogMDsgXG4vLyAgICAgYm90dG9tOiAwOyBcbi8vICAgICBtYXJnaW46IGF1dG87IFxuLy8gICAgIG1pbi13aWR0aDogNTAlO1xuLy8gICAgIG1pbi1oZWlnaHQ6IDUwJTtcbi8vICAgfSIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFsZXgrQnJ1c2h8TG9yYSZkaXNwbGF5PXN3YXBcIik7XG4ub3ZlcjIxIHtcbiAgb3BhY2l0eTogMC41O1xuICBiYWNrZ3JvdW5kOiAjQ0NDO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4jbWFpbkNvbnRhaW5lci5jb250YWluZXIge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNzgwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmJ0biB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTG9yYVwiLCBzZXJpZjtcbn1cblxuZGl2LmZpcnN0VGV4dCB7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbn1cblxuZGl2LnRleHRDb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuZGl2LnRleHRDb250YWluZXIgaDEge1xuICBtYXJnaW46IDUlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB3aWR0aDogNTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkxvcmFcIiwgc2VyaWY7XG4gIGZvbnQtZmFtaWx5OiBcIkFsZXggQnJ1c2hcIiwgY3Vyc2l2ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAyNTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDY0cHg7XG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDAgIzQ0NDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XG59XG4uYnRuIHNwYW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cblxuLmJ0bjo6YmVmb3JlLFxuLmJ0bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5idG4tb25lOjpiZWZvcmUge1xuICBsZWZ0OiA0cHg7XG4gIHotaW5kZXg6IDE7XG4gIG9wYWNpdHk6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjEsIDEpO1xufVxuXG4uYnRuLW9uZTpob3Zlcjo6YmVmb3JlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAxKTtcbn1cblxuLmJ0bi1vbmU6OmFmdGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmJ0bi1vbmU6aG92ZXI6OmFmdGVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAwLjEpO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucm93IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5zcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogLTUwJTtcbiAgd2lkdGg6IDIwMCU7XG4gIGhlaWdodDogMjAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/dashboard/prompt-message/prompt-message.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/features/dashboard/prompt-message/prompt-message.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PromptMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromptMessageComponent", function() { return PromptMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PromptMessageComponent = /** @class */ (function () {
    function PromptMessageComponent(router) {
        this.router = router;
        // tslint:disable-next-line: no-inferrable-types
        this.count = 0;
    }
    PromptMessageComponent.prototype.ngOnInit = function () {
    };
    PromptMessageComponent.prototype.setClasses = function () {
        var myClasses = {
            over21: this.count === 1
        };
        return myClasses;
    };
    // onClick() {
    //   this.count = 1;
    // }
    PromptMessageComponent.prototype.login = function () {
        this.router.navigate(['/users/login']);
    };
    PromptMessageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PromptMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prompt-message',
            template: __webpack_require__(/*! raw-loader!./prompt-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/prompt-message/prompt-message.component.html"),
            styles: [__webpack_require__(/*! ./prompt-message.component.scss */ "./src/app/features/dashboard/prompt-message/prompt-message.component.scss")]
        })
    ], PromptMessageComponent);
    return PromptMessageComponent;
}());



/***/ }),

/***/ "./src/app/features/dashboard/winery-page/winery-page.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/features/dashboard/winery-page/winery-page.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choices {\n  margin-top: 25px;\n}\n\nh5:hover.brands {\n  cursor: pointer;\n  background-color: #747474;\n  color: white;\n}\n\nh5.brands {\n  line-height: 50px;\n  text-align: center;\n}\n\napp-image-details.image-details {\n  top: -25px;\n}\n\napp-images.image-label {\n  top: 2px;\n}\n\n.sidebar-nav {\n  position: fixed;\n  top: 150px;\n  width: 200px;\n  padding: 0;\n  list-style: none;\n  background: transparent;\n  right: 0;\n}\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n  cursor: pointer;\n}\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #140303;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999;\n}\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: black;\n  background: none;\n}\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n}\n\ndiv#image-details {\n  margin-bottom: 15em;\n}\n\n/* setting links to active */\n\n.active {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3dpbmVyeS1wYWdlL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xcZGFzaGJvYXJkXFx3aW5lcnktcGFnZVxcd2luZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2Rhc2hib2FyZC93aW5lcnktcGFnZS93aW5lcnktcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FERUE7RUFDSSxRQUFBO0FDQ0o7O0FER0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUVBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFFBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxvQ0FBQTtBQ0RKOztBRElBOztFQUVJLHFCQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksZUFBQTtFQ0ROO0FBQ0Y7O0FES0E7RUFDSSxtQkFBQTtBQ0hKOztBRE9BLDRCQUFBOztBQUVBO0VBQ0ksWUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL3dpbmVyeS1wYWdlL3dpbmVyeS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob2ljZXMge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbmg1OmhvdmVyLmJyYW5kcyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3I6ICM3NDc0NzQsICRhbW91bnQ6IDApO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDUuYnJhbmRzIHtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmFwcC1pbWFnZS1kZXRhaWxzLmltYWdlLWRldGFpbHMge1xuICAgIHRvcDogLTI1cHg7XG59XG5cbmFwcC1pbWFnZXMuaW1hZ2UtbGFiZWwge1xuICAgIHRvcDogMnB4O1xufVxuXG4vL25hdmlnYXRpb24gc2lkZWJhcmQgZm9yIHdpbmVyeSBwYWdlXG4uc2lkZWJhci1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDE1MHB4O1xuICAgIDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uc2lkZWJhci1uYXYgbGkge1xuICAgIHRleHQtaW5kZW50OiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjOTk5OTk5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXItbmF2IGxpIGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogcmdiKDIwLCAzLCAzKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcbi5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCB7XG4gICAgaGVpZ2h0OiA2NXB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxuLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIGEge1xuICAgIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQgYTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5AbWVkaWEobWluLXdpZHRoOjc2OHB4KSB7XG4gICAgI3dyYXBwZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4vLyBkaXYgZm9yIHRhYmxlcyBwYWRkaW5nXG5kaXYjaW1hZ2UtZGV0YWlscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVlbTtcbn1cblxuXG4vKiBzZXR0aW5nIGxpbmtzIHRvIGFjdGl2ZSAqL1xuXG4uYWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59IiwiLmNob2ljZXMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG5oNTpob3Zlci5icmFuZHMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NDc0NzQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaDUuYnJhbmRzIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYXBwLWltYWdlLWRldGFpbHMuaW1hZ2UtZGV0YWlscyB7XG4gIHRvcDogLTI1cHg7XG59XG5cbmFwcC1pbWFnZXMuaW1hZ2UtbGFiZWwge1xuICB0b3A6IDJweDtcbn1cblxuLnNpZGViYXItbmF2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICByaWdodDogMDtcbn1cblxuLnNpZGViYXItbmF2IGxpIHtcbiAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjOTk5OTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzE0MDMwMztcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTphY3RpdmUsXG4uc2lkZWJhci1uYXYgbGkgYTpmb2N1cyB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQge1xuICBoZWlnaHQ6IDY1cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG5cbi5zaWRlYmFyLW5hdiA+IC5zaWRlYmFyLWJyYW5kIGEge1xuICBjb2xvcjogIzk5OTk5OTtcbn1cblxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYTpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICN3cmFwcGVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gIH1cbn1cbmRpdiNpbWFnZS1kZXRhaWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVlbTtcbn1cblxuLyogc2V0dGluZyBsaW5rcyB0byBhY3RpdmUgKi9cbi5hY3RpdmUge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/dashboard/winery-page/winery-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/features/dashboard/winery-page/winery-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: WineryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WineryPageComponent", function() { return WineryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var WineryPageComponent = /** @class */ (function () {
    function WineryPageComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        // child component
        this.brandsChoice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.route.fragment.subscribe(function (value) {
            _this.wineryChoice = value;
            console.log(value, 'wineryChoice');
        });
    }
    WineryPageComponent.prototype.ngOnInit = function () {
        // this.getValues()
    };
    // getValues(wineryDropDownChoice) {
    //   console.log('test');
    //   this.wineryChoice = wineryDropDownChoice;
    //   console.log(this.wineryChoice);
    // }
    WineryPageComponent.prototype.onClickCategory = function (a) {
        this.wineryChoice = a;
        console.log(this.wineryChoice);
    };
    WineryPageComponent.prototype.wineryPageChoice = function (a) {
        this.router.navigate(['/winery'], { fragment: a });
    };
    WineryPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], WineryPageComponent.prototype, "brandsChoice", void 0);
    WineryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-winery-page',
            template: __webpack_require__(/*! raw-loader!./winery-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/dashboard/winery-page/winery-page.component.html"),
            styles: [__webpack_require__(/*! ./winery-page.component.scss */ "./src/app/features/dashboard/winery-page/winery-page.component.scss")]
        })
    ], WineryPageComponent);
    return WineryPageComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/brands/brands.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/products/component/brands/brands.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\n@import url(\"https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap\");\nh1 {\n  font-family: \"Kaushan Script\", cursive;\n  text-align: center;\n}\n.container-fluid {\n  align-content: center;\n}\n.row.header {\n  padding-top: 70px;\n}\np#head {\n  text-align: left;\n  color: white;\n  margin-left: 10em;\n  font-size: 1.5em;\n}\n.container-fluid {\n  align-content: center;\n  padding-top: 50px;\n  height: auto;\n}\n.row.header {\n  text-align: left;\n  margin-top: 5em;\n}\n.image-wrapper {\n  height: 150px;\n}\nimg {\n  height: auto;\n  margin: 0;\n  padding: 0;\n}\n.row#img-row {\n  height: 150px;\n  overflow: hidden;\n}\n.card {\n  border: none;\n  -webkit-filter: blur(1.5px);\n          filter: blur(1.5px);\n  margin: -16px;\n}\n.card img {\n  cursor: pointer;\n}\n.card:hover {\n  -webkit-filter: blur(0);\n          filter: blur(0);\n}\np {\n  text-align: center;\n  letter-spacing: 0.1em;\n  font-weight: bold;\n}\n.container-fluid {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L2JyYW5kcy9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXHByb2R1Y3RzXFxjb21wb25lbnRcXGJyYW5kc1xcYnJhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxrRkFBQTtBQUNBLGtGQUFBO0FBR1I7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0FDREo7QURJQTtFQUNJLHFCQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0FDREo7QURHQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNBSjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7QUNESjtBRElBO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0RKO0FESUE7RUFDSSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7QUNESjtBRElBO0VBQ0ksZUFBQTtBQ0RKO0FESUE7RUFDSSx1QkFBQTtVQUFBLGVBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDREo7QURJQTtFQUNJLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvYnJhbmRzL2JyYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9S2F1c2hhbitTY3JpcHQmZGlzcGxheT1zd2FwJyk7XG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUthdXNoYW4rU2NyaXB0JmRpc3BsYXk9c3dhcCcpO1xuXG5cbmgxIHtcbiAgICBmb250LWZhbWlseTogJ0thdXNoYW4gU2NyaXB0JywgY3Vyc2l2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy5oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiA3MHB4O1xufVxucCNoZWFkIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTBlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vLyBpZiBpbWFnZSB0ZXh0LWFsaWduIGNlbnRlciBwYXJpbiBwYXJhIG1hZyBjZW50ZXIuIHNhYmkgbmkgR2xlbmVsIG5hIGd3YXBvIGF0IG1hdGFsaW5vXG4ucm93LmhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5pbWcge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnJvdyNpbWctcm93IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZmlsdGVyOiBibHVyKDEuNXB4KTtcbiAgICBtYXJnaW46IC0xNnB4O1xufVxuXG4uY2FyZCBpbWcge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICAgIGZpbHRlcjogYmx1cigwKTtcbn1cblxucCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXVzaGFuK1NjcmlwdCZkaXNwbGF5PXN3YXBcIik7XG5oMSB7XG4gIGZvbnQtZmFtaWx5OiBcIkthdXNoYW4gU2NyaXB0XCIsIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnJvdy5oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNzBweDtcbn1cblxucCNoZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tbGVmdDogMTBlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLmNvbnRhaW5lci1mbHVpZCB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJvdy5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiA1ZW07XG59XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5yb3cjaW1nLXJvdyB7XG4gIGhlaWdodDogMTUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiBub25lO1xuICBmaWx0ZXI6IGJsdXIoMS41cHgpO1xuICBtYXJnaW46IC0xNnB4O1xufVxuXG4uY2FyZCBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgZmlsdGVyOiBibHVyKDApO1xufVxuXG5wIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY29udGFpbmVyLWZsdWlkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/products/component/brands/brands.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/products/component/brands/brands.component.ts ***!
  \************************************************************************/
/*! exports provided: BrandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsComponent", function() { return BrandsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrandsComponent = /** @class */ (function () {
    function BrandsComponent() {
        // child component
        this.brandClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BrandsComponent.prototype.ngOnInit = function () {
    };
    BrandsComponent.prototype.onClick = function (a) {
        console.log(a);
        this.brandClick.emit(a);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BrandsComponent.prototype, "brandClick", void 0);
    BrandsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brands',
            template: __webpack_require__(/*! raw-loader!./brands.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/brands/brands.component.html"),
            styles: [__webpack_require__(/*! ./brands.component.scss */ "./src/app/features/products/component/brands/brands.component.scss")]
        })
    ], BrandsComponent);
    return BrandsComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/image-details/image-details.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/features/products/component/image-details/image-details.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "span#overlap {\n  color: transparent;\n}\n\n.tableHeader {\n  text-align: center;\n  padding-top: 8rem;\n  padding-bottom: 2rem;\n}\n\n.sidebar-nav {\n  position: fixed;\n  top: 22rem;\n  width: 200px;\n  padding: 0;\n  list-style: none;\n  background: transparent;\n  right: 0;\n}\n\n.sidebar-nav li {\n  text-indent: 20px;\n  line-height: 40px;\n}\n\n.sidebar-nav li a {\n  display: block;\n  text-decoration: none;\n  color: #999999;\n  cursor: pointer;\n}\n\n.sidebar-nav li a:hover {\n  text-decoration: none;\n  color: #140303;\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.sidebar-nav li a:active,\n.sidebar-nav li a:focus {\n  text-decoration: none;\n}\n\n.sidebar-nav > .sidebar-brand {\n  height: 65px;\n  font-size: 18px;\n  line-height: 60px;\n}\n\n.sidebar-nav > .sidebar-brand a {\n  color: #999999;\n}\n\n.sidebar-nav > .sidebar-brand a:hover {\n  color: black;\n  background: none;\n}\n\n@media (min-width: 768px) {\n  #wrapper {\n    padding-left: 0;\n  }\n}\n\ninput.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\ntextarea.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L2ltYWdlLWRldGFpbHMvQzpcXFVzZXJzXFxtamVzdVxcd2luZWNvbVxcd2luZWNvbXYxXFx3aW5lY29tdjIvc3JjXFxhcHBcXGZlYXR1cmVzXFxwcm9kdWN0c1xcY29tcG9uZW50XFxpbWFnZS1kZXRhaWxzXFxpbWFnZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvaW1hZ2UtZGV0YWlscy9pbWFnZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBRElBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDREo7O0FESUE7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0RKOztBRElBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUNESjs7QURJQTs7RUFFSSxxQkFBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RKOztBRElBO0VBQ0ksY0FBQTtBQ0RKOztBRElBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDREo7O0FESUE7RUFDSTtJQUNJLGVBQUE7RUNETjtBQUNGOztBRElBO0VBQ0kscUJBQUE7QUNGSjs7QURLQTtFQUNJLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvaW1hZ2UtZGV0YWlscy9pbWFnZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiNvdmVybGFwIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50YWJsZUhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA4cmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4vL25hdlxuLy9uYXZpZ2F0aW9uIHNpZGViYXIgZm9yIHdpbmVyeSBwYWdlXG4uc2lkZWJhci1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDIycmVtO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcmlnaHQ6IDA7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSB7XG4gICAgdGV4dC1pbmRlbnQ6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2lkZWJhci1uYXYgbGkgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiByZ2IoMjAsIDMsIDMpO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLnNpZGViYXItbmF2IGxpIGE6YWN0aXZlLFxuLnNpZGViYXItbmF2IGxpIGE6Zm9jdXMge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnNpZGViYXItbmF2Pi5zaWRlYmFyLWJyYW5kIHtcbiAgICBoZWlnaHQ6IDY1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuXG4uc2lkZWJhci1uYXY+LnNpZGViYXItYnJhbmQgYSB7XG4gICAgY29sb3I6ICM5OTk5OTk7XG59XG5cbi5zaWRlYmFyLW5hdj4uc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbkBtZWRpYShtaW4td2lkdGg6NzY4cHgpIHtcbiAgICAjd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG59XG5cbmlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn0iLCJzcGFuI292ZXJsYXAge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi50YWJsZUhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDhyZW07XG4gIHBhZGRpbmctYm90dG9tOiAycmVtO1xufVxuXG4uc2lkZWJhci1uYXYge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMjJyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHJpZ2h0OiAwO1xufVxuXG4uc2lkZWJhci1uYXYgbGkge1xuICB0ZXh0LWluZGVudDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM5OTk5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpZGViYXItbmF2IGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMTQwMzAzO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG5cbi5zaWRlYmFyLW5hdiBsaSBhOmFjdGl2ZSxcbi5zaWRlYmFyLW5hdiBsaSBhOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCB7XG4gIGhlaWdodDogNjVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cblxuLnNpZGViYXItbmF2ID4gLnNpZGViYXItYnJhbmQgYSB7XG4gIGNvbG9yOiAjOTk5OTk5O1xufVxuXG4uc2lkZWJhci1uYXYgPiAuc2lkZWJhci1icmFuZCBhOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgI3dyYXBwZXIge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxufVxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/products/component/image-details/image-details.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/features/products/component/image-details/image-details.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");





// import { ModalDirective } from 'ngx-bootstrap/modal';
var ImageDetailsComponent = /** @class */ (function () {
    // @ViewChild('yellowTailModal') public modal: ModalDirective;
    function ImageDetailsComponent(storage, service, fb) {
        this.storage = storage;
        this.service = service;
        this.fb = fb;
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.formTemplate = this.fb.group({
            $key: [null],
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            allergen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vintage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            alcohol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ImageDetailsComponent.prototype.onClickFilter = function (valueFromHTML) {
        return this.filter = valueFromHTML;
    };
    ImageDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = 'A Mano';
        // YellowTail
        this.service.getImageDetailList().subscribe(function (list) {
            _this.winesYellowTail = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // Hardys And Sons
        this.service.getImageHardys().subscribe(function (list) {
            _this.winesHardys = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // AMano
        this.service.getImageAMano().subscribe(function (list) {
            _this.winesAMano = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // Barefoot
        this.service.getImageBarefoot().subscribe(function (list) {
            _this.winesBarefoot = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // Concha Toro
        this.service.getImageConchaToro().subscribe(function (list) {
            _this.winesConchaToro = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // Gallo
        this.service.getImageGallo().subscribe(function (list) {
            _this.winesGallo = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
        // Others
        this.service.getImageOthers().subscribe(function (list) {
            _this.winesOthers = list.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ $key: item.key }, item.payload.val());
            });
        });
    };
    ImageDetailsComponent.prototype.onDelete = function ($key, downloadUrl) {
        if (confirm('Are you sure to delete this record ?')) {
            this.service.deleteWines($key);
            this.service.onImageDelete(downloadUrl);
        }
    };
    ImageDetailsComponent.prototype.populateForm = function (wines) {
        this.formTemplate.setValue(wines);
    };
    // caption: ['', Validators.required],
    //       category: ['', Validators.required],
    //       imageUrl: ['', Validators.required],
    //       description: ['', Validators.required],
    //       allergen: ['', Validators.required],
    //       vintage: ['', Validators.required],
    //       country: ['', Validators.required],
    //       region: ['', Validators.required],
    //       type: ['', Validators.required],
    //       alcohol: ['', Validators.required],
    ImageDetailsComponent.prototype.onSubmit = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_1 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_1.className = 'error';
            setTimeout(function () { x_1.className = x_1.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateYellow(this.formTemplate.value);
            document.getElementById('yellowTailModal').click();
        }
    };
    ImageDetailsComponent.prototype.onSubmitHardy = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_2 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_2.className = 'error';
            setTimeout(function () { x_2.className = x_2.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateHardy(this.formTemplate.value);
            document.getElementById('hardyModal').click();
        }
    };
    ImageDetailsComponent.prototype.onSubmitAMano = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_3 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_3.className = 'error';
            setTimeout(function () { x_3.className = x_3.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateAMano(this.formTemplate.value);
            document.getElementById('AManoModal').click();
        }
    };
    ImageDetailsComponent.prototype.onSubmitBarefoot = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_4 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_4.className = 'error';
            setTimeout(function () { x_4.className = x_4.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateBarefoot(this.formTemplate.value);
            document.getElementById('BarefootModal').click();
        }
    };
    ImageDetailsComponent.prototype.onSubmitConcha = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_5 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_5.className = 'error';
            setTimeout(function () { x_5.className = x_5.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateConcha(this.formTemplate.value);
            document.getElementById('ConchaModal').click();
        }
    };
    ImageDetailsComponent.prototype.onSubmitOthers = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '%') {
            var x_6 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_6.className = 'error';
            setTimeout(function () { x_6.className = x_6.className.replace('error', ''); }, 4000);
            console.log('snackbar test');
            // this.
        }
        else {
            this.service.updateOthers(this.formTemplate.value);
            document.getElementById('OthersModal').click();
        }
    };
    ImageDetailsComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
    ], ImageDetailsComponent.prototype, "form", void 0);
    ImageDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-image-details',
            template: __webpack_require__(/*! raw-loader!./image-details.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image-details/image-details.component.html"),
            styles: [__webpack_require__(/*! ./image-details.component.scss */ "./src/app/features/products/component/image-details/image-details.component.scss")]
        })
    ], ImageDetailsComponent);
    return ImageDetailsComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/image-list/image-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/features/products/component/image-list/image-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagebox {\n  background: transparent;\n  padding: 0px;\n  position: relative;\n  text-align: center;\n  width: 100%;\n  cursor: pointer;\n}\n\n.imagebox img {\n  opacity: 1;\n  -webkit-transition: 0.5s opacity;\n  transition: 0.5s opacity;\n  /** Added by ate Khamae, For fitting the image **/\n  -o-object-fit: contain;\n     object-fit: contain;\n  margin-right: 50px;\n  width: 350px;\n  height: 350px;\n}\n\n.imagebox .imagebox-desc {\n  background-color: rgba(0, 0, 0, 0.6);\n  bottom: 0px;\n  color: white;\n  font-size: 1.2em;\n  height: 20%;\n  left: 0px;\n  position: absolute;\n  -webkit-transition: 0.5s padding;\n  transition: 0.5s padding;\n  text-align: center;\n  padding: 10px 15px;\n  width: 100%;\n}\n\n.imagebox:hover img {\n  opacity: 0.7;\n}\n\n.imagebox:hover .imagebox-desc {\n  padding-bottom: 100px;\n}\n\nh5:hover.brands {\n  cursor: pointer;\n  background-color: #747474;\n  color: white;\n}\n\n#margins {\n  padding-top: 25px;\n}\n\ntd {\n  margin: 5px;\n  width: 350px;\n  height: 350px;\n}\n\nspan {\n  font-weight: 300;\n}\n\nspan > a {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L2ltYWdlLWxpc3QvQzpcXFVzZXJzXFxtamVzdVxcd2luZWNvbVxcd2luZWNvbXYxXFx3aW5lY29tdjIvc3JjXFxhcHBcXGZlYXR1cmVzXFxwcm9kdWN0c1xcY29tcG9uZW50XFxpbWFnZS1saXN0XFxpbWFnZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvaW1hZ2UtbGlzdC9pbWFnZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURHQTtFQUNJLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUFBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxpQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L2ltYWdlLWxpc3QvaW1hZ2UtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZWJveCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2Vib3ggaW1nIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IDAuNXMgb3BhY2l0eTtcbiAgICAvKiogQWRkZWQgYnkgYXRlIEtoYW1hZSwgRm9yIGZpdHRpbmcgdGhlIGltYWdlICoqL1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIFxufVxuXG4uaW1hZ2Vib3ggLmltYWdlYm94LWRlc2Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3R0b206IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBoZWlnaHQ6IDIwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRyYW5zaXRpb246IDAuNXMgcGFkZGluZztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Vib3g6aG92ZXIgaW1nIHtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5pbWFnZWJveDpob3ZlciAuaW1hZ2Vib3gtZGVzYyB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xufVxuXG5oNTpob3Zlci5icmFuZHMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yOiAjNzQ3NDc0LCAkYW1vdW50OiAwKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNtYXJnaW5zIHtcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcbn1cblxudGQge1xuICAgIG1hcmdpbjogNXB4O1xuICAgIHdpZHRoOiAzNTBweDtcbiAgICBoZWlnaHQ6IDM1MHB4XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbnNwYW4+YSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSIsIi5pbWFnZWJveCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaW1hZ2Vib3ggaW1nIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogMC41cyBvcGFjaXR5O1xuICAvKiogQWRkZWQgYnkgYXRlIEtoYW1hZSwgRm9yIGZpdHRpbmcgdGhlIGltYWdlICoqL1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbn1cblxuLmltYWdlYm94IC5pbWFnZWJveC1kZXNjIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBib3R0b206IDBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBoZWlnaHQ6IDIwJTtcbiAgbGVmdDogMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zaXRpb246IDAuNXMgcGFkZGluZztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW1hZ2Vib3g6aG92ZXIgaW1nIHtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4uaW1hZ2Vib3g6aG92ZXIgLmltYWdlYm94LWRlc2Mge1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG5cbmg1OmhvdmVyLmJyYW5kcyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc0NzQ3NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbWFyZ2lucyB7XG4gIHBhZGRpbmctdG9wOiAyNXB4O1xufVxuXG50ZCB7XG4gIG1hcmdpbjogNXB4O1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG59XG5cbnNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5zcGFuID4gYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/products/component/image-list/image-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/features/products/component/image-list/image-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: ImageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListComponent", function() { return ImageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/image.service */ "./src/app/shared/image.service.ts");



var ImageListComponent = /** @class */ (function () {
    function ImageListComponent(service) {
        this.service = service;
        this.imageClicked = true;
        this.imageClicked2 = true;
        this.imageClicked3 = true;
    }
    ImageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // AMANO DISPLAY
        this.service.imageAMano.snapshotChanges().subscribe(function (list) {
            _this.amanoList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowIndexArray = Array.from(Array(Math.ceil(_this.amanoList.length / 5)).keys());
        });
        // HARDY AND SONS DISPLAY
        this.service.imageHardysAndSons.snapshotChanges().subscribe(function (list) {
            _this.hardyList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowHardyArray = Array.from(Array(Math.ceil(_this.hardyList.length / 5)).keys());
        });
        // YELLOWTAIL DISPLAY
        this.service.imageYellowTail.snapshotChanges().subscribe(function (list) {
            _this.yellowList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowYellowArray = Array.from(Array(Math.ceil(_this.yellowList.length / 5)).keys());
        });
        // BAREFOOT DISPLAY
        this.service.imageBarefoot.snapshotChanges().subscribe(function (list) {
            _this.barefootList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowBarefootArray = Array.from(Array(Math.ceil(_this.barefootList.length / 5)).keys());
        });
        // CONCHA TORO DISPLAY
        this.service.imageConchaToro.snapshotChanges().subscribe(function (list) {
            _this.conchaList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowConchaArray = Array.from(Array(Math.ceil(_this.conchaList.length / 5)).keys());
        });
        // GALLO DISPLAY
        this.service.imageGallo.snapshotChanges().subscribe(function (list) {
            _this.galloList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowGalloArray = Array.from(Array(Math.ceil(_this.galloList.length / 5)).keys());
        });
        // OTHERS DISPLAY
        this.service.imageOthers.snapshotChanges().subscribe(function (list) {
            _this.othersList = list.map(function (item) {
                return item.payload.val();
            });
            _this.rowOthersArray = Array.from(Array(Math.ceil(_this.othersList.length / 5)).keys());
        });
    };
    // IMAGE RETRIEVAL ARRAY
    ImageListComponent.prototype.getData = function (get) {
        this.anyDetails = get;
    };
    ImageListComponent.prototype.receiveBrandName = function (a) {
        this.chosenBrand = a;
        console.log(this.chosenBrand + 'this is received from Parent Component');
    };
    ImageListComponent.prototype.clickFalse1 = function () {
        this.imageClicked = false;
        this.imageClicked2 = true;
        this.imageClicked3 = true;
    };
    ImageListComponent.prototype.clickFalse2 = function () {
        this.imageClicked = true;
        this.imageClicked2 = false;
        this.imageClicked3 = true;
    };
    ImageListComponent.prototype.clickFalse3 = function () {
        this.imageClicked = true;
        this.imageClicked2 = true;
        this.imageClicked3 = false;
    };
    ImageListComponent.prototype.getGalleryPageValue = function (a) {
        this.onGalleryPageClickValue = a;
        console.log('from gallery Page');
    };
    ImageListComponent.prototype.onClick = function (a) {
        console.log(a);
    };
    ImageListComponent.ctorParameters = function () { return [
        { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
    ]; };
    ImageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-list',
            template: __webpack_require__(/*! raw-loader!./image-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image-list/image-list.component.html"),
            styles: [__webpack_require__(/*! ./image-list.component.scss */ "./src/app/features/products/component/image-list/image-list.component.scss")]
        })
    ], ImageListComponent);
    return ImageListComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/image/image.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/features/products/component/image/image.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\ntextarea.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\nselect.ng-touched.ng-invalid {\n  border: 1px solid red;\n}\n\ninput,\ntextarea {\n  margin-bottom: 11px;\n}\n\na#goToProductList-a {\n  color: white;\n}\n\n.btn.btn-primary {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L2ltYWdlL0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xccHJvZHVjdHNcXGNvbXBvbmVudFxcaW1hZ2VcXGltYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvaW1hZ2UvaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0FDQ0o7O0FERUE7O0VBRUksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2R1Y3RzL2NvbXBvbmVudC9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG50ZXh0YXJlYS5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMXB4O1xufVxuXG5hI2dvVG9Qcm9kdWN0TGlzdC1hIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4uYnRuLXByaW1hcnkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iLCJpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG59XG5cbnRleHRhcmVhLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuc2VsZWN0Lm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG59XG5cbmEjZ29Ub1Byb2R1Y3RMaXN0LWEge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4uYnRuLXByaW1hcnkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/features/products/component/image/image.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/features/products/component/image/image.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ImageComponent = /** @class */ (function () {
    function ImageComponent(storage, service, fb, router) {
        this.storage = storage;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.selectedImage = null;
        this.formTransfer = this.formTemplate;
        this.givenForm = this.formTemplate;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.wineFormSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.formTemplate = this.fb.group({
            caption: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            category: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            hiddenImage: [''],
            imageUrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            allergen: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            vintage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            alcohol: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.resetform();
        this.defaultPic = true;
    };
    ImageComponent.prototype.showPreview = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) { return _this.imgSrc = e.target.result; };
            reader.readAsDataURL(event.target.files[0]);
            this.formTemplate.get('hiddenImage').patchValue(event.target.files[0]);
            this.defaultPic = false;
        }
        else {
            this.imgSrc = '/assets/images/transpwine.png';
            this.formTemplate.get('hiddenImage').patchValue(this.imgSrc);
            this.defaultPic = true;
        }
    };
    ImageComponent.prototype.onSubmit = function () {
        if (this.formTemplate.value.caption === '' ||
            this.formTemplate.value.category === '' ||
            this.formTemplate.value.hiddenImage === '' ||
            this.formTemplate.value.imageUrl === '' ||
            this.formTemplate.value.description === '' ||
            this.formTemplate.value.allergen === '' ||
            this.formTemplate.value.country === '' ||
            this.formTemplate.value.type === '' ||
            this.formTemplate.value.alcohol === '') {
            this.formTemplate.controls.caption.markAsTouched();
            this.formTemplate.controls.category.markAsTouched();
            this.formTemplate.controls.hiddenImage.markAsTouched();
            this.formTemplate.controls.imageUrl.markAsTouched();
            this.formTemplate.controls.description.markAsTouched();
            this.formTemplate.controls.allergen.markAsTouched();
            this.formTemplate.controls.country.markAsTouched();
            this.formTemplate.controls.type.markAsTouched();
            this.formTemplate.controls.alcohol.markAsTouched();
            var x_1 = document.getElementById('snackbar');
            this.snackbarMessage = 'Please complete all fields!';
            x_1.className = 'error';
            setTimeout(function () { x_1.className = x_1.className.replace('error', ''); }, 4000);
        }
        else {
            this.formSubmit.emit(this.formTemplate.value);
            this.wineFormSubmit.emit('hello world');
            this.resetform();
            this.defaultPic = true;
            // snackbar message kembas
            var x_2 = document.getElementById('snackbar');
            this.snackbarMessage = 'Wine Item Uploaded!';
            x_2.className = 'show';
            setTimeout(function () { x_2.className = x_2.className.replace('show', ''); }, 3000);
        }
    };
    Object.defineProperty(ImageComponent.prototype, "formControls", {
        // submitEmpty() {
        //   if (
        //   this.formTemplate.value.caption === '' ||
        //   this.formTemplate.value.category === '' ||
        //   this.formTemplate.value.hiddenImage === '' ||
        //   this.formTemplate.value.imageUrl === '' ||
        //   this.formTemplate.value.description === '' ||
        //   this.formTemplate.value.allergen === '' ||
        //   this.formTemplate.value.country === '' ||
        //   this.formTemplate.value.type === '' ||
        //   this.formTemplate.value.alcohol === ''
        //  ) {
        //   const x = document.getElementById('snackbar');
        //   this.snackbarMessage = 'Please complete all fields!';
        //   x.className = 'error';
        //   setTimeout(function() { x.className = x.className.replace('error', ''); }, 4000);
        //  }
        // }
        get: function () {
            // tslint:disable-next-line: no-string-literal
            return this.formTemplate['controls'];
        },
        enumerable: true,
        configurable: true
    });
    ImageComponent.prototype.toProductList = function () {
        this.router.navigate(['/winery'], { fragment: 'update' });
    };
    ImageComponent.prototype.resetform = function () {
        this.formTemplate.reset();
        this.formTemplate.setValue({
            caption: '',
            imageUrl: '',
            hiddenImage: '',
            category: '',
            description: '',
            allergen: '',
            vintage: '',
            country: '',
            region: '',
            type: '',
            alcohol: ''
        });
        this.imgSrc = '/assets/images/transpwine.png';
        this.selectedImage = null;
        this.isSubmitted = false;
    };
    ImageComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] },
        { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ImageComponent.prototype, "formSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
    ], ImageComponent.prototype, "wineFormSubmit", void 0);
    ImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-image',
            template: __webpack_require__(/*! raw-loader!./image.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/image/image.component.html"),
            styles: [__webpack_require__(/*! ./image.component.scss */ "./src/app/features/products/component/image/image.component.scss")]
        })
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/images/images.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/products/component/images/images.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2R1Y3RzL2NvbXBvbmVudC9pbWFnZXMvaW1hZ2VzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/products/component/images/images.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/products/component/images/images.component.ts ***!
  \************************************************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_image_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/image.service */ "./src/app/shared/image.service.ts");



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(service) {
        this.service = service;
    }
    ImagesComponent.prototype.ngOnInit = function () {
        this.service.getImageDetailList();
    };
    ImagesComponent.ctorParameters = function () { return [
        { type: _shared_image_service__WEBPACK_IMPORTED_MODULE_2__["ImageService"] }
    ]; };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! raw-loader!./images.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.scss */ "./src/app/features/products/component/images/images.component.scss")]
        })
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/app/features/products/component/single-product/single-product.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/features/products/component/single-product/single-product.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  position: relative;\n  text-align: center;\n  color: black;\n}\n\n#banner {\n  background-image: linear-gradient(120deg, white 0%, black 87%);\n  position: relative;\n  width: 100%;\n  height: 950px;\n}\n\n#cloud-scroll {\n  background: url('mirrored.png') repeat-x;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  position: absolute;\n  -webkit-animation: 900000s backgroundScroll infinite linear;\n  animation: 900000s backgroundScroll infinite linear;\n}\n\n@-webkit-keyframes backgroundScroll {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -99999999px 0;\n  }\n}\n\n@keyframes backgroundScroll {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: -99999999px 0;\n  }\n}\n\n#prodTitle h1 {\n  position: absolute;\n  color: black;\n  margin-top: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvcHJvZHVjdHMvY29tcG9uZW50L3NpbmdsZS1wcm9kdWN0L0M6XFxVc2Vyc1xcbWplc3VcXHdpbmVjb21cXHdpbmVjb212MVxcd2luZWNvbXYyL3NyY1xcYXBwXFxmZWF0dXJlc1xccHJvZHVjdHNcXGNvbXBvbmVudFxcc2luZ2xlLXByb2R1Y3RcXHNpbmdsZS1wcm9kdWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksOERBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSx3Q0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkRBQUE7RUFJQSxtREFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSx3QkFBQTtFQ0NOO0VEQ0U7SUFDSSxrQ0FBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLHdCQUFBO0VDQU47RURFRTtJQUNJLGtDQUFBO0VDQU47QUFDRjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9wcm9kdWN0cy9jb21wb25lbnQvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlke1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jYmFubmVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsIHJnYigwLCAwLCAwKSA4NyUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDk1MHB4O1xufVxuXG4jY2xvdWQtc2Nyb2xsIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWFnZXMvbWlycm9yZWQucG5nKSByZXBlYXQteDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW1vei1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW8tYW5pbWF0aW9uOiA5MDAwMDBzIGJhY2tncm91bmRTY3JvbGwgaW5maW5pdGUgbGluZWFyO1xuICAgIC1tcy1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiA5MDAwMDBzIGJhY2tncm91bmRTY3JvbGwgaW5maW5pdGUgbGluZWFyO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYmFja2dyb3VuZFNjcm9sbCB7XG4gICAgZnJvbSB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTk5OTk5OTlweCAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBiYWNrZ3JvdW5kU2Nyb2xsIHtcbiAgICBmcm9tIHtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05OTk5OTk5OXB4IDA7XG4gICAgfVxufVxuXG4jcHJvZFRpdGxlIGgxe1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbWFyZ2luLXRvcDogMTVyZW07XG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbiNiYW5uZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB3aGl0ZSAwJSwgYmxhY2sgODclKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA5NTBweDtcbn1cblxuI2Nsb3VkLXNjcm9sbCB7XG4gIGJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltYWdlcy9taXJyb3JlZC5wbmcpIHJlcGVhdC14O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgLXdlYmtpdC1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tb3otYW5pbWF0aW9uOiA5MDAwMDBzIGJhY2tncm91bmRTY3JvbGwgaW5maW5pdGUgbGluZWFyO1xuICAtby1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gIC1tcy1hbmltYXRpb246IDkwMDAwMHMgYmFja2dyb3VuZFNjcm9sbCBpbmZpbml0ZSBsaW5lYXI7XG4gIGFuaW1hdGlvbjogOTAwMDAwcyBiYWNrZ3JvdW5kU2Nyb2xsIGluZmluaXRlIGxpbmVhcjtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tncm91bmRTY3JvbGwge1xuICBmcm9tIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gIH1cbiAgdG8ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC05OTk5OTk5OXB4IDA7XG4gIH1cbn1cbkBrZXlmcmFtZXMgYmFja2dyb3VuZFNjcm9sbCB7XG4gIGZyb20ge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgfVxuICB0byB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTk5OTk5OTk5cHggMDtcbiAgfVxufVxuI3Byb2RUaXRsZSBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tdG9wOiAxNXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/features/products/component/single-product/single-product.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/products/component/single-product/single-product.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SingleProductComponent = /** @class */ (function () {
    function SingleProductComponent() {
    }
    SingleProductComponent.prototype.ngOnInit = function () {
    };
    SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-single-product',
            template: __webpack_require__(/*! raw-loader!./single-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/component/single-product/single-product.component.html"),
            styles: [__webpack_require__(/*! ./single-product.component.scss */ "./src/app/features/products/component/single-product/single-product.component.scss")]
        })
    ], SingleProductComponent);
    return SingleProductComponent;
}());



/***/ }),

/***/ "./src/app/features/products/container/upload/upload.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/features/products/container/upload/upload.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3Byb2R1Y3RzL2NvbnRhaW5lci91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/products/container/upload/upload.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/features/products/container/upload/upload.component.ts ***!
  \************************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/image.service */ "./src/app/shared/image.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UploadComponent = /** @class */ (function () {
    function UploadComponent(storage, service) {
        this.storage = storage;
        this.service = service;
        this.selectedImage = null;
        this.image = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent.prototype.onWineFormSubmit = function (a) {
        console.log(a);
    };
    UploadComponent.prototype.onUploadSubmit = function (formValue) {
        var _this = this;
        var filePath = formValue.category + "/" + formValue.hiddenImage.name.split('.').slice(0, -1).join('.') + "_" + new Date().getTime();
        var fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, formValue.hiddenImage).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
            fileRef.getDownloadURL().subscribe(function (url) {
                // tslint:disable-next-line: no-string-literal
                formValue['imageUrl'] = url;
                // CONDITION TO FILE FOR EACH FOLDER
                if (formValue.category === 'A Mano') {
                    _this.service.insertAMano(formValue);
                }
                if (formValue.category === 'Hardys and Sons') {
                    _this.service.insertHardysAndSons(formValue);
                }
                if (formValue.category === 'YellowTail') {
                    _this.service.insertYellowTail(formValue);
                }
                if (formValue.category === 'Barefoot') {
                    _this.service.insertBarefoot(formValue);
                }
                if (formValue.category === 'Concha Toro') {
                    _this.service.insertConchaToro(formValue);
                }
                if (formValue.category === 'Gallo') {
                    _this.service.insertGallo(formValue);
                }
                if (formValue.category === 'Others') {
                    _this.service.insertOthers(formValue);
                }
            });
        })).subscribe();
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
        { type: src_app_shared_image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], UploadComponent.prototype, "image", void 0);
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/products/container/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/features/products/container/upload/upload.component.scss")]
        })
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/features/products/product-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/products/product-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProductRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function() { return ProductRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _container_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/upload/upload.component */ "./src/app/features/products/container/upload/upload.component.ts");
/* harmony import */ var _component_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/image-list/image-list.component */ "./src/app/features/products/component/image-list/image-list.component.ts");





var routes = [
    { path: '', redirectTo: 'upload', pathMatch: 'full' },
    { path: 'upload', component: _container_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"] },
    { path: 'list', component: _component_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_4__["ImageListComponent"] }
];
var ProductRoutingModule = /** @class */ (function () {
    function ProductRoutingModule() {
    }
    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProductRoutingModule);
    return ProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/products/products.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/products/products.module.ts ***!
  \******************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_component_image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../products/component/image/image.component */ "./src/app/features/products/component/image/image.component.ts");
/* harmony import */ var _component_images_images_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/images/images.component */ "./src/app/features/products/component/images/images.component.ts");
/* harmony import */ var _component_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/image-details/image-details.component */ "./src/app/features/products/component/image-details/image-details.component.ts");
/* harmony import */ var _component_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/image-list/image-list.component */ "./src/app/features/products/component/image-list/image-list.component.ts");
/* harmony import */ var _container_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./container/upload/upload.component */ "./src/app/features/products/container/upload/upload.component.ts");
/* harmony import */ var _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/brands/brands.component */ "./src/app/features/products/component/brands/brands.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/features/products/product-routing.module.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _component_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/single-product/single-product.component */ "./src/app/features/products/component/single-product/single-product.component.ts");





// importing Product Components









var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _products_component_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"],
                _component_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"],
                _component_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_7__["ImageDetailsComponent"],
                _component_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_8__["ImageListComponent"],
                _container_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"],
                _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_10__["BrandsComponent"],
                _component_single_product_single_product_component__WEBPACK_IMPORTED_MODULE_13__["SingleProductComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_11__["ProductRoutingModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            ],
            exports: [
                _component_images_images_component__WEBPACK_IMPORTED_MODULE_6__["ImagesComponent"],
                _component_image_list_image_list_component__WEBPACK_IMPORTED_MODULE_8__["ImageListComponent"],
                _component_image_details_image_details_component__WEBPACK_IMPORTED_MODULE_7__["ImageDetailsComponent"],
                _products_component_image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"],
                _container_upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"],
                _component_brands_brands_component__WEBPACK_IMPORTED_MODULE_10__["BrandsComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/app/features/users/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/features/users/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_models_registration_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../shared/models/registration.model */ "./src/app/shared/models/registration.model.ts");







var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.eventAuthError = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.eventAuthError$ = this.eventAuthError.asObservable();
        this.newUser = new _shared_models_registration_model__WEBPACK_IMPORTED_MODULE_6__["Register"]();
        this.user = afAuth.authState;
        this.regis = afAuth.authState;
    }
    // loginextra(user: User) {
    //   return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
    // }
    AuthService.prototype.login = function (user) {
        var _this = this;
        console.log(user, 'login');
        return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
            .catch(function (error) {
            // this.eventAuthError.next(error);
        })
            .then(function (userCredential) {
            if (userCredential) {
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthService.prototype.logout = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    AuthService.prototype.getUserState = function () {
        return this.afAuth.authState;
    };
    AuthService.prototype.createUserRegistration = function (user) {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
            .then(function (userCredential) {
            _this.newUser = user;
            console.log(userCredential);
            userCredential.user.updateProfile({
                displayName: user.firstName + ' ' + user.lastName
            });
            _this.insertUserData(userCredential)
                .then(function () {
                _this.router.navigate(['/login']);
            });
        })
            .catch(function (error) {
            // this.eventAuthError.next(error);
        });
    };
    // doc = ref, set = put for no error
    AuthService.prototype.insertUserData = function (userCredential) {
        return this.db.doc("Users/" + userCredential.user.uid).set({
            email: this.newUser.email,
            firstname: this.newUser.firstName,
            lastname: this.newUser.lastName,
            role: 'network user'
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/features/users/components/login/login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/features/users/components/login/login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg {\n  position: fixed;\n  top: -50%;\n  width: 200%;\n  height: 200%;\n  background-image: url('redbg.jpg');\n}\n\n.container {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background-size: cover;\n  position: relative;\n}\n\n.f {\n  width: 280px;\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #fcfcfc;\n  position: fixed;\n}\n\n.container #loginbg {\n  background-color: black;\n}\n\n.login-box h1 {\n  float: left;\n  font-size: 40px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 1px 0;\n  color: white;\n}\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n  padding: 8px 0;\n  margin: 8px 0;\n  border-bottom: 1px solid #bbbbbb;\n}\n\n.textbox i {\n  width: 26px;\n  float: left;\n  text-align: center;\n}\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 18px;\n  width: 80%;\n  float: left;\n  margin: 0 10px;\n}\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #ffffff;\n  color: white;\n  padding: 5px;\n  font-size: 18px;\n  cursor: pointer;\n  margin: 12px 0;\n  margin-top: 70px;\n}\n\n.btn:hover {\n  background: #552424;\n}\n\n.btnReg {\n  background-color: transparent;\n  border: none;\n  color: #e2a4a4;\n}\n\n.btnReg:hover {\n  background-color: #ffcece;\n  color: black;\n}\n\nimg {\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  margin: 0;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img {\n    left: 50%;\n    margin-left: 50px;\n    /* 50% */\n  }\n}\n\ninput:-webkit-autofill,\ntextarea:-webkit-autofill,\nselect:-webkit-autofill {\n  -webkit-transition-delay: 3600s;\n          transition-delay: 3600s;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #2f2f2f;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #2f2f2f;\n}\n\n.img-responsive {\n  height: auto;\n  width: 50px;\n  margin-left: 45rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdXNlcnMvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXG1qZXN1XFx3aW5lY29tXFx3aW5lY29tdjFcXHdpbmVjb212Mi9zcmNcXGFwcFxcZmVhdHVyZXNcXHVzZXJzXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0VBQ0E7SUFDSSxTQUFBO0lBQ0EsaUJBQUE7SUFDQSxRQUFBO0VDQ047QUFDRjs7QURFQTs7O0VBR0ksK0JBQUE7VUFBQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvdXNlcnMvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogLTUwJTtcbiAgICB3aWR0aDogMjAwJTtcbiAgICBoZWlnaHQ6IDIwMCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3JlZGJnLmpwZycpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmYge1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMTUlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGNvbG9yOiByZ2IoMjUyLCAyNTIsIDI1Mik7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuXG4uY29udGFpbmVyICNsb2dpbmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmxvZ2luLWJveCBoMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCAjNGNhZjUwO1xuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgcGFkZGluZzogMXB4IDA7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLnRleHRib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmJiYmI7XG59XG5cbi50ZXh0Ym94IGkge1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHRib3ggaW5wdXQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgMTBweDtcbn1cblxuLmJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xufVxuXG4uYnRuOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoODUsIDM2LCAzNik7XG59XG5cbi5idG5SZWcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogcmdiKDIyNiwgMTY0LCAxNjQpO1xufVxuXG4uYnRuUmVnOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyMDYsIDIwNik7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pbWcge1xuICAgIC8qIFNldCBydWxlcyB0byBmaWxsIGJhY2tncm91bmQgKi9cbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAyNHB4O1xuICAgIC8qIFNldCB1cCBwcm9wb3J0aW9uYXRlIHNjYWxpbmcgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgbWFyZ2luOiAwO1xuICAgIC8qIFNldCB1cCBwb3NpdGlvbmluZyAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgLyogU3BlY2lmaWMgdG8gdGhpcyBwYXJ0aWN1bGFyIGltYWdlICovXG4gICAgaW1nIHtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgICAgLyogNTAlICovXG4gICAgfVxufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLFxudGV4dGFyZWE6LXdlYmtpdC1hdXRvZmlsbCxcbnNlbGVjdDotd2Via2l0LWF1dG9maWxsIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAzNjAwcztcbn1cblxuYm9keSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tbGVmdDogNDVyZW07XG59IiwiI2JnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC01MCU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVkYmcuanBnXCIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZiB7XG4gIHdpZHRoOiAyODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNmY2ZjZmM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNvbnRhaW5lciAjbG9naW5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9naW4tYm94IGgxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICM0Y2FmNTA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0Ym94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xufVxuXG4udGV4dGJveCBpIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0Ym94IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDgwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTUyNDI0O1xufVxuXG4uYnRuUmVnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNlMmE0YTQ7XG59XG5cbi5idG5SZWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZWNlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG4gIC8qIFNldCBydWxlcyB0byBmaWxsIGJhY2tncm91bmQgKi9cbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDI0cHg7XG4gIC8qIFNldCB1cCBwcm9wb3J0aW9uYXRlIHNjYWxpbmcgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAvKiBTcGVjaWZpYyB0byB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UgKi9cbiAgaW1nIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgLyogNTAlICovXG4gIH1cbn1cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsXG50ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLFxuc2VsZWN0Oi13ZWJraXQtYXV0b2ZpbGwge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAzNjAwcztcbn1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjJmMmY7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG4uaW1nLXJlc3BvbnNpdmUge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNDVyZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/features/users/components/login/login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/features/users/components/login/login.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, router, fl) {
        this.auth = auth;
        this.router = router;
        this.fl = fl;
        this.isSubmitted = true;
        this.isPassword = true;
        this.isEmail = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formLogin = this.fl.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    // loginWine() {
    //   this.auth.loginextra({ email: this.formLogin.controls.email.value, password: this.formLogin.controls.password.value })
    //     .then(resolve => this.router.navigate(['home']))
    //     .catch(error => this.errorMsg = error.message);
    // }
    LoginComponent.prototype.login = function (form) {
        console.log(form, 'login');
        this.auth.login(form);
    };
    LoginComponent.prototype.loginValidators = function () {
        if (this.formLogin.value.email === '') {
            this.isEmail = false;
        }
        if (this.formLogin.value.password === '') {
            this.isPassword = false;
        }
    };
    LoginComponent.prototype.loginDirty = function () {
        if (this.formLogin.touched) {
            this.isEmail = true;
        }
        if (this.formLogin.touched) {
            this.isPassword = true;
        }
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['registration']);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/users/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/features/users/components/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/features/users/components/registration/registration.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/features/users/components/registration/registration.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#bg {\n  position: fixed;\n  top: -50%;\n  width: 200%;\n  height: 200%;\n  background-image: url('redbg.jpg');\n}\n\n.container {\n  margin: 0;\n  padding: 0;\n  font-family: sans-serif;\n  background-size: cover;\n  position: relative;\n}\n\n.f {\n  width: 280px;\n  position: absolute;\n  top: 50%;\n  left: 15%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  color: #fcfcfc;\n  position: fixed;\n}\n\n.container #loginbg {\n  background-color: black;\n}\n\n.login-box h1 {\n  float: left;\n  font-size: 40px;\n  border-bottom: 6px solid #4caf50;\n  margin-bottom: 50px;\n  padding: 1px 0;\n  color: white;\n}\n\n.textbox {\n  width: 100%;\n  overflow: hidden;\n  font-size: 20px;\n  padding: 8px 0;\n  margin: 8px 0;\n  border-bottom: 1px solid #bbbbbb;\n}\n\n.textbox i {\n  width: 26px;\n  float: left;\n  text-align: center;\n}\n\n.textbox input {\n  border: none;\n  outline: none;\n  background: none;\n  color: white;\n  font-size: 18px;\n  width: 80%;\n  float: left;\n  margin: 0 10px;\n}\n\n.btn {\n  width: 100%;\n  background: none;\n  border: 2px solid #ffffff;\n  color: white;\n  padding: 5px;\n  font-size: 18px;\n  cursor: pointer;\n  margin: 12px 0;\n  margin-top: 70px;\n}\n\n.btn:hover {\n  background: #552424;\n}\n\n.btnReg {\n  background-color: transparent;\n  border: none;\n  color: #e2a4a4;\n}\n\n.btnReg:hover {\n  background-color: #ffcece;\n  color: black;\n}\n\nimg {\n  /* Set rules to fill background */\n  min-height: 100%;\n  min-width: 1024px;\n  /* Set up proportionate scaling */\n  width: 100%;\n  height: auto;\n  margin: 0;\n  /* Set up positioning */\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n@media screen and (max-width: 1024px) {\n  /* Specific to this particular image */\n  img {\n    left: 50%;\n    margin-left: 50px;\n    /* 50% */\n  }\n}\n\ninput:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {\n  -webkit-transition-delay: 3600s;\n          transition-delay: 3600s;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #2f2f2f;\n}\n\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #2f2f2f;\n}\n\n.img-responsive {\n  height: auto;\n  width: 50px;\n  margin-left: 45rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvdXNlcnMvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vQzpcXFVzZXJzXFxtamVzdVxcd2luZWNvbVxcd2luZWNvbXYxXFx3aW5lY29tdjIvc3JjXFxhcHBcXGZlYXR1cmVzXFx1c2Vyc1xcY29tcG9uZW50c1xccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0NGOztBRENBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0NBQUE7VUFBQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNNRjs7QURKQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsbUJBQUE7QUNRRjs7QUROQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNTRjs7QUROQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ1NGOztBRFBBO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBRUEsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNELFNBQUE7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQ1NGOztBRFBBO0VBQXdDLHNDQUFBO0VBQ3RDO0lBQ0UsU0FBQTtJQUNBLGlCQUFBO0lBQXFCLFFBQUE7RUNZdkI7QUFDRjs7QURUQTtFQUNFLCtCQUFBO1VBQUEsdUJBQUE7QUNXRjs7QURSQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNXRjs7QURQQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNVRjs7QURQQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNVRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL3VzZXJzL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDsgXG4gIHRvcDogLTUwJTsgXG4gIHdpZHRoOiAyMDAlOyBcbiAgaGVpZ2h0OiAyMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVkYmcuanBnJyk7XG59XG4uY29udGFpbmVye1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6MDtcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmZ7XG4gIHdpZHRoOiAyODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6IHJnYigyNTIsIDI1MiwgMjUyKTtcbiAgcG9zaXRpb246IGZpeGVkO1xuXG59XG5cbi5jb250YWluZXIgI2xvZ2luYmd7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuLmxvZ2luLWJveCBoMXtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICM0Y2FmNTA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwO1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuLnRleHRib3h7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDhweCAwO1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2JiYmJiYjtcbn1cbi50ZXh0Ym94IGl7XG4gIHdpZHRoOiAyNnB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHRib3ggaW5wdXR7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogODAlO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG4uYnRue1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgY29sb3IgOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uYnRuOmhvdmVye1xuICBiYWNrZ3JvdW5kOnJnYig4NSwgMzYsIDM2KTtcbn1cbi5idG5SZWd7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiByZ2IoMjI2LCAxNjQsIDE2NCk7XG59XG5cbi5idG5SZWc6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDIwNiwgMjA2KTtcbiAgY29sb3I6IGJsYWNrO1xufVxuaW1ne1xuICAvKiBTZXQgcnVsZXMgdG8gZmlsbCBiYWNrZ3JvdW5kICovXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMTAyNHB4O1xuXHRcbiAgLyogU2V0IHVwIHByb3BvcnRpb25hdGUgc2NhbGluZyAqL1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuXHRtYXJnaW46IDA7XG4gIC8qIFNldCB1cCBwb3NpdGlvbmluZyAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkgeyAvKiBTcGVjaWZpYyB0byB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UgKi9cbiAgaW1ne1xuICAgIGxlZnQ6IDUwJTtcbiAgICBtYXJnaW4tbGVmdDogNTBweDsgICAvKiA1MCUgKi9cbiAgfVxufVxuXG5pbnB1dDotd2Via2l0LWF1dG9maWxsLCB0ZXh0YXJlYTotd2Via2l0LWF1dG9maWxsLCBzZWxlY3Q6LXdlYmtpdC1hdXRvZmlsbHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMzYwMHM7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG4uaW1nLXJlc3BvbnNpdmV7XG4gIGhlaWdodDphdXRvO1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cmVtO1xuXG59IiwiI2JnIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IC01MCU7XG4gIHdpZHRoOiAyMDAlO1xuICBoZWlnaHQ6IDIwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvcmVkYmcuanBnXCIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZiB7XG4gIHdpZHRoOiAyODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMTUlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgY29sb3I6ICNmY2ZjZmM7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbn1cblxuLmNvbnRhaW5lciAjbG9naW5iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4ubG9naW4tYm94IGgxIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkICM0Y2FmNTA7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIHBhZGRpbmc6IDFweCAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0Ym94IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiYmJiO1xufVxuXG4udGV4dGJveCBpIHtcbiAgd2lkdGg6IDI2cHg7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0Ym94IGlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDgwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG5cbi5idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjNTUyNDI0O1xufVxuXG4uYnRuUmVnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNlMmE0YTQ7XG59XG5cbi5idG5SZWc6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjZWNlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmltZyB7XG4gIC8qIFNldCBydWxlcyB0byBmaWxsIGJhY2tncm91bmQgKi9cbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAxMDI0cHg7XG4gIC8qIFNldCB1cCBwcm9wb3J0aW9uYXRlIHNjYWxpbmcgKi9cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAwO1xuICAvKiBTZXQgdXAgcG9zaXRpb25pbmcgKi9cbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAvKiBTcGVjaWZpYyB0byB0aGlzIHBhcnRpY3VsYXIgaW1hZ2UgKi9cbiAgaW1nIHtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gICAgLyogNTAlICovXG4gIH1cbn1cbmlucHV0Oi13ZWJraXQtYXV0b2ZpbGwsIHRleHRhcmVhOi13ZWJraXQtYXV0b2ZpbGwsIHNlbGVjdDotd2Via2l0LWF1dG9maWxsIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMzYwMHM7XG59XG5cbmJvZHkge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcbn1cblxuLmltZy1yZXNwb25zaXZlIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/features/users/components/registration/registration.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/features/users/components/registration/registration.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth.service */ "./src/app/features/users/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_email_validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/email.validators */ "./src/app/shared/email.validators.ts");







var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, fr, router) {
        this.auth = auth;
        this.fr = fr;
        this.router = router;
        this.snackbarMessage = "redirected to registration";
        this.eventAuthError = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]('');
        this.eventAuthError$ = this.eventAuthError.asObservable();
        this.isSubmitted = true;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.eventAuthError$.subscribe(function (data) {
            _this.authError = data;
        });
        this.formRegistration = this.fr.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lastName: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: [''],
            confirmPassword: ['']
        }, {
            validator: src_app_shared_email_validators__WEBPACK_IMPORTED_MODULE_6__["PasswordValidator"]
        });
    };
    RegistrationComponent.prototype.createUser = function (frm) {
        this.isSubmitted = false;
        this.auth.createUserRegistration(frm);
    };
    Object.defineProperty(RegistrationComponent.prototype, "formControls", {
        get: function () {
            // tslint:disable-next-line: no-string-literal
            return this.formRegistration['controls'];
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.backToLogin = function () {
        this.router.navigate(['login']);
    };
    RegistrationComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/users/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/features/users/components/registration/registration.component.scss")]
        })
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/features/users/users-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/users/users-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/features/users/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/features/users/components/registration/registration.component.ts");





var routes = [
    { path: 'registration', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/users/users.module.ts":
/*!************************************************!*\
  !*** ./src/app/features/users/users.module.ts ***!
  \************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/features/users/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/features/users/components/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/features/users/users-routing.module.ts");







var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_6__["UsersRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ],
            exports: []
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ }),

/***/ "./src/app/shared/authenticationGuard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/authenticationGuard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        // Force Navigate to login
        if (this.router.url === '/') {
            this.router.navigate(['login']);
            return false;
        }
        return true;
    };
    AuthenticationGuard.ctorParameters = function () { return [
        { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/shared/email.validators.ts":
/*!********************************************!*\
  !*** ./src/app/shared/email.validators.ts ***!
  \********************************************/
/*! exports provided: ValidateUrl, PasswordValidator, NameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateUrl", function() { return ValidateUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidator", function() { return PasswordValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameValidator", function() { return NameValidator; });
function ValidateUrl(control) {
    if (!control.value.startsWith('https') || !control.value.includes('.io')) {
        return { validUrl: true };
    }
    return null;
}
function PasswordValidator(control) {
    var password = control.get('password');
    var confirmPassword = control.get('confirmPassword');
    if (password.pristine || confirmPassword.pristine) {
        return null;
    }
    return password && confirmPassword && password.value !== confirmPassword.value ?
        { misMatch: true } :
        null;
}
function NameValidator(control) {
    var fName = control.get('firstName');
    var lName = control.get('lastName');
    if (fName.pristine || lName.pristine) {
        return fName.pristine || lName.pristine ?
            { testFName: true } :
            null;
    }
}


/***/ }),

/***/ "./src/app/shared/image.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/image.service.ts ***!
  \*****************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ImageService = /** @class */ (function () {
    // received: any = UploadComponent.transfer;
    function ImageService(firebase, fb, imageDelete) {
        this.firebase = firebase;
        this.fb = fb;
        this.imageDelete = imageDelete;
    }
    ImageService.prototype.getImageDetailList = function () {
        this.imageDetailList = this.firebase.list('imageDetails');
        this.imageAMano = this.firebase.list('aMano');
        this.imageHardysAndSons = this.firebase.list('hardy');
        this.imageYellowTail = this.firebase.list('tail');
        this.imageBarefoot = this.firebase.list('foot');
        this.imageConchaToro = this.firebase.list('toro');
        this.imageGallo = this.firebase.list('gallo');
        this.imageOthers = this.firebase.list('others');
        return this.imageYellowTail.snapshotChanges();
    };
    // RETURN FUNCTION FROM DATABASE
    ImageService.prototype.getImageHardys = function () {
        return this.imageHardysAndSons.snapshotChanges();
    };
    ImageService.prototype.getImageAMano = function () {
        return this.imageAMano.snapshotChanges();
    };
    ImageService.prototype.getImageBarefoot = function () {
        return this.imageBarefoot.snapshotChanges();
    };
    ImageService.prototype.getImageConchaToro = function () {
        return this.imageConchaToro.snapshotChanges();
    };
    ImageService.prototype.getImageGallo = function () {
        return this.imageGallo.snapshotChanges();
    };
    ImageService.prototype.getImageOthers = function () {
        return this.imageOthers.snapshotChanges();
    };
    // OG CODE
    ImageService.prototype.insertImageDetails = function (imageDetails) {
        this.imageDetailList.push(imageDetails);
    };
    // PUSH INFORMATION INTO FIREBASE
    ImageService.prototype.insertAMano = function (aMano) {
        this.imageAMano.push(aMano);
    };
    ImageService.prototype.insertHardysAndSons = function (hardy) {
        this.imageHardysAndSons.push(hardy);
    };
    ImageService.prototype.insertYellowTail = function (tail) {
        this.imageYellowTail.push(tail);
    };
    ImageService.prototype.insertBarefoot = function (foot) {
        this.imageBarefoot.push(foot);
    };
    ImageService.prototype.insertConchaToro = function (toro) {
        this.imageConchaToro.push(toro);
    };
    ImageService.prototype.insertGallo = function (gallo) {
        this.imageGallo.push(gallo);
    };
    ImageService.prototype.insertOthers = function (others) {
        this.imageOthers.push(others);
    };
    // DELETE DETAILS ON DATABASE
    ImageService.prototype.deleteWines = function ($key) {
        this.imageYellowTail.remove($key);
        this.imageAMano.remove($key);
        this.imageHardysAndSons.remove($key);
        this.imageYellowTail.remove($key);
        this.imageBarefoot.remove($key);
        this.imageConchaToro.remove($key);
        this.imageGallo.remove($key);
        this.imageOthers.remove($key);
    };
    // DELETE IMAGE ON DATABASE
    ImageService.prototype.onImageDelete = function (downloadUrl) {
        return this.imageDelete.storage.refFromURL(downloadUrl).delete();
    };
    ImageService.prototype.updateYellow = function (tail) {
        this.imageYellowTail.update(tail.$key, {
            caption: tail.caption,
            category: tail.category,
            description: tail.description,
            allergen: tail.allergen,
            country: tail.country,
            region: tail.region,
            type: tail.type,
            alcohol: tail.alcohol
        });
    };
    ImageService.prototype.updateHardy = function (hardy) {
        this.imageHardysAndSons.update(hardy.$key, {
            caption: hardy.caption,
            category: hardy.category,
            description: hardy.description,
            allergen: hardy.allergen,
            country: hardy.country,
            region: hardy.region,
            type: hardy.type,
            alcohol: hardy.alcohol
        });
    };
    ImageService.prototype.updateAMano = function (aMano) {
        this.imageAMano.update(aMano.$key, {
            caption: aMano.caption,
            category: aMano.category,
            description: aMano.description,
            allergen: aMano.allergen,
            country: aMano.country,
            region: aMano.region,
            type: aMano.type,
            alcohol: aMano.alcohol
        });
    };
    ImageService.prototype.updateBarefoot = function (foot) {
        this.imageBarefoot.update(foot.$key, {
            caption: foot.caption,
            category: foot.category,
            description: foot.description,
            allergen: foot.allergen,
            country: foot.country,
            region: foot.region,
            type: foot.type,
            alcohol: foot.alcohol
        });
    };
    ImageService.prototype.updateConcha = function (toro) {
        this.imageConchaToro.update(toro.$key, {
            caption: toro.caption,
            category: toro.category,
            description: toro.description,
            allergen: toro.allergen,
            country: toro.country,
            region: toro.region,
            type: toro.type,
            alcohol: toro.alcohol
        });
    };
    ImageService.prototype.updateGallo = function (gallo) {
        this.imageGallo.update(gallo.$key, {
            caption: gallo.caption,
            category: gallo.category,
            description: gallo.description,
            allergen: gallo.allergen,
            country: gallo.country,
            region: gallo.region,
            type: gallo.type,
            alcohol: gallo.alcohol
        });
    };
    ImageService.prototype.updateOthers = function (others) {
        this.imageOthers.update(others.$key, {
            caption: others.caption,
            category: others.category,
            description: others.description,
            allergen: others.allergen,
            country: others.country,
            region: others.region,
            type: others.type,
            alcohol: others.alcohol
        });
    };
    ImageService.ctorParameters = function () { return [
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_1__["AngularFireStorage"] }
    ]; };
    ImageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], ImageService);
    return ImageService;
}());



/***/ }),

/***/ "./src/app/shared/models/registration.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/models/registration.model.ts ***!
  \*****************************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
var Register = /** @class */ (function () {
    function Register() {
    }
    return Register;
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
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCAiCZg_X79UDohZX1A1zuoj2xDUDWVUUI',
        authDomain: 'productmanagement-6ef9d.firebaseapp.com',
        databaseURL: 'https://productmanagement-6ef9d.firebaseio.com',
        projectId: 'productmanagement-6ef9d',
        storageBucket: 'productmanagement-6ef9d.appspot.com',
        messagingSenderId: '262707114912',
        appId: '1:262707114912:web:da3f6d20a9bc892a'
    },
    firebaseConfig2: {
        apiKey: 'AIzaSyBdJMVzYVii7yb5Th2RxPYFCft8TNqHGwY',
        authDomain: 'loginauthentication-ea394.firebaseapp.com',
        databaseURL: 'https://loginauthentication-ea394.firebaseio.com',
        projectId: 'loginauthentication-ea394',
        storageBucket: 'loginauthentication-ea394.appspot.com',
        messagingSenderId: '448742837930',
        appId: '1:448742837930:web:d7ce79349ea63595'
    }
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

module.exports = __webpack_require__(/*! C:\Users\mjesu\winecom\winecomv1\winecomv2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map