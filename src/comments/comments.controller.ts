import { Controller, Post, Body, Get, UploadedFile, UseInterceptors} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { Comment } from './comments.model';
import { CommentsService } from './comments.service';
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags("Comments")
@Controller('comments')
export class CommentsController {
    constructor(private commentsService: CommentsService){}
    
    @ApiOperation({summary: "Create new comment to particular post "})
    @ApiResponse({status: 200, type: Comment})
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    create(@Body() commentDto: CreateCommentDto,
    @UploadedFile() file){
        return this.commentsService.createComment(commentDto, file)
    }

    @ApiOperation({summary: "Get all comments"})
    @ApiResponse({status: 200, type: [Comment]})
    @Get()
    getAllComments(){
        return this.commentsService.getAllComments()
    }
}