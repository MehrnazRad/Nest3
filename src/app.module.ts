import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './Products/products.module';
import { UnitsModule } from './units/units.module';
import { InventoriesModule } from './inventories/inventories.module';
import { CategoryOnesModule } from './category-ones/category-ones.module';
import { CategoryTwoesModule } from './category-twoes/category-twoes.module';
import { CategoryThreesModule } from './category-threes/category-threes.module';
import { DraftItemsModule } from './draft-items/draft-items.module';
import { DraftsModule } from './drafts/drafts.module';
import { CustomersModule } from './customers/customers.module';
import { KindsModule } from './kinds/kinds.module';
import { TransferYearsModule } from './transfer-years/transfer-years.module';
import { StoragesModule } from './storages/storages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Mehr@2003',
      database: 'anbar',
      autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
    }),
    ProductsModule,
    UnitsModule,
    InventoriesModule,
    CategoryOnesModule,
    CategoryTwoesModule,
    CategoryThreesModule,
    DraftItemsModule,
    DraftsModule,
    CustomersModule,
    KindsModule,
    TransferYearsModule,
    StoragesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
