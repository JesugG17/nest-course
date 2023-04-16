import { PokeApiAdapter, PokeApiAdapterFetch, HttpAdapter } from '../api/pokeApi.adapter';
import { PokeapiResponse } from '../interfaces/pokeapi-response.interface';


/*
    la inyeccion de dependencias no es mas que
    añadirle una dependencia a una clase
*/
export class Pokemon {

    // private id: number;
    // private name: string;
    // private http: PokeApiAdapter;

    constructor(
        public readonly id: number,
        public name: string,
        private readonly http: HttpAdapter
    ) {}

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }`;
    }

    scream() {
        console.log(this.name);
    }

    async getMoves() {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        // const moves = 10;
        console.log( data.moves );        
        // return resp;
    }
}


const pokeApiAdapterFetch = new PokeApiAdapterFetch();
// const pokeApiDapterAxios = new PokeApiAdapter();

export const charmander = new Pokemon(1, 'charmander', pokeApiAdapterFetch);
charmander.getMoves()