import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post_ } from './posts.model';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Comment } from 'src/comments/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([Post_, Comment])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}