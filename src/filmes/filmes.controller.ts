import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';

@Controller('filmes')
export class FilmesController {
  constructor(private filmesService: FilmesService) {}

  @Get()
  async index(): Promise<Filme[]> {
    return this.filmesService.getAll();
  }

  @Post()
  async create(@Body() createFilme: CreateFilmeDto): Promise<Filme> {
    return this.filmesService.createFilme(createFilme);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateFilme: UpdateFilmeDto,
  ): Promise<Filme> {
    return this.filmesService.updateFilme(id, updateFilme);
  }
}
