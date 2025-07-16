import { Module } from '@nestjs/common';
import { InventoriesService } from './inventories.service';
import { InventoriesController } from './inventories.controller';
import { InventoriesEntity} from './entities/inventories.entity';
import {TypeOrmModule} from '@nestjs/typeorm'

@Module({
 imports: [TypeOrmModule.forFeature([InventoriesEntity])],
  controllers: [InventoriesController],
  providers: [InventoriesService],
})
export class InventoriesModule {}
