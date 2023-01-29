import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsModule } from './posts/posts.module';
import { ConfigModule } from '@nestjs/config';
import { Post_ } from './posts/posts.model';
import { CommentsModule } from './comments/comments.module';
import { Comment } from './comments/comments.model';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Post_, Comment],
      autoLoadModels: true
    }),
    PostsModule,
    CommentsModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
