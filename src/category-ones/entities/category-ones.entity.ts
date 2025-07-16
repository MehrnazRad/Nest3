import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('CategoryOnes')
export class CategoryOnesEntity {
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