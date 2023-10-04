import { PaginatedSong } from './song.model';
import { PaginationArgs } from './../common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { Song, Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma.service';
import { OrderByArgs } from './../common/orderby/orderby.args';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async findSongs(
    filterParams: Prisma.SongWhereInput,
    orderBy: OrderByArgs,
  ): Promise<Song[] | null> {
    return this.prisma.song.findMany({
      where: filterParams,
      // include: { plays: true },
      orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
    });
  }

  async count(filterParams: Prisma.SongWhereInput): Promise<number> {
    return this.prisma.song.count({
      where: filterParams,
    });
  }

  async findSongsPaginated(
    filterParams: Prisma.SongWhereInput,
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
