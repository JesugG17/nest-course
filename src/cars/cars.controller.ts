import { Controller } from '@nestjs/common';
import { Get, Param } from '@nestjs/common/decorators';

@Controller('cars')
export class CarsController {

    private cars = ['Toyota', 'Honda', 'Jeep']; 

    @Get()
    getAllCars() {
        return this.cars;
    }

    @Get(':id')
    getCarById(@Param('id') id: number) {
        return { car: this.cars[id] };
    }
}
