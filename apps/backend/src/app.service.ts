import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './create-user-event';
import { CreateUserRequest } from './create-user-request.dto';

@Injectable()
export class AppService {
  private readonly users: any[] = [];
  constructor(@Inject('HISTORY_SERVICE') private client: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    return this.client.emit(
      'user_created',
      new CreateUserEvent(createUserRequest.email),
    );
  }

  getUserlog() {
    return this.client.send({ cmd: 'get_userlog' }, {});
  }
}
