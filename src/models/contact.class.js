export class Contact  {
    nombre = '';
    apellido = '';
    email = '';
    isConectado = false; 

    constructor(nombre,apellido,email,isConectado)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.isConectado = isConectado;
    }
}