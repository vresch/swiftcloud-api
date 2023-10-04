import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class SongListArgs {
  @Field(type => Int, { nullable: true })
  id?: number;

  @Field({ nullable: true })
  song?: string;

  @Field({ nullable: true })
  artist?: string;

  @Field({ nullable: true })
  writer?: string;

  @Field({ nullable: true })
  album?: string;

  @Field(type => Int, { nullable: true })
  year?: number;

  @Field(type => Int, { nullable: true })
  playsJune?: number;

  @Field(type => Int, { nullable: true })
  playsJuly?: number;

  @Field(type => Int, { nullable: true })
  playsAugust?: number;
}
