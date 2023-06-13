import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserEvent } from './create-user-event';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('user_created')
  hadleUserCreate(data: CreateUserEvent) {
    this.appService.handleUserCreated(data);
  }

  @MessagePattern({ cmd: 'get_userlog' })
  getUserLog() {
    return this.appService.getUserLog();
  }
}
