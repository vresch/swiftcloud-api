import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const docConfig = new DocumentBuilder()
    .setTitle('SwiftCloud API')
    .setDescription('Queries')
    .setVersion('1.0')
    .addTag('song')
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('api', app, document);

  const configService = app.get(ConfigService);
  const host = configService.get('HOST');
  const port = configService.get('PORT');
  await app.listen(port);
  const server = `${host}:${port}`;
  Logger.log(`Server is bootstrapped: http://${server}`);
  Logger.log(`API Documentation: http://${server}/api`);
  Logger.log(`GraphQL Playground: http://${server}/graphql`);
}

bootstrap();
