import { PartialType } from '@nestjs/mapped-types';
import { CreateTransferYearDto } from './create-transfer-year.dto';

export class UpdateTransferYearDto extends PartialType(CreateTransferYearDto) {}
