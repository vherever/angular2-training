import { Component } from '@angular/core'
import { ProductService } from './services/product.service';
import { Product } from './models/product.model';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})

export class InventoryApp {
    products: Product[];

    constructor(private p: ProductService) {
        this.products = p.products;
    }
}