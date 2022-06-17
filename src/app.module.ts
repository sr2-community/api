import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ApartmentModule } from './apartment/apartment.module';
import { ApartmentLayoutModule } from './apartment-layout/apartment-layout.module';
import { BuildingModule } from './building/building.module';
import { BuildingEntranceModule } from './building-entrance/building-entrance.module';
import { BuildingFloorModule } from './building-floor/building-floor.module';
import { CommunityModule } from './community/community.module';
import { configService } from './config/config.service';
import { ParkingModule } from './parking/parking.module';
import { ParkingLevelModule } from './parking-level/parking-level.module';
import { ParkingSpaceModule } from './parking-space/parking-space.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    CommunityModule,
    BuildingModule,
    ApartmentModule,
    ParkingModule,
    ParkingLevelModule,
    ParkingSpaceModule,
    BuildingFloorModule,
    BuildingEntranceModule,
    ApartmentLayoutModule,
    UserModule,
    PersonModule,
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
