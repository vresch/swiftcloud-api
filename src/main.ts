import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const host = configService.get('HOST');
  const port = configService.get('PORT');
  await app.listen(port);
  Logger.log(`Server is bootstrapped: http://${host}:${port}`);
}

bootstrap();
