import { Injectable } from '@nestjs/common';
import { CreateCategoryTwoeDto } from './dto/create-category-twoe.dto';
import { UpdateCategoryTwoeDto } from './dto/update-category-twoe.dto';

@Injectable()
export class CategoryTwoesService {
  create(createCategoryTwoeDto: CreateCategoryTwoeDto) {
    return 'This action adds a new categoryTwoe';
  }

  findAll() {
    return `This action returns all categoryTwoes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryTwoe`;
  }

  update(id: number, updateCategoryTwoeDto: UpdateCategoryTwoeDto) {
    return `This action updates a #${id} categoryTwoe`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryTwoe`;
  }
}
