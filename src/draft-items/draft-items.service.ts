import { Injectable } from '@nestjs/common';
import { CreateDraftItemDto } from './dto/create-draft-item.dto';
import { UpdateDraftItemDto } from './dto/update-draft-item.dto';

@Injectable()
export class DraftItemsService {
  create(createDraftItemDto: CreateDraftItemDto) {
    return 'This action adds a new draftItem';
  }

  findAll() {
    return `This action returns all draftItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} draftItem`;
  }

  update(id: number, updateDraftItemDto: UpdateDraftItemDto) {
    return `This action updates a #${id} draftItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} draftItem`;
  }
}
