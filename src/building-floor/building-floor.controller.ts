import { Controller, Get, Param } from '@nestjs/common';

import { BuildingFloorService } from './building-floor.service';

@Controller('building-floor')
export class BuildingFloorController {
  constructor(private readonly buildingFloorService: BuildingFloorService) {}

  @Get()
  findAll() {
    return this.buildingFloorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingFloorService.findOne(+id);
  }
}
