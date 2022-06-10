import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentModule } from './apartment/apartment.module';
import { BuildingModule } from './building/building.module';
import { BuildingEntranceModule } from './building-entrance/building-entrance.module';
import { BuildingFloorModule } from './building-floor/building-floor.module';
import { CommunityModule } from './community/community.module';
import { configService } from './config/config.service';
import { ParkingModule } from './parking/parking.module';
import { ParkingFloorModule } from './parking-floor/parking-floor.module';
import { ParkingSpaceModule } from './parking-space/parking-space.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApartmentLayoutModule } from './apartment-layout/apartment-layout.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CommunityModule,
    BuildingModule,
    ApartmentModule,
    ParkingModule,
    ParkingFloorModule,
    ParkingSpaceModule,
    BuildingFloorModule,
    BuildingEntranceModule,
    ApartmentLayoutModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
