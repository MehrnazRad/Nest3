import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { CategoryOnesEntity } from 'src/Modules/Entity/MySql/category-ones.entity';
import { JoinColumn, ManyToOne } from 'typeorm';
import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';
import { CategoryThreesEntity } from 'src/Modules/Entity/MySql/category-threes.entity';

@Entity('CategoryTwoes')
export class CategoryTwoesEntity {
  @ManyToOne(() => CategoryOnesEntity)
  @JoinColumn({ name: 'CategoryOneId' })
  categoryOne: CategoryOnesEntity;

  @OneToMany(() => ProductsEntity, product => product.categoryTwo)
  categoryTwoes: ProductsEntity[];

  @OneToMany(() => CategoryThreesEntity, categoryThree => categoryThree.categoryTwo)
  categoryThrees: CategoryThreesEntity[];

  @PrimaryGeneratedColumn("increment")
  CategoryTwoId: number;

  @Column('int')
  CategoryOneId: number;

  @Column('nvarchar')
  CategoryName: string;

  @Column('nvarchar', { nullable: true })
  CatCode: string;

  @CreateDateColumn()
  CreateDate: Date;
}