import { Injectable } from '@nestjs/common';
import { CreateKindDto } from './dto/create-kind.dto';
import { UpdateKindDto } from './dto/update-kind.dto';

@Injectable()
export class KindsService {
  create(createKindDto: CreateKindDto) {
    return 'This action adds a new kind';
  }

  findAll() {
    return `This action returns all kinds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kind`;
  }

  update(id: number, updateKindDto: UpdateKindDto) {
    return `This action updates a #${id} kind`;
  }

  remove(id: number) {
    return `This action removes a #${id} kind`;
  }
}
