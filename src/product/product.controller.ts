import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('getAllProductByKindId/:kindId')
    getAllProductByDraft(@Param('kindId', ParseIntPipe) kindId: number) {
        return this.productService.getAllProductByDraft({ kindId })
    }
}
