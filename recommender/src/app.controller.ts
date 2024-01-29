import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':title')
  getRecommendations(@Param('title') title: string) {
    return this.appService.getRecommendations(title);
  }
}
