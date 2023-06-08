import { Module } from '@nestjs/common';
import { ConvertsService } from './converts.service';
import { ConvertsController } from './converts.controller';

@Module({
  controllers: [ConvertsController],
  providers: [ConvertsService]
})
export class ConvertsModule {}
