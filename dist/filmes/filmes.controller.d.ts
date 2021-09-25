import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    index(): Promise<Filme[]>;
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    update(id: number, updateFilme: UpdateFilmeDto): Promise<Filme>;
}
