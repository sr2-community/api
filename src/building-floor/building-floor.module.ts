import { Module } from '@nestjs/common';
import { BuildingFloorService } from './building-floor.service';
import { BuildingFloorController } from './building-floor.controller';

@Module({
  controllers: [BuildingFloorController],
  providers: [BuildingFloorService]
})
export class BuildingFloorModule {}
