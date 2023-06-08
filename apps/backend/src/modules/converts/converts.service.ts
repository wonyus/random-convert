import { Injectable } from '@nestjs/common';
import convertDistance from 'src/utils/convertMetric';

@Injectable()
export class ConvertsService {
  convertMetric(value: number, unit: string): Record<string, number> {
    const result: Record<string, number> = convertDistance(value, unit);
    return result;
  }
}
