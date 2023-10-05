import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import configuration from './config/configuration';
import { AppController } from './app.controller';
import { SongModule } from './song/song.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: join(process.cwd(), 'graphql/schema.gql'),
    }),
    SongModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
