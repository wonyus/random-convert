import { Module } from '@nestjs/common';

import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UserController } from './users.controller';

@Module({
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
  controllers: [UserController],
})
export class UsersModule {}
