import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransferYearsService } from './transfer-years.service';
import { CreateTransferYearDto } from './dto/create-transfer-year.dto';
import { UpdateTransferYearDto } from './dto/update-transfer-year.dto';

@Controller('transfer-years')
export class TransferYearsController {
  constructor(private readonly transferYearsService: TransferYearsService) {}

  @Post()
  create(@Body() createTransferYearDto: CreateTransferYearDto) {
    return this.transferYearsService.create(createTransferYearDto);
  }

  @Get()
  findAll() {
    return this.transferYearsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferYearsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransferYearDto: UpdateTransferYearDto) {
    return this.transferYearsService.update(+id, updateTransferYearDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transferYearsService.remove(+id);
  }
}
