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
var core_2 = require("@angular/core");
var department_component_1 = require('../components/department.component');
/**
 * @ProductImage: A component to show a single Product's image
 */
var ProductImage = (function () {
    function ProductImage() {
    }
    ProductImage = __decorate([
        core_1.Component({
            selector: 'product-image',
            host: { class: 'ui small image' },
            inputs: ['product'],
            templateUrl: 'app/templates/image.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductImage);
    return ProductImage;
}());
/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
var PriceDisplay = (function () {
    function PriceDisplay() {
    }
    PriceDisplay = __decorate([
        core_1.Component({
            selector: 'price-display',
            inputs: ['price'],
            templateUrl: 'app/templates/price.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PriceDisplay);
    return PriceDisplay;
}());
/**
 * @ProductRow: A component for the view of single Product
 */
var ProductRow = (function () {
    function ProductRow() {
    }
    ProductRow = __decorate([
        core_1.Component({
            selector: 'product-row',
            inputs: ['product'],
            host: { 'class': 'item' },
            directives: [ProductImage, department_component_1.ProductDepartment, PriceDisplay],
            templateUrl: 'app/templates/row.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductRow);
    return ProductRow;
}());
/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
var ProductsList = (function () {
    function ProductsList() {
        this.onProductSelected = new core_2.EventEmitter();
    }
    ProductsList.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductsList.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    ProductsList = __decorate([
        core_1.Component({
            selector: 'products-list',
            directives: [ProductRow],
            inputs: ['productList'],
            outputs: ['onProductSelected'],
            templateUrl: 'app/templates/list.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductsList);
    return ProductsList;
}());
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
            directives: [ProductsList],
            templateUrl: 'app/templates/app.component.html',
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService])
    ], InventoryApp);
    return InventoryApp;
}());
exports.InventoryApp = InventoryApp;
//# sourceMappingURL=app.component.js.map