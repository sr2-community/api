import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentModule } from './apartment/apartment.module';
import { BuildingModule } from './building/building.module';
import { BuildingFloorModule } from './building-floor/building-floor.module';
import { CommunityModule } from './community/community.module';
import { configService } from './config/config.service';
import { EntranceModule } from './entrance/entrance.module';
import { ParkingModule } from './parking/parking.module';
import { ParkingFloorModule } from './parking-floor/parking-floor.module';
import { ParkingSpaceModule } from './parking-space/parking-space.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BuildingEntranceModule } from './building-entrance/building-entrance.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CommunityModule,
    BuildingModule,
    EntranceModule,
    ApartmentModule,
    ParkingModule,
    ParkingFloorModule,
    ParkingSpaceModule,
    BuildingFloorModule,
    BuildingEntranceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
