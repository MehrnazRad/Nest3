import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryOneDto } from './create-category-one.dto';

export class UpdateCategoryOneDto extends PartialType(CreateCategoryOneDto) {}
