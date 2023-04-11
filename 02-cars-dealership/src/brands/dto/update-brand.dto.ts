import { IsString, MinLength } from 'class-validator';
// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';


/*
El partialType hace que todas las propiedades que estoy heredando
sean opcionales
*/
// export class UpdateBrandDto extends PartialType(CreateBrandDto) {}

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}
