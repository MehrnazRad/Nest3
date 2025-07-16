import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KindsService } from './kinds.service';
import { CreateKindDto } from './dto/create-kind.dto';
import { UpdateKindDto } from './dto/update-kind.dto';

@Controller('kinds')
export class KindsController {
  constructor(private readonly kindsService: KindsService) {}

  @Post()
  create(@Body() createKindDto: CreateKindDto) {
    return this.kindsService.create(createKindDto);
  }

  @Get()
  findAll() {
    return this.kindsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kindsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKindDto: UpdateKindDto) {
    return this.kindsService.update(+id, updateKindDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kindsService.remove(+id);
  }
}
