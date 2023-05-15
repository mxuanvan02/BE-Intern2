import { Injectable } from '@nestjs/common';
import { CreateArticleDto, UpdateArticleDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  getAllArticle() {
    return this.prisma.article.findMany()
  }

  getArticleById(articleId: number) {
    return this.prisma.article.findUnique({
      where: {
        id: articleId,
      }
    })
  }

  async createArticle(dto: CreateArticleDto) {
    const article = await this.prisma.article.create({
      data: {
        ...dto,
      }
      
    })
    return article
  }

  async updateArticle(dto: UpdateArticleDto, articleId: number) {
    return await this.prisma.article.update({
      where: {
        id: articleId
      },
      data: {
        ...dto
      }
    })
  }

  async deleteArticle(articleId: number) {
    return await this.prisma.article.delete({
      where: {
        id: articleId
      }
    })
  }

}
