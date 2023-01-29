import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';


export class CreatePostDto {
   
    @ApiProperty({example: "Alex", description: "User Name"})
    @IsString({message: "Must be string"})
    @IsNotEmpty({message: "Must be not empty"})
    readonly 'User Name':string

    @ApiProperty({example: "test@test.com", description: "E-mail"})
    @IsEmail({},{message: "Must be e-mail format"} )
    @IsNotEmpty({message: "Must be not empty"})
    readonly 'E-mail':string

    @ApiProperty({example: "https://cv-vasylchenko.web.app/", description: "Home page"})
    readonly 'Home page':string

    @ApiProperty({example: "this field contains your opinion", description: "text"})
    @IsNotEmpty({message: "Must be not empty"})
    readonly 'text':string
}