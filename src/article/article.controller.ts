import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Article } from '@prisma/client';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article-dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @ApiOperation({
    summary: 'Get All Articles',
  })
  @Get()
  async getArticles(): Promise<Article[]> {
    return await this.articleService.getArticles();
  }

  @ApiOperation({
    summary: 'Get article by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Get(':id')
  async getArticle(@Param('id') id: number): Promise<Article> {
    return await this.articleService.getArticle(id);
  }

  @ApiOperation({
    summary: 'Get articles created by user using his ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Get('/user/:id')
  async getArticlesByUser(@Param('id') id: number): Promise<Article[]> {
    return await this.articleService.getArticlesByUser(id);
  }

  @ApiOperation({
    summary: 'Create article',
  })
  @ApiResponse({
    status: 201,
    description: 'Article Created',
  })
  @Post('create')
  async createArticle(@Body() articleDto: ArticleDto): Promise<Article> {
    return await this.articleService.createArticle(articleDto);
  }

  @ApiOperation({
    summary: 'Update article by ID',
  })
  @Post(':id/update')
  async updateUser(
    @Param('id') id: number,
    @Body() articleDto: ArticleDto,
  ): Promise<Article> {
    return await this.articleService.updateArticle(id, articleDto);
  }

  @ApiOperation({
    summary: 'Delete article by ID',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid ID format',
  })
  @Delete(':id/delete')
  async deleteArticle(@Param('id') id: number): Promise<void> {
    return await this.articleService.deleteArticle(id);
  }
}
