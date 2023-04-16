
export const pokemonIds = [1,20,30,34,55];

/*
    Las interfaces sirven para poder hacer un tipo,
    por ejemplo, con esto podemos obligar a que en un
    objeto literal esten ciertos campos de la interfaz
    y que sean del mismo tipo
*/


// La diferencia entre una interface y una clase, es que la interface no se puede instanciar
interface Pokemon {
    id: number;
    name: string;
    age?: number; // Al poner el simbolo de '?' significa que esta propiedad es opcional
};

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'bulbasaur'
};

const pokemons: Pokemon[] = [bulbasaur];

console.log(pokemons);


