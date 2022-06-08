import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParkingFloorService } from './parking-floor.service';
import { CreateParkingFloorDto } from './dto/create-parking-floor.dto';
import { UpdateParkingFloorDto } from './dto/update-parking-floor.dto';

@Controller('parking-floor')
export class ParkingFloorController {
  constructor(private readonly parkingFloorService: ParkingFloorService) {}

  @Post()
  create(@Body() createParkingFloorDto: CreateParkingFloorDto) {
    return this.parkingFloorService.create(createParkingFloorDto);
  }

  @Get()
  findAll() {
    return this.parkingFloorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parkingFloorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParkingFloorDto: UpdateParkingFloorDto) {
    return this.parkingFloorService.update(+id, updateParkingFloorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parkingFloorService.remove(+id);
  }
}
