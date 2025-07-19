import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { CategoryTwoesEntity } from 'src/Modules/Entity/MySql/category-twoes.entity';
import { JoinColumn, ManyToOne } from 'typeorm';
import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';

@Entity('CategoryThrees')
export class CategoryThreesEntity {
 @OneToMany(() => ProductsEntity, product => product.categoryThree)
   categoryThrees: ProductsEntity[];

@ManyToOne(() => CategoryTwoesEntity)
@JoinColumn({ name: 'CategoryTwoId' })
categoryTwo: CategoryTwoesEntity;


  @PrimaryGeneratedColumn("increment")
  CategoryThreeId: number;

  @Column('int', { nullable: true })
  CategoryTwoId: number;

  @Column('nvarchar')
  CategoryName: string;

  @Column('nvarchar', { nullable: true })
  CatCode: string;

  @CreateDateColumn()
  CreateDate: Date;
}