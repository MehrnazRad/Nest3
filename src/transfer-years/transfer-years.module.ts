import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransferYearsEntity } from './entities/transfer-years.entity';
import { TransferYearsService } from './transfer-years.service';
import { TransferYearsController } from './transfer-years.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TransferYearsEntity])],
  controllers: [TransferYearsController],
  providers: [TransferYearsService],
})
export class TransferYearsModule {}