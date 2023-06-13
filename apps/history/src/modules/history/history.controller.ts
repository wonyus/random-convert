import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { HistoryService } from './history.service';
import { CreateHistoryDto } from './dto/create-history.dto';
import { UpdateHistoryDto } from './dto/update-history.dto';

@Controller()
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @MessagePattern({ cmd: 'createHistory' })
  create(@Payload() createHistoryDto: CreateHistoryDto) {
    return this.historyService.create(createHistoryDto);
  }

  @MessagePattern({ cmd: 'findAllHistory' })
  findAll() {
    return this.historyService.findAll();
  }

  @MessagePattern({ cmd: 'findOneHistory' })
  findOne(@Payload() id: number) {
    return this.historyService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateHistory' })
  update(@Payload() updateHistoryDto: UpdateHistoryDto) {
    return this.historyService.update(updateHistoryDto.id, updateHistoryDto);
  }

  @MessagePattern({ cmd: 'removeHistory' })
  remove(@Payload() id: number) {
    return this.historyService.remove(id);
  }
}
