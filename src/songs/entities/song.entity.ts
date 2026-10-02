import { } from 'class-validator';
//interface que se usa para actualizar una cancion
interface UpdateWithSongs{
    name?: string,
    description? : string,
    artista? : string,
    Date? : Date,
    album? : string,
    genero? : string

}
//modelo de datos simulados a una tabla de bases de datos entity ( cuercpo de la cancion)
export class Song {

// mi constructor es el que permite crear un objeto 
//Que es del tipo cancion 
    constructor(
    public id: String, 
    public name: String, 
    public description? : String,
    public artista?: string,
    public Date? : Date,
    public album?: string,
    public genero? :string
){}
//metodo que se usa en la clase songs.service.ts para actualizar una cancion mediante ids y el objeto tipo song
updatewith({name, description, artista, Date, album, genero}: UpdateWithSongs){
this.name = name?? this.name;
this.description = description?? this.description;
this.artista = artista?? this.artista;
this.Date = Date?? this.Date;
this.album = album?? this.album;
this.genero = genero?? this.genero;
}


}