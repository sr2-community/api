import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CaskService } from './cask.service';
import { CreateCaskDto } from './dto/create-cask.dto';
import { UpdateCaskDto } from './dto/update-cask.dto';

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
