import { ProductsEntity } from 'src/Modules/Entity/MySql/products.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('Units')
export class UnitsEntity {
  @OneToMany(() => ProductsEntity, product => product.unit)
  units: ProductsEntity[];

  @PrimaryGeneratedColumn("increment")
  UnitId: number;

  @Column('nvarchar')
  Name: string;

  @CreateDateColumn()
  CreateDate: Date;
}
