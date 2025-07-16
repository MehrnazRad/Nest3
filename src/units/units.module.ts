import { Module } from '@nestjs/common';
import { UnitsService } from './units.service';
import { UnitsController } from './units.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import {UnitsEntity } from './entities/units.entity'

@Module({
  imports: [TypeOrmModule.forFeature([UnitsEntity])],
  controllers: [UnitsController],
  providers: [UnitsService],
})
export class UnitsModule {}




