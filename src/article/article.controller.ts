import { Controller, Get, Post, Patch, Delete, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto';

@Controller('articles')
export class ArticleController {
  constructor (private articleService: ArticleService) {}
  
  @Get()
  getAlArticle(@Body() dto: ArticleDto) {
    return this.articleService.getAllArticle(dto)
  }

  @Post('create')
  createArticle(@Body() dto: ArticleDto) {
    return this.articleService.createArticle(dto)
  }

  @Patch()
  updateArticle(@Body() dto: ArticleDto) {
    return this.articleService.updateArticle(dto)
  }

  @Delete()
  deleteArticle(@Body() dto: ArticleDto) {
    return this.articleService.deleteArticle(dto)
  }

}
