import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { CategoryTwoesEntity } from 'src/category-twoes/entities/category-twoes.entity';
import { JoinColumn, ManyToOne } from 'typeorm';

@Entity('CategoryThrees')
export class CategoryThreesEntity {
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