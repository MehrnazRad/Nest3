import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InventoriesEntity } from 'src/Modules/Entity/MySql/inventories.entity';
import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';
import { StoragesEntity } from 'src/Modules/Entity/MySql/storages.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly productRepository: Repository<ProductsEntity>,

    @InjectRepository(StoragesEntity)
    private readonly storagesRepository: Repository<StoragesEntity>,

    @InjectRepository(InventoriesEntity)
    private readonly inventoriesRepository: Repository<InventoriesEntity>,

  ) {}


  async getAllProductByDraft({ kindId }: { kindId: number }) {
    return this.productRepository.find({
      select: {
        Barcode: true,
        Name: true,
        Qty: true,
        inventories: {
          Qty: true,
          storage: {
            Name: true,
            drafts: {
              Description: true,
              kind: { KindName: true },
            },
          },
        },
      },
      where: {
        inventories: {
          storage: {
            drafts: { KindId: kindId },
          },
        },
      },
      relations: {
        inventories: {
          storage: {
            drafts: { kind: true },
          },
        },
      },
    });

   // return products.map(({ Barcode, Name, Qty, inventories = [] }) => {
    //   const initialQty = Number(Qty) || 0;
    //   const currentInventory = inventories.reduce(
    //     (sum, { Qty }) => sum + Number(Qty || 0),
    //     0
    //   );
    //   const soldAmount = initialQty - currentInventory;
    //   const warehouseName = inventories[0]?.storage?.Name ?? '—';

    //   return {
    //     Barcode,
    //     Name,
    //     warehouseName,
    //     initialQty,
    //     currentInventory,
    //     soldAmount,
    //   };
    // });
  };


  async getProductNames() {
  const products = await this.productRepository.find({
    select: { Name: true },
  });

  return products.map(p => p.Name); 
  };



  async getStoragesNames() {
  const storages = await this.storagesRepository.find({
    select: { StorageId: true, Name: true },
  });
  return storages.map(s => ({ StorageId: s.StorageId, Name: s.Name }));
 };



  async getAllProductsByStorage({ storageId }: { storageId: number | 'all' }) {
  const whereClause = storageId === 'all'
    ? {} 
    : { StorageId: storageId }; 

  const inventories = await this.inventoriesRepository.find({
    select: {
      Qty: true,
      product: { Name: true, Barcode: true },
      storage: {
        Name: true,
        customers: {
          Name: true,
          Address: true,
          PhoneNumber: true,
        },
      },
    },
    where: whereClause,
    relations: {
      product: true,
      storage: { customers: true },
    },
  });

  return inventories.map(row => ({
    ProductName: row.product?.Name,
    Barcode: row.product?.Barcode,
    InventoryQty: Number(row.Qty),
    StorageName: row.storage?.Name,
    Customers: (row.storage?.customers ?? []).map(c => ({
      Name: c.Name,
      PhoneNumber: c.PhoneNumber,
      Address: c.Address,
    })),
  }));
  };



async getQtyReportById(productId: number) {
  const product = await this.productRepository.findOne({
    select: {
      ProductId: true,
      Barcode: true,
      Name: true,
      Qty: true,
      draftItems: {
        Qty: true,
        draft: {
          KindId: true,
          kind: { KindName: true },
        },
      },
    },
    where: { ProductId: productId },
    relations: {
      draftItems: {
        draft: { kind: true },
      },
    },
  });

  if (!product) throw new NotFoundException('محصولی با این شناسه یافت نشد');

  const initialQty = Number(product.Qty || 0);
  let totalIn = 0;
  let totalOut = 0;
  const kindCounts: Record<string, number> = {};

  product.draftItems.forEach(({ Qty, draft }) => {
    const qty = Number(Qty || 0);
    const kindId = draft?.KindId;
    const kindName = draft?.kind?.KindName ?? 'نامشخص';

    kindCounts[kindName] = (kindCounts[kindName] || 0) + 1;

    if ([1, 4, 6].includes(kindId)) totalIn += qty;
    if ([2, 3, 7, 9].includes(kindId)) totalOut += qty;
    if (kindId === 8) {
      totalIn = qty;
      totalOut = 0;
    }
  });

  const actualQty = initialQty + totalIn - totalOut;

  return {
    ProductId: product.ProductId,
    Barcode: product.Barcode,
    Name: product.Name,
    initialQty,
    totalIn,
    totalOut,
    actualQty,
    operations: kindCounts,
  };
}
};
