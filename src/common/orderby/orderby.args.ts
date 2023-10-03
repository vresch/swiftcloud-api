import { Field, InputType, registerEnumType } from '@nestjs/graphql';

export enum OrderDirection {
  asc = 'asc', // Specifies an ascending order for a given `orderBy` argument.
  desc = 'desc', // Specifies a descending order for a given `orderBy` argument.
}

registerEnumType(OrderDirection, {
  name: 'OrderDirection',
  description:
    'Possible directions in which to order a list of items when provided an `orderBy` argument.',
});

@InputType({ isAbstract: true })
export abstract class OrderByArgs {
  @Field(() => String)
  field: string;

  @Field(() => OrderDirection, { defaultValue: OrderDirection.asc })
  direction: OrderDirection;
}
