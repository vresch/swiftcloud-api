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
3. Seed the database (`sqlite3` installed required)
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

## CI

The app is built and tested on every push to the main branch using GitHub Actions.

## Deployment

GitHub Actions is used to deploy the app to Heroku.
The app is deployed to https://swiftcloud-api-ad52e9ac6e6f.herokuapp.com/graphql


## Playing around

In local dev try these queries in the `GraphQL playground`: http://localhost:3000/graphql

OR Copy and paste `curl` `POST` req  below in your terminal:
```bash
curl -L -X POST "http://swiftcloud-api-ad52e9ac6e6f.herokuapp.com/graphql" \
-H "x-apollo-operation-name: text/plain" \
-H "Content-Type: application/json" \
-d "{\"query\":\"query songList { \n  songList(\n    pagination: { first: 2 }\n    query: { year: 2020 }\n    orderBy: { field: \\\"playsJune\\\", direction: desc }\n  ) {\n    totalCount\n    pageInfo {\n      startCursor\n      hasNextPage\n      hasPreviousPage\n      endCursor\n    }\n    edges {\n      cursor\n      node {\n        id\n        song\n        year\n        playsJune\n      }\n    }\n  }\n}\",\"variables\":{}}"
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

## Next steps

- [ ] Add more tests: unit, e2e, integration
- [ ] Add more queries: search
- [ ] Add more error handling
- [ ] Add more logging: Sentry
- [ ] Add more validation: Joi, class-validator
- [ ] Add more security: disable grapql playground on prod, helmet, cors, rate limiting
- [ ] Add more CI/CD: test coverage, code quality, code review
- [ ] Add flexible deployment
- [ ] Add more monitoring: New Relic, Datadog
- [ ] Add more metrics: Prometheus
- [ ] Add more caching: Redis
- [ ] Add more performance optimizations: CDN, compression
- [ ] Add more data relationships: plays by month
- [ ] Add more data subscriptions: new songs


## Stay in touch

- Author - [Max Vresch](https://linktr.ee/max.vr)
