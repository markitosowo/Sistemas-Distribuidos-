import { IsString, IsOptional, IsNumber, IsDateString  } from "class-validator";

export class CreateSongDto {
//El como va a ser valida los atributos de la clase, que es lo que se va a recibir en el body de la peticion, y que tipo de dato es, y si es opcional o no
 @IsString()
  name!: string;

  @IsString()
  artista!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  Date?: string;

  @IsOptional()
  @IsString()
  album?: string;

  @IsOptional()
  @IsString()
  genero?: string;

}
