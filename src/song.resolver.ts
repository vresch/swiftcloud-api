import { Song } from './song.model';
import { Query, Resolver, Args } from '@nestjs/graphql';
import { SongService } from './song.service';
import { SongListArgs } from './song.args';

@Resolver(of => Song)
export class SongResolver {
  constructor(private songService: SongService) {}

  @Query(returns => [Song])
  async songList(@Args() songListArgs: SongListArgs) {
    return this.songService.findSongs(songListArgs);
  }
}
