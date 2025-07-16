import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryThreeDto } from './create-category-three.dto';

export class UpdateCategoryThreeDto extends PartialType(CreateCategoryThreeDto) {}
