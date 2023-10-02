import { PaginatedSong } from './song.model';
import { PaginationArgs } from './common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
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
    args: any, // todo: fix any
  ): Promise<SongStat[] | null> {
    return this.prisma.songStat.findMany({
      where: filterParams,
      // include: { plays: true },
      // orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
      ...args,
    });
  }

  async count(filterParams: Prisma.SongStatWhereInput): Promise<number> {
    return this.prisma.songStat.count({
      where: filterParams,
    });
  }

  async findSongsPaginated(
    filterParams: Prisma.SongStatWhereInput,
    paginationArgs: PaginationArgs,
  ): Promise<PaginatedSong> {
    return findManyCursorConnection(
      () => this.findSongs(filterParams, orderBy),
      () => this.count(filterParams),
      paginationArgs,
    );
  }
}
