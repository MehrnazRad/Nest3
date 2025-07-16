import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DraftItemsEntity } from './entities/draft-items.entity';
import { DraftItemsService } from './draft-items.service';
import { DraftItemsController } from './draft-items.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DraftItemsEntity])],
  controllers: [DraftItemsController],
  providers: [DraftItemsService],
})
export class DraftItemsModule {}