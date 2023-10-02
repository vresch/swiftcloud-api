import { SongStat } from './song.model';
import { Query, Resolver, Args } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SongService } from './song.service';

@Resolver(of => SongStat)
export class SongResolver {
  constructor(private songService: SongService) {}

  @Query(returns => [SongStat])
  async getAllSongStat() {
    return this.songService.allSongStat();
  }
}
