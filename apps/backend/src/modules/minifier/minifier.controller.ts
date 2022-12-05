import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MinifierService } from './minifier.service';
import { CreateMinifierDto } from './dto/create-minifier.dto';
import { UpdateMinifierDto } from './dto/update-minifier.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('minifier')
export class MinifierController {
  constructor(private readonly minifierService: MinifierService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createMinifierDto: CreateMinifierDto) {
    return this.minifierService.create(createMinifierDto);
  }

  @Get()
  findAll() {
    return this.minifierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.minifierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMinifierDto: UpdateMinifierDto) {
    return this.minifierService.update(+id, updateMinifierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.minifierService.remove(+id);
  }
}
