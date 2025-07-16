import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryTwoeDto } from './create-category-twoe.dto';

export class UpdateCategoryTwoeDto extends PartialType(CreateCategoryTwoeDto) {}
