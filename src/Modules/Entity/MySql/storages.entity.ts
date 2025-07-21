import { DraftsEntity } from 'src/Modules/Entity/MySql/drafts.entity';
import { InventoriesEntity } from 'src/Modules/Entity/MySql/inventories.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { CustomersEntity } from './customers.entity';

@Entity('Storages')
export class StoragesEntity {
  @OneToMany(() => CustomersEntity, customer => customer.storage)
 customers: CustomersEntity[];

  @PrimaryGeneratedColumn("increment")
  StorageId: number;

  @Column('nvarchar', { nullable: true })
  Name: string;

  @CreateDateColumn()
  CreateDate: Date;

  @OneToMany(() => InventoriesEntity, inventory => inventory.storage)
  inventories: InventoriesEntity[];
  @OneToMany(() => DraftsEntity, draft => draft.storage)
  drafts: DraftsEntity[];
}