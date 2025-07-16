import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('TransferYears')
export class TransferYearsEntity {
  @PrimaryGeneratedColumn("increment")
  TransferYearId: number;

  @Column('nvarchar', { length: 15 })
  NewYear: string;

  @Column('bit')
  IsActive: boolean;

  @Column('nvarchar', { nullable: true })
  CreateBy: string;

  @CreateDateColumn()
  CreateDate: Date;
}