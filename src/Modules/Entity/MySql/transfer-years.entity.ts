import { DraftsEntity } from 'src/Modules/Entity/MySql/drafts.entity';
import { InventoriesEntity } from 'src/Modules/Entity/MySql/inventories.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('TransferYears')
export class TransferYearsEntity {
  @OneToMany(() => DraftsEntity, draft => draft.transferYear)
    drafts: DraftsEntity[];

  @OneToMany(() => InventoriesEntity, inventory => inventory.transferYear)
  inventories: InventoriesEntity[];  

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