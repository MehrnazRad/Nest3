import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryTwoesService } from './category-twoes.service';
import { CreateCategoryTwoeDto } from './dto/create-category-twoe.dto';
import { UpdateCategoryTwoeDto } from './dto/update-category-twoe.dto';

@Controller('category-twoes')
export class CategoryTwoesController {
  constructor(private readonly categoryTwoesService: CategoryTwoesService) {}

  @Post()
  create(@Body() createCategoryTwoeDto: CreateCategoryTwoeDto) {
    return this.categoryTwoesService.create(createCategoryTwoeDto);
  }

  @Get()
  findAll() {
    return this.categoryTwoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryTwoesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryTwoeDto: UpdateCategoryTwoeDto) {
    return this.categoryTwoesService.update(+id, updateCategoryTwoeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryTwoesService.remove(+id);
  }
}
