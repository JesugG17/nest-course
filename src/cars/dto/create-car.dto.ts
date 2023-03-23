import { IsString } from "class-validator";

/*
Un DTO no es mas que un objeto que me permitira
transferir una data en diferentes piezas de la aplicacion
*/
export class CreateCarDTO {

    @IsString({ message: 'Un mensaje personalizado' })
    readonly brand: string;

    @IsString()
    readonly model: string;

}