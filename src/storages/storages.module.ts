import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoragesEntity } from './entities/storages.entity';
import { StoragesService } from './storages.service';
import { StoragesController } from './storages.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StoragesEntity])],
  controllers: [StoragesController],
  providers: [StoragesService],
})
export class StoragesModule {}