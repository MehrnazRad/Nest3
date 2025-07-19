// import { DataSource } from 'typeorm';
// import { UnitsEntity } from './MySql/units.entity';
// import { CategoryOnesEntity } from './MySql/category-ones.entity';
// import { CategoryTwoesEntity } from './MySql/category-twoes.entity';
// import { CategoryThreesEntity } from './MySql/category-threes.entity';
// import { ProductsEntity } from './MySql/products.entity';
// import { StoragesEntity } from './MySql/storages.entity';
// import { TransferYearsEntity } from './MySql/transfer-years.entity';
// import { CustomersEntity } from './MySql/customers.entity';
// import { KindsEntity } from './MySql/kinds.entity';
// import { DraftsEntity } from './MySql/drafts.entity';
// import { DraftItemsEntity } from './MySql/draft-items.entity';
// import { InventoriesEntity } from './MySql/inventories.entity';

// export const AppDataSource = new DataSource({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'Mehr@2003', 
//   database: 'anbar',      
//   synchronize: false,
//   logging: false,
//   entities: [
//     UnitsEntity,
//     CategoryOnesEntity,
//     CategoryTwoesEntity,
//     CategoryThreesEntity,
//     ProductsEntity,
//     StoragesEntity,
//     TransferYearsEntity,
//     CustomersEntity,
//     KindsEntity,
//     DraftsEntity,
//     DraftItemsEntity,
//     InventoriesEntity,
//   ],
//   migrations: ['src/migrations/*.ts'],
// });