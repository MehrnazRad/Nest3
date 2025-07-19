import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { OneToMany } from 'typeorm';
import { DraftsEntity } from 'src/Modules/Entity/MySql/drafts.entity';


@Entity('Customers')
export class CustomersEntity {
 @OneToMany(() => DraftsEntity, draft => draft.customer)
 drafts: DraftsEntity[];



  @PrimaryGeneratedColumn("increment")
  CustomerId: number;

  @Column('int')
  StorageId: number;

  @Column('nvarchar')
  Name: string;

  @Column('nvarchar', { nullable: true })
  Email: string;

  @Column('nvarchar', { nullable: true })
  Website: string;

  @Column('nvarchar', { nullable: true })
  PhoneNumber: string;

  @Column('nvarchar', { nullable: true })
  FaxNumber: string;

  @Column('nvarchar', { nullable: true })
  MobileNumber: string;

  @Column('nvarchar', { nullable: true })
  PostalCode: string;

  @Column('nvarchar', { nullable: true })
  Address: string;

  @CreateDateColumn()
  CreateDate: Date;

  @Column('nvarchar', { nullable: true })
  Description: string;

  @Column('bit')
  Supplier: boolean;

  @Column('bit')
  Buyer: boolean;

  @Column('bit')
  IsActive: boolean;

  @Column('int')
  State: number;
}