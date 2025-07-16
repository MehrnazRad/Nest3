import { Injectable } from '@nestjs/common';
import { CreateTransferYearDto } from './dto/create-transfer-year.dto';
import { UpdateTransferYearDto } from './dto/update-transfer-year.dto';

@Injectable()
export class TransferYearsService {
  create(createTransferYearDto: CreateTransferYearDto) {
    return 'This action adds a new transferYear';
  }

  findAll() {
    return `This action returns all transferYears`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transferYear`;
  }

  update(id: number, updateTransferYearDto: UpdateTransferYearDto) {
    return `This action updates a #${id} transferYear`;
  }

  remove(id: number) {
    return `This action removes a #${id} transferYear`;
  }
}
