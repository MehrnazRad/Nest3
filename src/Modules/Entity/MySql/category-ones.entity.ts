import { CategoryTwoesEntity } from 'src/Modules/Entity/MySql/category-twoes.entity';
import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('CategoryOnes')
export class CategoryOnesEntity {
  @OneToMany(() => ProductsEntity, product => product.categoryOne)
  categoryOne: ProductsEntity[];
  @OneToMany(() => CategoryTwoesEntity, categoryTwoe => categoryTwoe.categoryOne)
  categoryTwoes: CategoryTwoesEntity[];

  @PrimaryGeneratedColumn("increment")
  CategoryOneId: number;

  @Column('nvarchar')
  CategoryName: string;

  @Column('nvarchar', { nullable: true })
  CatCode: string;

  @CreateDateColumn()
  CreateDate: Date;

  @Column('decimal', { precision: 18, scale: 2 })
  MinQty: number;

  @Column('decimal', { precision: 18, scale: 2 })
  MaxQty: number;
}