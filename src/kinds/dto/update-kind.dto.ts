import { PartialType } from '@nestjs/mapped-types';
import { CreateKindDto } from './create-kind.dto';

export class UpdateKindDto extends PartialType(CreateKindDto) {}
