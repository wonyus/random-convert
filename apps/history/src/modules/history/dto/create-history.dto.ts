import { IsNotEmpty } from 'class-validator';

export class CreateHistoryDto {
  @IsNotEmpty()
  readonly header: string;

  @IsNotEmpty()
  readonly content: string;

  @IsNotEmpty()
  readonly contentType: string;
}
