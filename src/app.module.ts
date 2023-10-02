import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { SongService } from './song.service';
import { PrismaService } from './prisma.service';
import { join } from 'path';
import { SongResolver } from './song.resolver';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
    }),
  ],
  controllers: [AppController],
  providers: [SongService, PrismaService, SongResolver],
})
export class AppModule {}
