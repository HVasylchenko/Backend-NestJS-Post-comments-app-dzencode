import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { FilesService } from 'src/files/files.service';
import { Comment } from './comments.model';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentRepositiry: typeof Comment, 
    private fileService: FilesService){

    }
    async createComment (dto: CreateCommentDto, file: any) {
        const fileName = await this.fileService.createFile(file)
        const comment = await this.commentRepositiry.create({...dto, file: fileName});
        return comment;        
    }
    async getAllComments () {
        const comments = await this.commentRepositiry.findAll();
        return comments;  

    }
    
}
