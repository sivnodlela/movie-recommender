import { Controller, Get, Inject, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy, EventPattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('API_SERVICE') private readonly client: ClientProxy) {}

  @Get(':title')
  getMovie(@Param('title') title: string) {
    return this.appService.movie(title);
  }
}
