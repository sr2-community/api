import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BuildingFloorService } from './building-floor.service';
import { CreateBuildingFloorDto } from './dto/create-building-floor.dto';
import { UpdateBuildingFloorDto } from './dto/update-building-floor.dto';

@Controller('building-floor')
export class BuildingFloorController {
  constructor(private readonly buildingFloorService: BuildingFloorService) {}

  @Post()
  create(@Body() createBuildingFloorDto: CreateBuildingFloorDto) {
    return this.buildingFloorService.create(createBuildingFloorDto);
  }

  @Get()
  findAll() {
    return this.buildingFloorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingFloorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBuildingFloorDto: UpdateBuildingFloorDto) {
    return this.buildingFloorService.update(+id, updateBuildingFloorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.buildingFloorService.remove(+id);
  }
}
