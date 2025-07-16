import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {StoragesEntity} from 'src/storages/entities/storages.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
import { TransferYearsEntity} from 'src/transfer-years/entities/transfer-years.entity';
import { ProductsEntity } from 'src/Products/entities/products.entity';

@Entity('Inventories')
export class InventoriesEntity {
@ManyToOne(() => ProductsEntity)
@JoinColumn({ name: 'ProductId' })
product: ProductsEntity;

@ManyToOne(() => StoragesEntity)
@JoinColumn({ name: 'StorageId' })
storage: StoragesEntity;

@ManyToOne(() => TransferYearsEntity)
@JoinColumn({ name: 'TransferYearId' })
transferYear: TransferYearsEntity;


  @PrimaryGeneratedColumn("increment")
  InventoryId: number;

  @Column('int', { nullable: true })
  StorageId: number;

  @Column('int')
  TransferYearId: number;

  @Column('int')
  ProductId: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Qty: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtySecond: number;

  @Column('decimal', { precision: 18, scale: 2 })
  FeeEnter: number;

  @Column('decimal', { precision: 18, scale: 2 })
  FeeExit: number;

  @Column('decimal', { precision: 18, scale: 2 })
  TotalPriceEnter: number;

  @Column('decimal', { precision: 18, scale: 2 })
  TotalPriceExit: number;
}