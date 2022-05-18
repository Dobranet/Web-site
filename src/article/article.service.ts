import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Article, PrismaClient } from '@prisma/client';
import { ArticleDto } from './dto/article-dto';

const prisma = new PrismaClient();

@Injectable()
export class ArticleService {
  async getArticles(): Promise<Article[]> {
    const articles = await prisma.article.findMany();
    return articles;
  }

  async getArticle(id: number): Promise<Article> {
    if (!+id)
      throw new HttpException('Article ID Provided is not a number!', 400);
    const article = await prisma.article.findUnique({
      where: {
        id: +id, // +id is a hack to convert id from string to number
      },
    });
    if (article) {
      return article;
    }
    throw new NotFoundException("Article doesn't exist!");
  }

  async getArticlesByUser(id: number): Promise<Article[]> {
    if (!+id)
      throw new HttpException('Author ID Provided is not a number!', 400);

    const user = await prisma.user.findUnique({
      where: {
        id: +id,
      },
    });
    if (!user) throw new NotFoundException("User doesn't exist!");

    const articles = await prisma.article.findMany({
      where: {
        authorId: +id,
      },
    });
    return articles;
  }

  async createArticle(articleDto: ArticleDto): Promise<Article> {
    const { title, content, authorId } = articleDto;
    if (!+authorId)
      throw new HttpException('Author ID Provided is not a number!', 400);
    const article = await prisma.article.create({
      data: {
        title: title,
        content: content,
        authorId: +authorId,
      },
    });

    return article;
  }

  async updateArticle(id: number, articleDto: ArticleDto): Promise<Article> {
    const { title, content, authorId } = articleDto;
    const article = await prisma.article.update({
      where: {
        id: +id,
      },
      data: {
        title: title,
        content: content,
        authorId: +authorId,
      },
    });
    return article;
  }

  async deleteArticle(id: number): Promise<void> {
    const article = await this.getArticle(id);
    if (article) {
      await prisma.article.delete({ where: { id: +id } });
    }
  }
}
