import axios from 'axios';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }`;
    }

    scream() {
        console.log(this.name);
    }

    async getMoves() {
        const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const { moves } = data;
        // const moves = 10;

        console.log( moves );        
        // return resp;
    }
}



export const charmander = new Pokemon(1, 'charmander');
charmander.getMoves()