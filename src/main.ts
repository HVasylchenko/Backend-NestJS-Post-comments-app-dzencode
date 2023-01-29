import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle("Backend Nestjs dzencode test task")
  .setDescription("REST API documentation")
  .setVersion("1.0.0")
  .addTag("Vasylchenko")
  .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("/docs", app, document)
  app.useGlobalPipes( new ValidationPipe())

  await app.listen(PORT, ()=> console.log(`server run on port: ${PORT}`));
}
start();
