import { DraftsEntity } from 'src/Modules/Entity/MySql/drafts.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('Kinds')
export class KindsEntity {
  @OneToMany(() => DraftsEntity, draft => draft.kind)
    drafts: DraftsEntity[];

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