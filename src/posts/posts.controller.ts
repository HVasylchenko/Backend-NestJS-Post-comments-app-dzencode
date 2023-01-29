import { Controller, Post, Get, Body, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { CreatePostDto } from 'src/dto/create-post.dto';
// import { ValidationPipe } from 'src/pipes/validation.pipe';
import { Post_ } from './posts.model';
import { PostsService } from './posts.service';

@ApiTags("Posts")
@Controller('posts')
export class PostsController {
    constructor(private postsService: PostsService){}
    @ApiOperation({summary: "Create new post"})
    @ApiResponse({status: 200, type: Post_})
    // @UsePipes(ValidationPipe)
    @Post()
    create(@Body() postDto: CreatePostDto){
        return this.postsService.createPost(postDto)
    }

    @ApiOperation({summary: "Get all posts"})
    @ApiResponse({status: 200, type: [Post_]})
    @Get()
    getAll(){
        return this.postsService.getAllPosts()
    }
}
