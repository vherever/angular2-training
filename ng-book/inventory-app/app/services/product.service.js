"use strict";
var product_model_1 = require('../models/product.model');
var ProductService = (function () {
    function ProductService() {
        this.products = new Array();
        this.products.push(new product_model_1.Product('67525180', 'A Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 19.99));
        this.products.push(new product_model_1.Product('87345714', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Men', 'Apparel', 'Jackets & Vests'], 238.99));
        this.products.push(new product_model_1.Product('12346313', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99));
    }
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map