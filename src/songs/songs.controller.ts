import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { SongsService } from './songs.service.js';
import { CreateSongDto } from './dto/create-song.dto.js';
import { UpdateSongDto } from './dto/update-song.dto.js';
//metodos 
@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
//metodo post, se usa para crear una cancion recibiendo un objeto tipo song, 
// y lo envia al servicio para que lo guarde en la lista de canciones
  @Post()
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }
 // metodo get, se usa para obtener todas las canciones
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
 //metodo get, se usa para obtener una cancion mediante ids se usa el pipe ParseUUIDPipe para validar que el id sea un uuid
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.songsService.findOne(id);
  }
 //metodo patch, se usa para actualizar una cancion mediante ids y el objeto tipo song
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateSongDto: UpdateSongDto) {
    return this.songsService.update(id, updateSongDto);
  }
  //metodo delete
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.songsService.remove(id);
  }
}
