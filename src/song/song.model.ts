import { Field, Int, ObjectType } from '@nestjs/graphql';
import Paginated from '../common/pagination/pagination';

@ObjectType()
export class Song {
  @Field(type => Int)
  id: number;

  @Field()
  song: string;

  @Field()
  artist: string;

  @Field()
  writer: string;

  @Field()
  album: string;

  @Field(type => Int)
  year: number;

  @Field(type => Int)
  playsJune: number;

  @Field(type => Int)
  playsJuly: number;

  @Field(type => Int)
  playsAugust: number;
}

@ObjectType()
export class PaginatedSong extends Paginated(Song) {}
