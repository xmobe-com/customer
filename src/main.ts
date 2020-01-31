import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log('start server');
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('server listen on: http://localhost:3000');
}
bootstrap();
