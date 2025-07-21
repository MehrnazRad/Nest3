import { Controller, Get, Param, ParseIntPipe, Patch, Query } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Product')
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Get('getAllProductByKindId/:kindId')
    getAllProductByDraft(@Param('kindId', ParseIntPipe) kindId: number) {
        return this.productService.getAllProductByDraft({ kindId })
    }

      @Get('getProductNames')
  getProductNames() {
    return this.productService.getProductNames();
  }

   @Get('getStoragesNames')
  getStoragesNames() {
    return this.productService.getStoragesNames();
  }

@Get('getAllProductsByStorage/:storageId')
getAllProductsByStorage(@Param('storageId') storageId: string) {
  const finalId = storageId === 'all' ? 'all' : parseInt(storageId);
  return this.productService.getAllProductsByStorage({ storageId: finalId });
}


@Get('report/qty/:productId')
getQtyReportById(@Param('productId') productId: number) {
  return this.productService.getQtyReportById(Number(productId));
}
}
