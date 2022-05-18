import { Get, Controller, Render, UseInterceptors,
  Param, Post, Body, Put, Delete, } from '@nestjs/common';
import { AppService } from './app.service';
import { AppInterceptor } from './app.interceptor';


@Controller()
@UseInterceptors(new AppInterceptor())
export class AppController {

  @Get(['/','index.hbs'])
  @Render('index')
  getIndexLogin(){
    return { isLogged: true };
  }
  @Get('dishes.hbs')
  @Render('dishes')
  getDishes(){
    return;
  }
  @Get('parseLaceholder.hbs')
  @Render('parseLaceholder')
  getParseLaceholder(){
    return;
  }
  @Get('reviews.hbs')
  @Render('reviews')
  getReviews(){
    return;
  }
}