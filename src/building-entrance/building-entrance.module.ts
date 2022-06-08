import { Module } from '@nestjs/common';
import { BuildingEntranceService } from './building-entrance.service';
import { BuildingEntranceController } from './building-entrance.controller';

@Module({
  controllers: [BuildingEntranceController],
  providers: [BuildingEntranceService]
})
export class BuildingEntranceModule {}
