import { Component } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductImage } from './image.component';
import { ProductDepartment } from './department.component';
import { PriceDisplay } from './price.component';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
    selector: 'product-row',
    inputs: ['product'],
    host: {'class': 'item'},
    directives: [ProductImage, ProductDepartment, PriceDisplay],
    templateUrl: 'app/templates/row.component.html'
})
export class ProductRow {
    product: Product;
}