import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryThreesService } from './category-threes.service';
import { CreateCategoryThreeDto } from './dto/create-category-three.dto';
import { UpdateCategoryThreeDto } from './dto/update-category-three.dto';

@Controller('category-threes')
export class CategoryThreesController {
  constructor(private readonly categoryThreesService: CategoryThreesService) {}

  @Post()
  create(@Body() createCategoryThreeDto: CreateCategoryThreeDto) {
    return this.categoryThreesService.create(createCategoryThreeDto);
  }

  @Get()
  findAll() {
    return this.categoryThreesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryThreesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryThreeDto: UpdateCategoryThreeDto) {
    return this.categoryThreesService.update(+id, updateCategoryThreeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryThreesService.remove(+id);
  }
}
