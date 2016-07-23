export class ProductService {
    sku: string;
    name: string;
    imageUrl: string;
    department: string[];
    price: number;

    constructor() {
        this.sku = '6752180';
        this.name = 'A Black Hat';
        this.imageUrl = '/resources/images/product/black-hat.jpg';
        this.department = ['Men', 'Accessories', 'Hats'];
        this.price = 19.99;
    }
}