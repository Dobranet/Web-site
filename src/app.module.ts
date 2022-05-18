import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserService } from './user/user.service';
import { ArticleService } from './article/article.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, ArticleModule],
  controllers: [AppController],
  providers: [AppService, ArticleService, PrismaService,UserService],
})
export class AppModule {}
