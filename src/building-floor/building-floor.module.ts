import { Module } from '@nestjs/common';

import { BuildingFloorController } from './building-floor.controller';
import { BuildingFloorService } from './building-floor.service';

@Module({
  controllers: [BuildingFloorController],
  providers: [BuildingFloorService],
})
export class BuildingFloorModule {}
