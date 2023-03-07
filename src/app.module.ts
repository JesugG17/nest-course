import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';


/*
 El modulo principal es el que tendra la referencia
 a toda la aplicacion
*/
@Module({
  imports: [CarsModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule {}
