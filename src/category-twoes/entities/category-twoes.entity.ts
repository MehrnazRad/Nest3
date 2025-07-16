import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { CategoryOnesEntity } from 'src/category-ones/entities/category-ones.entity';
import { JoinColumn , ManyToOne } from 'typeorm';

@Entity('CategoryTwoes')
export class CategoryTwoesEntity {
  @ManyToOne(() => CategoryOnesEntity)
@JoinColumn({ name: 'CategoryOneId' })
categoryOne: CategoryOnesEntity;

  @PrimaryGeneratedColumn("increment")
  CategoryTwoId: number;

  @Column('int', { nullable: true })
  CategoryOneId: number;

  @Column('nvarchar')
  CategoryName: string;

  @Column('nvarchar', { nullable: true })
  CatCode: string;

  @CreateDateColumn()
  CreateDate: Date;
}