# SwiftCloud API

The #1 app for Taylor Swifties!

## Description

Flexible API which exposes this data in different shapes and queries to enable an awesome frontend

## Tech Stack
Typescript, NestJS, GraphQL, Prisma, SQLite, Docker

## Installation

```bash
$ yarn install
```

## Configuration

1. Create a `.env` file in the root of the project
```bash
cp .env.example .env
```

2. Migrate the database
```bash
yarn prisma migrate dev
```
3. Seed the database
```bash
yarn seed
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Docker
```bash
docker build -t swiftcloud-api .
docker run -t --name swiftcloud-api --env-file .env -p 3000:3000 swiftcloud-api
```

## Queries examples
Try these queries in the GraphQL playground at http://localhost:3000/graphql
```graphql
# Get a paginated list of songs of 2020 year ordered by most played in June
query songList {
  songList(
    pagination: { first: 10 }
    query: { year: 2020 }
    orderBy: { field: "playsJune", direction: desc }
  ) {
    totalCount
    pageInfo {
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
    edges {
      cursor
      node {
        id
        song
        year
        playsJune
      }
    }
  }
}
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Stay in touch

- Author - [Max Vresch](https://linktr.ee/max.vr)
- Website - [https://vercel.com](https://vercel.com/)

