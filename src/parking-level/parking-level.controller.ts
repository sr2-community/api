import { Controller, Get, Param } from '@nestjs/common';

import { ParkingLevelService } from './parking-level.service';

@Controller('parking-level')
export class ParkingLevelController {
  constructor(private readonly parkingLevelService: ParkingLevelService) {}

  @Get()
  findAll() {
    return this.parkingLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingLevelService.findOne(+id);
  }
}
