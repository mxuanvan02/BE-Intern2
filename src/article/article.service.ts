import { Injectable } from '@nestjs/common';
import { ArticleDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor (private prisma: PrismaService) {}

  async getAllArticle(dto: ArticleDto) {
    const articles = await this.prisma.article.findMany()
    return articles
  }

  async getArticleById(dto: ArticleDto) {}

  async createArticle(dto: ArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        ...dto,
      }
    })
    return article
  }

  async updateArticle(dto: ArticleDto) {}

  async deleteArticle(dto: ArticleDto) {}

}
