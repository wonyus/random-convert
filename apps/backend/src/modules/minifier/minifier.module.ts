import { Module } from '@nestjs/common';
import { MinifierService } from './minifier.service';
import { MinifierController } from './minifier.controller';
import { minifierProviders } from './minifier.providers';

@Module({
  providers: [MinifierService, ...minifierProviders],
  controllers: [MinifierController],
})
export class MinifierModule {}
