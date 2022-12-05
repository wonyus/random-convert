import { Injectable } from '@nestjs/common';
import { CreateMinifierDto } from './dto/create-minifier.dto';
import { UpdateMinifierDto } from './dto/update-minifier.dto';

@Injectable()
export class MinifierService {
  create(createMinifierDto: CreateMinifierDto) {
    return 'This action adds a new minifier';
  }

  findAll() {
    return `This action returns all minifier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} minifier`;
  }

  update(id: number, updateMinifierDto: UpdateMinifierDto) {
    return `This action updates a #${id} minifier`;
  }

  remove(id: number) {
    return `This action removes a #${id} minifier`;
  }
}
