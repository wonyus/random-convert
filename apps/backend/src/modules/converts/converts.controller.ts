import { Body, Controller, Post } from '@nestjs/common';
import { ConvertsService } from './converts.service';
import { ConvertMetricDto } from './dto/convertMetric.dto';

@Controller('converts')
export class ConvertsController {
  constructor(private readonly convertsService: ConvertsService) {}

  @Post('/metric')
  convertMetric(@Body() body: ConvertMetricDto) {
    return this.convertsService.convertMetric(body.value, body.unit);
  }
}
