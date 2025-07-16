import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KindsEntity } from './entities/kinds.entity';
import { KindsService } from './kinds.service';
import { KindsController } from './kinds.controller';

@Module({
  imports: [TypeOrmModule.forFeature([KindsEntity])],
  controllers: [KindsController],
  providers: [KindsService],
})
export class KindsModule {}