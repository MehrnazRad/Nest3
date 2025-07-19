import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsEntity } from "src/Modules/Entity/MySql/products.entity";
import { Repository } from "typeorm";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>
  ) {}

  async getAllProductByDraft({ kindId }: { kindId: number }) {
    return this.productRepository.find({
      select: {
        Barcode: true,
        inventories: {
          Qty: true,
          storage: {
            Name: true,
            drafts: { Description: true, kind: { KindName: true } },
          },
        },
      },
      where: { inventories: { storage: { drafts: { KindId: kindId } } } },
      relations: { inventories: { storage: { drafts: { kind: true } } } },
    });
  }
}
