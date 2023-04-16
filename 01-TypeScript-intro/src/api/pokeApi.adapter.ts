import axios from "axios";

export interface HttpAdapter {
    
    get<T>( url: string ): Promise<T>;
}


export class PokeApiAdapterFetch implements HttpAdapter {

    async get<T>( url: string ) {
        const resp = await fetch(url);
        const data: T = await resp.json();

        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {

    async get<T>( url: string ) {
        // peticion get
        const { data } = await axios.get<T>(url);
        return data;
    }

    async post<T>( url: string, data: any ) {
        // Peticion post

    }

    async patch<T>( url: string, data: any ) {
        // Peticion patch

    }

    async delete<T>( url: string ) {
        // Peticion delete

    }

}