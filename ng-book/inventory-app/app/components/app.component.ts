import { Component } from '@angular/core'
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

import { ProductsList } from '../components/list.component';

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
    selector: 'inventory-app',
    directives: [ProductsList],
    templateUrl: 'app/templates/app.component.html',
})

export class InventoryApp {
    products: Product[];

    constructor(private p: ProductService) {
        this.products = p.products;
    }

    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }
}