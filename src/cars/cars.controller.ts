import { Controller, ParseIntPipe } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this.carsService.findOneById(id);
    }
}
