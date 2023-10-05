import { PaginatedSong } from './song.model';
import {
  findManyCursorConnection,
  ConnectionArguments,
} from '@devoxa/prisma-relay-cursor-connection';
import { Injectable } from '@nestjs/common';
import { Song, Prisma } from '@prisma/client';
import { PrismaService } from '../common/prisma.service';
import { OrderByArgs } from './../common/orderby/orderby.args';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) {}

  async findSongs(
    args: any,
    filterParams: Prisma.SongWhereInput,
    orderBy: OrderByArgs,
  ): Promise<Song[] | null> {
    args.cursor ? (args.cursor.id = Number(args.cursor.id)) : null; // todo: [db] workaround for schema ID: Int, sqlite supports only Int
    return this.prisma.song.findMany({
      ...args,
      where: filterParams,
      // include: { plays: true }, // todo: [db] relate
      orderBy: orderBy ? { [orderBy.field]: orderBy.direction } : undefined,
    });
  }

  async count(filterParams: Prisma.SongWhereInput): Promise<number> {
    return this.prisma.song.count({
      where: filterParams,
    });
  }

  async findSongsPaginated(
    paginationArgs: ConnectionArguments,
    filterParams: Prisma.SongWhereInput,
    orderBy?: OrderByArgs,
  ): Promise<PaginatedSong> {
    return findManyCursorConnection(
      args => this.findSongs(args, filterParams, orderBy),
      () => this.count(filterParams),
      paginationArgs,
    );
  }
}
