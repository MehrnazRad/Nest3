import { Module } from '@nestjs/common';
import { CategoryOnesService } from './category-ones.service';
import { CategoryOnesController } from './category-ones.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import {CategoryOnesEntity } from './entities/category-ones.entity'

@Module({
  imports: [TypeOrmModule.forFeature([CategoryOnesEntity])],
  controllers: [CategoryOnesController],
  providers: [CategoryOnesService],
})
export class CategoryOnesModule {}
