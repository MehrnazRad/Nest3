import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryTwoesEntity } from './entities/category-twoes.entity';
import { CategoryTwoesController } from './category-twoes.controller';
import { CategoryTwoesService } from './category-twoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryTwoesEntity])],
  controllers: [CategoryTwoesController],
  providers: [CategoryTwoesService],
})
export class CategoryTwoesModule {}