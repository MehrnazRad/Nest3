import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersEntity } from './entities/customers.entity';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomersEntity])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}