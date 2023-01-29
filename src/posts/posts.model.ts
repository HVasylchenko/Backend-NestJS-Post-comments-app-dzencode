import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger/dist";
import { Comment } from "src/comments/comments.model";
interface postCreationAttrs {
  "User Name": string;
  "E-mail": string;
  "Home page": string;
  text: string;
}

@Table  ({tableName: "posts"})
// @Table({ tableName: "posts", updatedAt: false })
export class Post_ extends Model<Post_, postCreationAttrs> {
  @ApiProperty({ example: "3", description: "id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "Alex", description: "User Name" })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  "User Name": string;

  @ApiProperty({ example: "test@test.com", description: "E-mail" })
  @Column({ type: DataType.STRING, unique: false, allowNull: false })
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
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  text: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
