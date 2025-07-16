import { Injectable } from '@nestjs/common';
import { CreateCategoryOneDto } from './dto/create-category-one.dto';
import { UpdateCategoryOneDto } from './dto/update-category-one.dto';

@Injectable()
export class CategoryOnesService {
  create(createCategoryOneDto: CreateCategoryOneDto) {
    return 'This action adds a new categoryOne';
  }

  findAll() {
    return `This action returns all categoryOnes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryOne`;
  }

  update(id: number, updateCategoryOneDto: UpdateCategoryOneDto) {
    return `This action updates a #${id} categoryOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryOne`;
  }
}
