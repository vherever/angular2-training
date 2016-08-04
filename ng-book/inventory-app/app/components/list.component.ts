import { Component, EventEmitter } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductRow } from './row.component';

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
export class ProductsList {
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