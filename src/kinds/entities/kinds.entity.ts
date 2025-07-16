import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('Kinds')
export class KindsEntity {
  @PrimaryGeneratedColumn("increment")
  KindId: number;

  @Column('nvarchar')
  KindName: string;

  @Column('bit')
  IsUserAdd: boolean;

  @CreateDateColumn()
  CreateDate: Date;

  @Column('int')
  TypeOperation: number;

  @Column('bit')
  IsDeleted: boolean;
}