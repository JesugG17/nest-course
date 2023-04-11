import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
async function main() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los datos que no queremos recibir, pero si tira un error si es que el cliente los manda
      forbidNonWhitelisted: true // Tira un error si es que se manda data que yo no quiero recibir 
    })
  )

  await app.listen(3000);
}
main();
