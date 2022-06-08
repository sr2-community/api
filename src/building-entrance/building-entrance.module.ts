import { Module } from '@nestjs/common';

import { BuildingEntranceController } from './building-entrance.controller';
import { BuildingEntranceService } from './building-entrance.service';

@Module({
  controllers: [BuildingEntranceController],
  providers: [BuildingEntranceService],
})
export class BuildingEntranceModule {}
