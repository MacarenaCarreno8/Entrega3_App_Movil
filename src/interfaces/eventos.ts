//petición get, put, delete
export interface Eventos{
    id: number;
    titulo:string;
    descripcion:string;
    imagen: string; //wooooo
    fecha: string; //wooooo
    lugar: string;
}

//petición post
export interface EventosCrear{
    titulo:string;
    descripcion:string;
    fecha: string; //wooooo
    lugar: string;
}