import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Storages')
export class StoragesEntity {
  @PrimaryGeneratedColumn("increment")
  StorageId: number;

  @Column('nvarchar', { nullable: true })
  Name: string;

  @Column('datetime', { nullable: true })
  CreateDate: Date;
}