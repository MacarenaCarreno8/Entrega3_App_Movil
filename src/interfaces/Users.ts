export interface Users{
    id: number,
    run: string,
    email: string,
    nombre: string,
    apellido: string,
    fono: string,
    password: string,
    isactive: boolean,
    imageUrl: string
}


export interface UserNuevo{
    run: string,
    email: string,
    nombre: string,
    apellido: string,
    fono: string,
    password: string,
    isactive: boolean,
    imageUrl: string,
}