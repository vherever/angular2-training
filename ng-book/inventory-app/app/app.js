"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var product_service_1 = require('./services/product.service');
platform_browser_dynamic_1.bootstrap(app_component_1.InventoryApp, [product_service_1.ProductService]);
//# sourceMappingURL=app.js.map