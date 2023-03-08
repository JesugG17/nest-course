import { Controller } from '@nestjs/common';
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
    getCarById(@Param('id') id: string) {
        return this.carsService.findOneById(Number(id));
    }
}
