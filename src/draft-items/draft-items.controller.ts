import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DraftItemsService } from './draft-items.service';
import { CreateDraftItemDto } from './dto/create-draft-item.dto';
import { UpdateDraftItemDto } from './dto/update-draft-item.dto';

@Controller('draft-items')
export class DraftItemsController {
  constructor(private readonly draftItemsService: DraftItemsService) {}

  @Post()
  create(@Body() createDraftItemDto: CreateDraftItemDto) {
    return this.draftItemsService.create(createDraftItemDto);
  }

  @Get()
  findAll() {
    return this.draftItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.draftItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDraftItemDto: UpdateDraftItemDto) {
    return this.draftItemsService.update(+id, updateDraftItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.draftItemsService.remove(+id);
  }
}
