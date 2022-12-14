import { Injectable, Inject } from '@nestjs/common';

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { USER_REPOSITORY } from '../../core/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { email },
    });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({
      // attributes: ['email', 'gender', 'name'],
      where: { id },
    });
  }

  async update(id: number, data: any): Promise<[number, User[]]> {
    return await this.userRepository.update<User>(
      { ...data },
      {
        returning: true,
        where: { id: id },
      },
    );
  }
}
