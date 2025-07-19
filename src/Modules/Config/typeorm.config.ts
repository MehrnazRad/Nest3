import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { UnitsEntity } from '../Entity/MySql/units.entity';
import { CategoryOnesEntity } from '../Entity/MySql/category-ones.entity';
import { CategoryTwoesEntity } from '../Entity/MySql/category-twoes.entity';
import { CategoryThreesEntity } from '../Entity/MySql/category-threes.entity';
import { InventoriesEntity } from '../Entity/MySql/inventories.entity';
import { DraftItemsEntity } from '../Entity/MySql/draft-items.entity';
import { DraftsEntity } from '../Entity/MySql/drafts.entity';
import { KindsEntity } from '../Entity/MySql/kinds.entity';
import { CustomersEntity } from '../Entity/MySql/customers.entity';
import { TransferYearsEntity } from '../Entity/MySql/transfer-years.entity';
import { StoragesEntity } from '../Entity/MySql/storages.entity';
import { ProductsEntity } from '../Entity/MySql/products.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmDbConfig implements TypeOrmOptionsFactory {
    constructor(private readonly configService: ConfigService) { }

    createTypeOrmOptions(
        connectionName?: string,
    ): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
        return {
            type: 'mysql',
            host: this.configService.get('Db.host'),
            port: this.configService.get('Db.port'),
            username: this.configService.get('Db.username'),
            password: this.configService.get('Db.password'),
            database: this.configService.get('Db.database'),
            synchronize: false,
            logging: false,
            entities: [
                UnitsEntity,
                CategoryOnesEntity,
                CategoryTwoesEntity,
                CategoryThreesEntity,
                ProductsEntity,
                StoragesEntity,
                TransferYearsEntity,
                CustomersEntity,
                KindsEntity,
                DraftsEntity,
                DraftItemsEntity,
                InventoriesEntity,
            ]
        }
    }
}