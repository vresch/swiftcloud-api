import { Injectable } from '@nestjs/common';
import { SongStat, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async allSongStat(): Promise<SongStat[] | null> {
    return this.prisma.songStat.findMany();
  }

  async findSongs(
    filterParams: Prisma.SongStatWhereInput,
  ): Promise<SongStat[] | null> {
    return this.prisma.songStat.findMany({
      where: filterParams,
    });
  }
}
