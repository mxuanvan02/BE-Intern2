import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsNotEmpty()
  author: string

}