import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {

  /*
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }));
  await app.listen(3000);
  */

    const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Usuários')
    .setDescription('Documentação da API de usuários')
    .setVersion('1.0')
    .addTag('usuarios')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();

