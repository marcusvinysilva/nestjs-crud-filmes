import { Injectable } from '@nestjs/common';
import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFilmeDto } from './dto/update-filme.dto';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async updateFilme(id: number, novoFilme: UpdateFilmeDto): Promise<Filme> {
    const filmeUpdate = await this.prisma.filme.update({
      where: { id: Number(id) },
      data: novoFilme,
    });

    return filmeUpdate;
  }
}
