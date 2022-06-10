import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateBuildingEntranceDto } from './dto/create-building-entrance.dto';
import { UpdateBuildingEntranceDto } from './dto/update-building-entrance.dto';
import { BuildingEntranceService } from './building-entrance.service';

@Controller('building-entrance')
export class BuildingEntranceController {
  constructor(private readonly buildingEntranceService: BuildingEntranceService) {}

  @Post()
  create(@Body() createBuildingEntranceDto: CreateBuildingEntranceDto) {
    return this.buildingEntranceService.create(createBuildingEntranceDto);
  }

  @Get()
  findAll() {
    return this.buildingEntranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingEntranceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingEntranceDto: UpdateBuildingEntranceDto) {
    return this.buildingEntranceService.update(+id, updateBuildingEntranceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingEntranceService.remove(+id);
  }
}
