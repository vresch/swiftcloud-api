import { PaginatedSong, Song } from './song.model';
import { Query, Resolver, Args } from '@nestjs/graphql';
import { SongService } from './song.service';
import { SongListArgs } from './song.args';
import { PaginationArgs } from './common/pagination/pagination.args';
import { OrderByArgs } from './common/orderby/orderby.args';

@Resolver(() => Song)
export class SongResolver {
  constructor(private readonly songService: SongService) {}

  @Query(() => PaginatedSong)
  async songList(
    @Args({ name: 'pagination', type: () => PaginationArgs, nullable: true })
    paginationArgs: PaginationArgs,
    @Args({ name: 'query', type: () => SongListArgs, nullable: true })
    songListArgs: SongListArgs,
    @Args({ name: 'orderBy', type: () => OrderByArgs, nullable: true })
    orderByArgs: OrderByArgs,
  ) {
    return this.songService.findSongsPaginated(
      songListArgs,
      paginationArgs,
      orderByArgs,
    );
  }
}
