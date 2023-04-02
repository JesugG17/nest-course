import { v4 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';

import { Car } from './interfaces/car.interface';
import { CreateCarDTO } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        // {
        //     id: uuid(),
        //     brand: 'Toyota',
        //     model: 'Corolla'
        // }
    ];

    findAll() {
        return this.cars;
    }

    findOneById(id: string) {

        const car = this.cars.find( car => car.id === id);

        if (!car) {
            throw new NotFoundException(`Car with id ${ id } not found`);
        }
        
        return car;
    }

    create( createCarDto: CreateCarDTO ) {

        const newCar = {
            id: uuid(),
            ...createCarDto
        }

        this.cars.push(newCar);

        return newCar;
    }

    update( id: string, updateCarDto: UpdateCarDto ) {

        let car = this.findOneById(id);

        this.cars = this.cars.map( car => {
            if (car.id === id) {

                return car = {
                    ...car,
                    ...updateCarDto,
                    id
                };
            }
            return car;
         })
        
        return car; // Carro actualizado
    }


    delete( id: string ) {

        this.findOneById(id);
        this.cars = this.cars.filter( car => car.id !== id );

    }

    fillCarsWithSeedData( cars: Car[] ) {
        this.cars = cars
    }
}
