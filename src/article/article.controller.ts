import { Controller, Get, Post, Patch, Delete, Body, ParseIntPipe, Param, HttpCode, HttpStatus } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto, UpdateArticleDto } from './dto';

@Controller('articles')
export class ArticleController {
  constructor (private articleService: ArticleService) {}
  
  @Get()
  getAllArticle() {
    return this.articleService.getAllArticle()
  }

  @Get(':id')
  getArticleById(@Param('id', ParseIntPipe) articleId: number) {
    return this.articleService.getArticleById(articleId)
  }

  @Post('create')
  createArticle(@Body() dto: CreateArticleDto) {
    return this.articleService.createArticle(dto)
  }

  @Patch(':id')
  updateArticle(@Body() dto: UpdateArticleDto, @Param('id', ParseIntPipe) articleId: number) {
    return this.articleService.updateArticle(dto, articleId)
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteArticle(@Param('id', ParseIntPipe) articleId: number) {
    return this.articleService.deleteArticle(articleId)
  }

}
