import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module'; // Fix the import path
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',

    }),
    MongooseModule.forRoot(
      'mongodb+srv://a548492309:8114@cluster0.zdjwrf5.mongodb.net/nestJs-test',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


