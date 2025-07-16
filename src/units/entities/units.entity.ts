import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('Units')
export class UnitsEntity {
  @PrimaryGeneratedColumn("increment")
  UnitId: number;

  @Column('nvarchar')
  Name: string;

  @CreateDateColumn()
  CreateDate: Date;
}
