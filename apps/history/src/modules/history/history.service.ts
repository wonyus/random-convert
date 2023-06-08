import { Inject, Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { HISTORY_REPOSITORY, USER_REPOSITORY } from 'src/core/constants';
import { User } from 'src/core/entity/user.entity';
import { History } from './entities/history.entity';

@Injectable()
export class HistoryService {
  constructor(
    @Inject(HISTORY_REPOSITORY)
    private readonly historyRepository: typeof History,
  ) {}

  create(createHistoryDto: CreateHistoryDto) {
    return 'This action adds a new history';
  }

  findAll() {
    return `This action returns all history`;
  }

  findOne(id: number) {
    return `This action returns a #${id} history`;
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return `This action updates a #${id} history`;
  }

  remove(id: number) {
    return `This action removes a #${id} history`;
  }
}
