import { Component } from '@angular/core'
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import {EventEmitter} from "@angular/core";

import { ProductDepartment } from '../components/department.component';


/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    templateUrl: 'app/templates/image.component.html'
})
class ProductImage {
    product: Product;
}




/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
    selector: 'price-display',
    inputs: ['price'],
    templateUrl: 'app/templates/price.component.html'
})
class PriceDisplay {
    price: number;
}

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
class ProductRow {
    product: Product;
}

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
    selector: 'products-list',
    directives: [ProductRow],
    inputs: ['productList'],
    outputs: ['onProductSelected'],
    templateUrl: 'app/templates/list.component.html'
})
class ProductsList {
    /**
     * @input productList - the Product[] passed to us
     */
    productList: Product[];

    /**
     * @ouput onProductSelected - outputs the current
     *          Product whenever a new Product is selected
     */
    onProductSelected: EventEmitter<Product>;

    /**
     * @property currentProduct - local state containing
     *             the currently selected `Product`
     */
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }

}

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