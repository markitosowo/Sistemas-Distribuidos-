import { PartialType } from '@nestjs/mapped-types';
import { CreateSongDto } from './create-song.dto.js';
import { IsOptional, IsString, IsUUID, IsNumber} from 'class-validator';

export class UpdateSongDto extends PartialType(CreateSongDto) {
 //Actualizacion 
//string y que si es opconal 
@IsString()
@IsOptional()
@IsUUID()
id? : string


}
