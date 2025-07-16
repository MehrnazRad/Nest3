import { PartialType } from '@nestjs/mapped-types';
import { CreateDraftItemDto } from './create-draft-item.dto';

export class UpdateDraftItemDto extends PartialType(CreateDraftItemDto) {}
