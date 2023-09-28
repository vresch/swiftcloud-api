import { Injectable } from '@nestjs/common';
import { SongStat, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async songStat(
    songStatWhereUniqueInput: Prisma.SongStatWhereUniqueInput,
  ): Promise<SongStat | null> {
    return this.prisma.songStat.findUnique({
      where: songStatWhereUniqueInput,
    });
  }
}
