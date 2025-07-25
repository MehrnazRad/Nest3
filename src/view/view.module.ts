import { Module } from '@nestjs/common';
import { ViewController } from './view.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [ProductModule],
  controllers: [ViewController]
})
export class ViewModule {}
