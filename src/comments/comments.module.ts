import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Post_ } from 'src/posts/posts.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Post_]), FilesModule],
  
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}