import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ManyToOne, JoinColumn } from 'typeorm';
import {DraftsEntity} from 'src/drafts/entities/drafts.entity';
import {ProductsEntity} from 'src/Products/entities/products.entity';

@Entity('DraftItems')
export class DraftItemsEntity {
@ManyToOne(() => DraftsEntity)
@JoinColumn({ name: 'DraftId' })
draft: DraftsEntity;

@ManyToOne(() => ProductsEntity)
@JoinColumn({ name: 'ProductId' })
product: ProductsEntity;


  @PrimaryGeneratedColumn("increment")
  DraftItemId: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtyIn: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtyOut: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Qty: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtyInSecond: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtyOutSecond: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtySecond: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Remaining: number;

  @Column('decimal', { precision: 18, scale: 2 })
  RemainingSecond: number;

  @CreateDateColumn()
  CreateDate: Date;

  @Column('int')
  DraftId: number;

  @Column('int')
  ProductId: number;

  @Column('decimal', { precision: 18, scale: 2 })
  FeeEnter: number;

  @Column('decimal', { precision: 18, scale: 2 })
  FeeExit: number;

  @Column('decimal', { precision: 18, scale: 2 })
  PriceBeforeDiscount: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Discount: number;

  @Column('decimal', { precision: 18, scale: 2 })
  PriceAfterDiscount: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Tax: number;

  @Column('decimal', { precision: 18, scale: 2 })
  TotalPrice: number;

  @Column('decimal', { precision: 18, scale: 2 })
  TotalPriceOther: number;

  @Column('datetime')
  FinanceDate: Date;

  @Column('datetime', { nullable: true })
  EnExpireDate: Date;

  @Column('nvarchar', { nullable: true })
  BatchNumber: string;

  @Column('nvarchar', { nullable: true })
  ProductDescription: string;
}