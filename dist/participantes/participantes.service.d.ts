import { Prisma, Participante } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    getAll(): Promise<Participante[]>;
}
