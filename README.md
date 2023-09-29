# SwiftCloud API

The #1 app for Taylor Swifties!

## Description

Flexible API which exposes this data in different shapes and queries to enable an awesome frontend

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

