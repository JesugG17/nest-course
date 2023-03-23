import { Controller, ParseIntPipe, ParseUUIDPipe } from '@nestjs/common';
import { Body, Delete, Get, Param, Patch, Post } from '@nestjs/common/decorators';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDto } from './dto';


@Controller('cars')
// @UsePipes( ValidationPipe ) USAR EL VALIDATION PIPE A NIVEL CONTROLADOR
export class CarsController {

    constructor(
        private readonly carsService: CarsService
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this.carsService.findOneById(id);
    }

    @Post()
    // @UsePipes( ValidationPipe ) USAR EL VALIDATION PIPE A NIVEL ENDPOINT
    createCar(@Body() createCarDTO: CreateCarDTO ) {
        return this.carsService.create(createCarDTO);
    }

    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateCarDto: UpdateCarDto ) {
        return this.carsService.update(id, updateCarDto);
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string ) {
        return this.carsService.delete(id);
    }
}
