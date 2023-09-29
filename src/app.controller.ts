import { Controller, Get, Param } from '@nestjs/common';
import { SongService } from './song.service';
import { SongStat as SongStatModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly songService: SongService) {}

  @Get()
  getAllSongStat(): Promise<SongStatModel[]> {
    return this.songService.allSongStat();
  }

  @Get(':id')
  getSongStat(@Param('id') id: string): Promise<SongStatModel> {
    return this.songService.songStat({ id: Number(id) });
  }
}
