import { Controller, ParseIntPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common/decorators';
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

    @Post()
    createCar(@Body() payload: any ) {
        return payload;
    }

    @Patch(':id')
    updateCar(@Body() payload: any ) {
        return payload;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number ) {
        return {
            id,
            msg: 'todo ok'
        };
    }
}
