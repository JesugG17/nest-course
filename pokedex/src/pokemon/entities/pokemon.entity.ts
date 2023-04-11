import { Document } from "mongoose";
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

/*
* Usualmente las entidades hacen referencia a una "tabla" de las bases de datos
*/
@Schema()
export class Pokemon extends Document {

    // id: string; MONGO YA LO DA
    @Prop({
        unique: true,
        index: true
    })
    name: string;
    
    @Prop({
        unique: true,
        index: true
    })
    no: number;

}


export const PokemonSchema = SchemaFactory.createForClass( Pokemon );
