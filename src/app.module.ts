import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { BrandsModule } from './brands/brands.module';


/*
 El modulo principal es el que tendra la referencia
 a toda la aplicacion
*/
@Module({
  imports: [CarsModule, BrandsModule],
})
export class AppModule {}
