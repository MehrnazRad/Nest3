import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JoinColumn , ManyToOne } from 'typeorm';
import { UnitsEntity } from 'src/units/entities/units.entity';
import { CategoryOnesEntity } from 'src/category-ones/entities/category-ones.entity';
import { CategoryTwoesEntity } from 'src/category-twoes/entities/category-twoes.entity';
import { CategoryThreesEntity } from 'src/category-threes/entities/category-threes.entity';


@Entity("Products")
export class ProductsEntity {
@ManyToOne(() => UnitsEntity)
@JoinColumn({ name: 'UnitId' })
unit: UnitsEntity;

@ManyToOne(() => CategoryOnesEntity)
@JoinColumn({ name: 'CategoryOneId' })
categoryOne: CategoryOnesEntity;

@ManyToOne(() => CategoryTwoesEntity)
@JoinColumn({ name: 'CategoryTwoId' })
categoryTwo: CategoryTwoesEntity;

@ManyToOne(() => CategoryThreesEntity)
@JoinColumn({ name: 'CategoryThreeId' })
categoryThree: CategoryThreesEntity;


  @PrimaryGeneratedColumn("increment")
  ProductId : number;

  @Column('nvarchar', { nullable: true })
  Code: string;

  @Column('nvarchar', { nullable: true })
  Barcode: string;

  @Column('decimal', { precision: 18, scale: 2 })
  MinQty: number;

  @Column('decimal', { precision: 18, scale: 2 })
  MaxQty: number;

  @Column('nvarchar', { length: 100 })
  Name: string;

  @Column('decimal', { precision: 18, scale: 2 })
  Ratio: number;

  @Column('int', { nullable: true })
  UnitId: number;

  @Column('int', { nullable: true })
  UnitSecondaryId: number;

  @Column('nvarchar', { nullable: true })
  Description: string;

  @Column('nvarchar', { nullable: true })
  Photo: string;

  @Column('int', { nullable: true })
  CategoryOneId: number;

  @Column('int', { nullable: true })
  CategoryTwoId: number;

  @Column('int', { nullable: true })
  CategoryThreeId: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Qty: number;

  @Column('decimal', { precision: 18, scale: 2 })
  QtySec: number;

  @Column('decimal', { precision: 18, scale: 2 })
  Fee: number;

  @Column('decimal', { precision: 18, scale: 2 })
  FeeExit: number;

  @CreateDateColumn()
  CreateDate: Date;

  @CreateDateColumn()
  LastModifyDate: Date;

  @Column('bit')
  IsOutOfDate: boolean;

  @Column('nvarchar', { nullable: true })
  MetaKeywords: string;

  @Column('datetime', { nullable: true })
  EnExpireDate: Date;

  @Column('nvarchar', { nullable: true })
  BatchNumber: string;

  @Column('bit')
  IsNoRatio: boolean;
}
