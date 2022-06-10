import { Module } from '@nestjs/common';
import { ApartmentLayoutService } from './apartment-layout.service';
import { ApartmentLayoutController } from './apartment-layout.controller';

@Module({
  controllers: [ApartmentLayoutController],
  providers: [ApartmentLayoutService]
})
export class ApartmentLayoutModule {}
