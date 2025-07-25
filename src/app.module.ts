import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { CustomConfigsModule } from './Modules/Config/config.module';
import { TypeOrmDbConfig } from './Modules/Config/typeorm.config';
import { LoggerMiddleware } from './app.middleware';
import { AnbarModule } from './anbar/anbar.module';
import { ViewModule } from './view/view.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmDbConfig,
      inject: [CustomConfigsModule]
    }),
    CustomConfigsModule,
    UserModule,
    ProductModule,
    AnbarModule,
    ViewModule,
    PostModule,
  ],
  controllers: [AppController],
  providers: [],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
