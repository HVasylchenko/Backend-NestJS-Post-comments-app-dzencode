import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePostDto } from 'src/dto/create-post.dto';
import { Post_ } from './posts.model';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post_) private postRepositiry: typeof Post_){

    }
    async createPost (dto: CreatePostDto) {
        const post = await this.postRepositiry.create(dto);
        return post;        
    }
    async getAllPosts () {
        const posts = await this.postRepositiry.findAll();
        return posts;  

    }
}

// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/sequelize';
// import { User } from './users.model';

// @Injectable()
// export class UsersService {
//   constructor(
//     @InjectModel(User)
//     private userModel: typeof User,
//   ) {}

//   async findAll(): Promise<User[]> {
//     return this.userModel.findAll();
//   }

//   findOne(id: string): Promise<User> {
//     return this.userModel.findOne({
//       where: {
//         id,
//       },
//     });
//   }

//   async remove(id: string): Promise<void> {
//     const user = await this.findOne(id);
//     await user.destroy();
//   }
// }
