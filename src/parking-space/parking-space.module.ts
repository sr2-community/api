import { Module } from '@nestjs/common';

import { ParkingSpaceController } from './parking-space.controller';
import { ParkingSpaceService } from './parking-space.service';

@Module({
  controllers: [ParkingSpaceController],
  providers: [ParkingSpaceService],
})
export class ParkingSpaceModule {}
