import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {

    private products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            price: 10.99,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description of Product 2',
            price: 19.99,
        },
    ];

    findAll() {
        return this.products;
    }

    findOne(id: number) {
        return this.products.find(product => product.id === id);
    }
}
