import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';
import { InventoriesEntity } from 'src/Modules/Entity/MySql/inventories.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsEntity
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
