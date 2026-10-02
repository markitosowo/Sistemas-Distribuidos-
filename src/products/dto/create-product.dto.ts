import { Type } from "class-transformer";
// esste import funciona para transformar el tipo de dato que se recibe en el body de la peticion, ya que por defecto todo lo que se recibe es string, y si queremos recibir un number, tenemos que transformarlo a number.
import { IsNumber, IsOptional, IsString } from "class-validator";
export class CreateProductDto {
  @IsString()
  name!: string; //! que se va a recibir algo 

  @IsString()
  @IsOptional()
  description?: string;// : dan el tipo de dato y ? puede ser opcional 
  @IsNumber()
  
  @Type(() => Number)
  
  price!: number;
}
