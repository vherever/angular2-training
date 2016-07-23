import { Component } from '@angular/core'
import { ProductService } from './services/product.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
})

export class InventoryApp {
    product: ProductService;

    constructor(private p: ProductService) {
        this.product = p;
    }
}