import { Filme, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateFilmeDto } from './dto/update-filme.dto';
export declare class FilmesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Filme[]>;
    createFilme(data: Prisma.FilmeCreateInput): Promise<Filme>;
    updateFilme(id: number, novoFilme: UpdateFilmeDto): Promise<Filme>;
}
