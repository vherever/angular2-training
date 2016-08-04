"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var product_service_1 = require('../services/product.service');
var list_component_1 = require('../components/list.component');
/**
 * @InventoryApp: the top-level component for our application
 */
var InventoryApp = (function () {
    function InventoryApp(p) {
        this.p = p;
        this.products = p.products;
    }
    InventoryApp.prototype.productWasSelected = function (product) {
        console.log('Product clicked: ', product);
    };
    InventoryApp = __decorate([
        core_1.Component({
            selector: 'inventory-app',
            directives: [list_component_1.ProductsList],
            templateUrl: 'app/templates/app.component.html',
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], InventoryApp);
    return InventoryApp;
}());
exports.InventoryApp = InventoryApp;
//# sourceMappingURL=app.component.js.map