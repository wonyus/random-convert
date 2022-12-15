import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AccessTokenGuard } from 'src/core/guards/accessToken.guard';

@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}

  @UseGuards(AccessTokenGuard)
  @Get()
  async setUser(@Request() req) {
    const userId = req.user['sub'];
    return await this.userService.findOneById(userId);
  }
}
