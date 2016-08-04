import { Component } from '@angular/core';

import { Product } from '../models/product.model';

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    templateUrl: 'app/templates/image.component.html'
})
export class ProductImage {
    product: Product;
}