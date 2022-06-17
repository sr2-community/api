import { Module } from '@nestjs/common';

import { ParkingLevelController } from './parking-level.controller';
import { ParkingLevelService } from './parking-level.service';

@Module({
  controllers: [ParkingLevelController],
  providers: [ParkingLevelService],
})
export class ParkingLevelModule {}
