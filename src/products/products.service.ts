import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  private products = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Phone', price: 699.99 },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find(p => p.id == id);
    console.log("Product found:", product, " with id ", id);
    return product;
  }

  create(product: any) {
    const newProduct = { id: Date.now(), ...product };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, product: any) {
    const index = this.products.findIndex(p => p.id === id);
    if (index >= 0) {
      this.products[index] = { ...this.products[index], ...product };
      return this.products[index];
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex(p => p.id === id);
    if (index >= 0) {
      return this.products.splice(index, 1)[0];
    }
    return null;
  }
}