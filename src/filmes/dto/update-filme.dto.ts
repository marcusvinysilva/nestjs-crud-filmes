import { IsOptional } from 'class-validator';

export class UpdateFilmeDto {
  @IsOptional()
  nome: string;

  @IsOptional()
  imagem: string;
}
