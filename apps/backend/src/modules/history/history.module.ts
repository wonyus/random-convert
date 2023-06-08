import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { historyProviders } from './history.providers';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'HISTORY_SERVICE', transport: Transport.TCP },
    ]),
  ],
  controllers: [HistoryController],
  providers: [HistoryService, ...historyProviders],
})
export class HistoryModule {}
