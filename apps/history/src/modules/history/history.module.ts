import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { historyProviders } from './history.providers';

@Module({
  controllers: [HistoryController],
  providers: [HistoryService, ...historyProviders],
})
export class HistoryModule {}
