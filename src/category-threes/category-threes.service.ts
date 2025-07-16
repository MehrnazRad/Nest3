import { Injectable } from '@nestjs/common';
import { CreateCategoryThreeDto } from './dto/create-category-three.dto';
import { UpdateCategoryThreeDto } from './dto/update-category-three.dto';

@Injectable()
export class CategoryThreesService {
  create(createCategoryThreeDto: CreateCategoryThreeDto) {
    return 'This action adds a new categoryThree';
  }

  findAll() {
    return `This action returns all categoryThrees`;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoryThree`;
  }

  update(id: number, updateCategoryThreeDto: UpdateCategoryThreeDto) {
    return `This action updates a #${id} categoryThree`;
  }

  remove(id: number) {
    return `This action removes a #${id} categoryThree`;
  }
}
