import { Module } from '@nestjs/common';
import { ParkingFloorService } from './parking-floor.service';
import { ParkingFloorController } from './parking-floor.controller';

@Module({
  controllers: [ParkingFloorController],
  providers: [ParkingFloorService]
})
export class ParkingFloorModule {}
