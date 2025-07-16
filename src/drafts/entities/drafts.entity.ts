import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { CustomersEntity } from 'src/customers/entities/customers.entity';
import {StoragesEntity} from 'src/storages/entities/storages.entity';
import { ManyToOne, JoinColumn } from 'typeorm';
import { TransferYearsEntity} from 'src/transfer-years/entities/transfer-years.entity';
import {KindsEntity} from 'src/kinds/entities/kinds.entity';




@Entity('Drafts')
export class DraftsEntity {

  @ManyToOne(() => CustomersEntity)
@JoinColumn({ name: 'CustomerId' })
customer: CustomersEntity;

@ManyToOne(() => StoragesEntity)
@JoinColumn({ name: 'StorageId' })
storage: StoragesEntity;

@ManyToOne(() => KindsEntity)
@JoinColumn({ name: 'KindId' })
kind: KindsEntity;

@ManyToOne(() => TransferYearsEntity)
@JoinColumn({ name: 'TransferYearId' })
transferYear: TransferYearsEntity;


  @PrimaryGeneratedColumn("increment")
  DraftId: number;

  @Column('int')
  DraftNo: number;

  @Column('datetime')
  FinalDate: Date;

  @Column('int')
  State: number;

  @Column('int', { nullable: true })
  CustomerId: number;

  @Column('int')
  KindId: number;

  @Column('int')
  StorageId: number;

  @Column('int')
  TransferYearId: number;

  @Column('bit')
  Emailed: boolean;

  @Column('int')
  FinanceState: number;

  @Column('datetime')
  FinanceDate: Date;

  @Column('nvarchar', { nullable: true })
  Description: string;

  @Column('bit')
  FinanceEmailed: boolean;

  @Column('decimal', { precision: 18, scale: 2 })
  TotalPrice: number;

  @Column('decimal', { precision: 18, scale: 2 })
  DiscountPrice: number;

  @Column('decimal', { precision: 18, scale: 2 })
  DeliveryPrice: number;

  @Column('nvarchar', { nullable: true })
  FileForm: string;

  @Column('nvarchar', { nullable: true })
  FactorNumber: string;

  @CreateDateColumn()
  CreateDate: Date;

  @Column('bit')
  IsContradiction: boolean;

  @Column('nvarchar', { nullable: true })
  Token: string;

  @Column('int')
  DraftStep: number;
}