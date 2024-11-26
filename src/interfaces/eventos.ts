//petición get, put, delete
export interface Eventos{
    id: string;
    titulo:string;
    descripcion:string;
    imagen: string; 
    fecha: string; 
    lugar: string;
    comentario:Comentario[];
}

//petición post
export interface EventosCrear{
    titulo:string;
    descripcion:string;
    imagen: string;
    fecha: string; 
    lugar: string;
    comentario:Comentario[];
}

export interface Comentario{
    usuario:string;
    comentario:string;
}