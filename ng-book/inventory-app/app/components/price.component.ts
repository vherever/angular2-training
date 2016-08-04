import { Component } from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
    selector: 'price-display',
    inputs: ['price'],
    templateUrl: 'app/templates/price.component.html'
})
export class PriceDisplay {
    price: number;
}