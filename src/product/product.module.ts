import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsEntity } from "src/Modules/Entity/MySql/products.entity";
import { DraftItemsEntity } from "src/Modules/Entity/MySql/draft-items.entity";
import { StoragesEntity } from "src/Modules/Entity/MySql/storages.entity";
import { InventoriesEntity } from "src/Modules/Entity/MySql/inventories.entity";
import { CategoryOnesEntity } from "src/Modules/Entity/MySql/category-ones.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductsEntity,
      DraftItemsEntity,
      StoragesEntity,
      InventoriesEntity,
      CategoryOnesEntity,
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
