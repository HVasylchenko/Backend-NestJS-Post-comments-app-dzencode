import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
   
    @ApiProperty({example: "Alex", description: "User Name"})
    @IsString({message: "Must be string"})
    @IsNotEmpty({message: "Must be not empty"})
    readonly 'User Name':string

    @ApiProperty({example: "test@test.com", description: "E-mail"})
    @IsEmail({},{message: "Must be e-mail format"} )
    // @IsNotEmpty({message: "Must be not empty"})
    readonly 'E-mail':string

    @ApiProperty({example: "https://cv-vasylchenko.web.app/", description: "Home page"})
    readonly 'Home page':string

    @ApiProperty({example: "this field contains your opinion", description: "text"})
    readonly 'text':string

    @ApiProperty({example: "this field contains the post's id with you want to discuss his topic", description: "postId"})
    @IsNotEmpty({message: "Must be not empty"})
    readonly 'postId':number
}