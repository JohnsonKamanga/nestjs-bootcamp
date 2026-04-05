import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService : ProductsService){}

    @Get(":id")
    findOne(id: number) {
        return this.productsService.findOne(id);
    }

    @Get()
    findAll() {
        return this.productsService.findAll();
    }
}
