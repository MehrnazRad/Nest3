import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CategoryOnesService } from './category-ones.service';
import { CreateCategoryOneDto } from './dto/create-category-one.dto';
import { UpdateCategoryOneDto } from './dto/update-category-one.dto';

@Controller('category-ones')
export class CategoryOnesController {
  constructor(private readonly categoryOnesService: CategoryOnesService) {}

  @Post()
  create(@Body() createCategoryOneDto: CreateCategoryOneDto) {
    return this.categoryOnesService.create(createCategoryOneDto);
  }

  @Get()
  findAll() {
    return this.categoryOnesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryOnesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCategoryOneDto: UpdateCategoryOneDto) {
    return this.categoryOnesService.update(+id, updateCategoryOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryOnesService.remove(+id);
  }
}
