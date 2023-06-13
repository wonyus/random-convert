import { Injectable } from '@nestjs/common';
import { CreateUserEvent } from './create-user-event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  handleUserCreated(data: CreateUserEvent) {
    console.log('handleUserCreated - EndPoint', data);
    this.users.push({
      email: data.email,
      timestamp: new Date(),
    });
    return { message: 'success' };
  }

  getUserLog() {
    return this.users;
  }
}
