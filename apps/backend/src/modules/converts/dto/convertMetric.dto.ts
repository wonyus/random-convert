import { IsNotEmpty, MinLength } from 'class-validator';

export class ConvertMetricDto {
  @IsNotEmpty()
  readonly value: number;

  @IsNotEmpty()
  readonly unit: string;
}
