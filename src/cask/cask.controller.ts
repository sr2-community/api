import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateCaskDto } from './dto/create-cask.dto';
import { UpdateCaskDto } from './dto/update-cask.dto';
import { CaskService } from './cask.service';

@Controller('cask')
export class CaskController {
  constructor(private readonly caskService: CaskService) {}

  @Post()
  create(@Body() createCaskDto: CreateCaskDto) {
    return this.caskService.create(createCaskDto);
  }

  @Get()
  findAll() {
    return this.caskService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.caskService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCaskDto: UpdateCaskDto) {
    return this.caskService.update(+id, updateCaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.caskService.remove(+id);
  }
}
