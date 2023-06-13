import { Inject, Injectable } from '@nestjs/common';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class HistoryService {
  constructor(@Inject('HISTORY_SERVICE') private historyClient: ClientProxy) {}

  create(createHistoryDto: CreateHistoryDto) {
    return this.historyClient.send({ cmd: 'createHistory' }, createHistoryDto);
  }

  findAll() {
    return this.historyClient.send({ cmd: 'findAllHistory' }, {});
  }

  findOne(id: number) {
    return this.historyClient.send({ cmd: 'findOneHistory' }, { id });
  }

  update(id: number, updateHistoryDto: UpdateHistoryDto) {
    return this.historyClient.send(
      { cmd: 'updateHistory' },
      { id, ...updateHistoryDto },
    );
  }

  remove(id: number) {
    return this.historyClient.send({ cmd: 'removeHistory' }, { id });
  }
}
