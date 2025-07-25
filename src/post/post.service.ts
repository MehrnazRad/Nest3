import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DraftItemsEntity } from "src/Modules/Entity/MySql/draft-items.entity";

export interface CreateDraftItemInput {
  DraftId: number;
  ProductId: number;
  QtyIn: number;
  QtyOut: number;
  Qty: number;
  QtyInSecond: number;
  QtyOutSecond: number;
  QtySecond: number;
  Remaining: number;
  RemainingSecond: number;
  FeeEnter: number;
  FeeExit: number;
  PriceBeforeDiscount: number;
  Discount: number;
  PriceAfterDiscount: number;
  Tax: number;
  TotalPrice: number;
  TotalPriceOther: number;
  FinanceDate: Date;
  EnExpireDate: Date;
  BatchNumber: string;
  ProductDescription: string;
}

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(DraftItemsEntity)
    private readonly draftItemRepo: Repository<DraftItemsEntity>,
  ) {}

  async postDraftItems(data: CreateDraftItemInput[]): Promise<DraftItemsEntity[]> {
    const items = data.map(item => {
      const entity = new DraftItemsEntity();
      Object.assign(entity, item);
      return entity;
    });

    return this.draftItemRepo.save(items);
  }
}
