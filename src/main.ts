import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { logger: ["debug", "error", "warn"] });
  app.enableCors({ origin: "*" })
  app.useStaticAssets(join(process.cwd(), 'public'))

  const configService = app.get(ConfigService)
  const port = configService.get("App.PORT_SERVER");

  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('server mehrnaz')
    .setDescription('description')
    .setVersion('0.0.1')
    .build());

  SwaggerModule.setup('api/swagger', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(port, () => {
    console.log("http://localhost:" + port);
    console.log("http://localhost:" + port + "/api/swagger");
  });
}
bootstrap();
