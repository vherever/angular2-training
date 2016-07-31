import { Component } from '@angular/core';
import { Product } from '../models/product.model';

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
    selector: 'product-department',
    inputs: ['product'],
    templateUrl: 'app/templates/department.component.html'
})
export class ProductDepartment {
    product: Product;
}