import { Controller, Get, Param } from '@nestjs/common';

import { ApartmentLayoutService } from './apartment-layout.service';

@Controller('apartment-layout')
export class ApartmentLayoutController {
  constructor(private readonly apartmentLayoutService: ApartmentLayoutService) {}

  @Get()
  findAll() {
    return this.apartmentLayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentLayoutService.findOne(+id);
  }
}
