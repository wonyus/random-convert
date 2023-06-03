import { Controller, UseGuards, Get, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AccessTokenGuard } from 'src/core/guards/accessToken.guard';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async setUser(@Request() req) {
    const userId = req.user['sub'];
    return userId
  }
}
