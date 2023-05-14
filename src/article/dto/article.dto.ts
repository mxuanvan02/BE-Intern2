import { IsString, IsEmpty } from "class-validator";

export class ArticleDto {
  @IsString()
  @IsEmpty()
  title: string

  @IsString()
  descrition: string

  @IsString()
  @IsEmpty()
  author: string

}