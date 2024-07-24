export interface Usuario{
    nombre:string;
    apellido:string;
    correo:string;
    password:string;
    id?:string;
}

export interface PersonaNBA {
    id?: string;
    nombre: string;
    apellido: string;
    correo: string;
    edad: number;
    direccion: string;
    conferencia: string;
}