import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto.js';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
//caracteristicas de el producto es string y es opcional
   @IsString()
   @IsOptional()
   @IsUUID()
   id? : string;
}

