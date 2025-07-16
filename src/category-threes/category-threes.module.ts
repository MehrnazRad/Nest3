import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryThreesEntity } from './entities/category-threes.entity';
import { CategoryThreesService } from './category-threes.service';
import { CategoryThreesController } from './category-threes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryThreesEntity])],
  controllers: [CategoryThreesController],
  providers: [CategoryThreesService],
})
export class CategoryThreesModule {}