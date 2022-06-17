import { Controller, Get, Param } from '@nestjs/common';

import { ParkingSpaceService } from './parking-space.service';

@Controller('parking-space')
export class ParkingSpaceController {
  constructor(private readonly parkingSpaceService: ParkingSpaceService) {}

  @Get()
  findAll() {
    return this.parkingSpaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingSpaceService.findOne(+id);
  }
}
