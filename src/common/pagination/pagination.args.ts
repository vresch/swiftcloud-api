import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class PaginationArgs {
  @Field({ nullable: true })
  after?: string;

  @Field({ nullable: true })
  before?: string;

  @Field(type => Int, { nullable: true })
  first?: number;

  @Field(type => Int, { nullable: true })
  last?: number;
}
