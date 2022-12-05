import { PartialType } from '@nestjs/swagger';
import { CreateMinifierDto } from './create-minifier.dto';

export class UpdateMinifierDto extends PartialType(CreateMinifierDto) {}
