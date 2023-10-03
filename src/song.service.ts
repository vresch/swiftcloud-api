import { PaginatedSong } from './song.model';
import { PaginationArgs } from './common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { SongStat, Prisma } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { OrderByArgs } from './common/orderby/orderby.args';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async allSongStat(): Promise<SongStat[] | null> {
    return this.prisma.songStat.findMany();
  }

  async findSongs(
    filterParams: Prisma.SongStatWhereInput,
    orderBy: OrderByArgs,
  ): Promise<SongStat[] | null> {
    return this.prisma.songStat.findMany({
      where: filterParams,
      // include: { plays: true },
      orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
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
    orderBy?: OrderByArgs,
  ): Promise<PaginatedSong> {
    return findManyCursorConnection(
      () => this.findSongs(filterParams, orderBy),
      () => this.count(filterParams),
      paginationArgs,
    );
  }
}
