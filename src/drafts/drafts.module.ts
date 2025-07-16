import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DraftsEntity } from './entities/drafts.entity';
import { DraftsService } from './drafts.service';
import { DraftsController } from './drafts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DraftsEntity])],
  controllers: [DraftsController],
  providers: [DraftsService],
})
export class DraftsModule {}