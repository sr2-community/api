import { Module } from '@nestjs/common';
import { ParkingSpaceService } from './parking-space.service';
import { ParkingSpaceController } from './parking-space.controller';

@Module({
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService]
})
export class ParkingSpaceModule {}
