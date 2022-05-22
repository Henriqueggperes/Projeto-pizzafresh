import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { UpdateLibDto } from './dto/update.lib.dto';
import { Lib } from './entities/lib.entitie';

@Injectable()
export class LibService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Lib[]> {
    return this.prisma.lib.findMany();
  }

  findOne(id: string): Promise<Lib> {
    return this.prisma.lib.findUnique({ where: { id } });
  }

  create(createLibDto: CreateLibDto): Promise<Lib> {
    const Lib: Lib = { ...createLibDto };

    return this.prisma.lib.create({
      data: Lib,
    });
  }
  update(id: string, updateLibDto: UpdateLibDto): Promise<Lib> {
    const data: Partial<Lib> = { ...updateLibDto };

    return this.prisma.lib.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.lib.delete({
      where: {
        id,
      },
    });
  }
}
