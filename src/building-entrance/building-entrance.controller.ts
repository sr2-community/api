import { Controller, Get, Param } from '@nestjs/common';

import { BuildingEntranceService } from './building-entrance.service';

@Controller('building-entrance')
export class BuildingEntranceController {
  constructor(private readonly buildingEntranceService: BuildingEntranceService) {}

  @Get()
  findAll() {
    return this.buildingEntranceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.buildingEntranceService.findOne(+id);
  }
}
