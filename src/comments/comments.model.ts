import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";
import { Post_ } from "src/posts/posts.model";
interface commentCreationAttrs {
  "User Name": string;
  "E-mail": string;
  "Home page": string;
  text: string;
  postId: number;
  file: string;
}

@Table({ tableName: "comments", updatedAt: false })
// @Table ({tableName: "comments"})
export class Comment extends Model<Comment, commentCreationAttrs> {
  @ApiProperty({ example: "3", description: "id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: "Alex", description: "User Name" })
  @Column({ type: DataType.STRING, allowNull: false })
  "User Name": string;

  @ApiProperty({ example: "test@test.com", description: "E-mail" })
  @Column({ type: DataType.STRING, allowNull: false })
  "E-mail": string;

  @ApiProperty({
    example: "https://cv-vasylchenko.web.app/",
    description: "Home page",
  })
  @Column({ type: DataType.STRING, allowNull: true })
  "Home page": string;

  @ApiProperty({
    example: "this field contains your opinion",
    description: "test",
  })
  @Column({ type: DataType.STRING, allowNull: false })
  text: string;

  @ApiProperty({ example: "attached file in .jpg fornmat", description: "file" })
  @Column({ type: DataType.STRING, allowNull: true })
  file: string;

  @ForeignKey(() => Post_)
  @ApiProperty({ example: "specify post's id", description: "postId" })
  @Column({ type: DataType.INTEGER })
  postId: number;

  @BelongsTo(() => Post_)
  post: Post_;
}
