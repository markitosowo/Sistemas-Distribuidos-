import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto.js';
import { UpdateSongDto } from './dto/update-song.dto.js';
import { Song } from './entities/song.entity.js';
import {v4 as Uuidv4} from 'uuid';

@Injectable()
export class SongsService {
private readonly songs: Song[]= [];
//metodo para crear una cancion recibe un objto tipo song y lo agregamos a una lista de canciones

  create(createSongDto: CreateSongDto) {
    const { name, artista, description, Date: dateValue, album, genero } = createSongDto;
    const songDate = dateValue ? new Date(dateValue) : undefined;
    const Newsong = new Song(Uuidv4(), name, artista, description, songDate, album, genero);
    this.songs.push(Newsong);
    return Newsong;
  }
//metodos para obtener todas la canciones
  findAll() {
    return `This action returns all songs`;
  }
//metodo para obtener una cancion mediante ids 
  findOne(id: string) {
    return this.songs.find(song => song.id === id);
  }
//metodo para actualizar una cancion mediante ids y el objeto tipo song 
  update(id: string, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }
//metodo para eliminar una cancion mediante ids 
  remove(id: string) {
    return `This action removes a #${id} song`;
  }
}
//estos metodos los usa postman para hacer las peticiones y ver si funcionan correctamente,
//  si es asi los guradamos en una lista del y si no es asi nos envian un error