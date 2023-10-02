import { PaginatedSong, Song } from './song.model';
import { Query, Resolver, Args } from '@nestjs/graphql';
import { SongService } from './song.service';
import { SongListArgs } from './song.args';
import { PaginationArgs } from './common/pagination/pagination.args';

@Resolver(() => Song)
export class SongResolver {
  constructor(private readonly songService: SongService) {}

  @Query(() => PaginatedSong)
  async songList(
    @Args({ name: 'pagination', type: () => PaginationArgs, nullable: true })
    paginationArgs: PaginationArgs,
    @Args({ name: 'query', type: () => SongListArgs, nullable: true })
    songListArgs: SongListArgs,
  ) {
    return this.songService.findSongsPaginated(songListArgs, paginationArgs);
  }
}
