import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApartmentLayoutService } from './apartment-layout.service';
import { CreateApartmentLayoutDto } from './dto/create-apartment-layout.dto';
import { UpdateApartmentLayoutDto } from './dto/update-apartment-layout.dto';

@Controller('apartment-layout')
export class ApartmentLayoutController {
  constructor(private readonly apartmentLayoutService: ApartmentLayoutService) {}

  @Post()
  create(@Body() createApartmentLayoutDto: CreateApartmentLayoutDto) {
    return this.apartmentLayoutService.create(createApartmentLayoutDto);
  }

  @Get()
  findAll() {
    return this.apartmentLayoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apartmentLayoutService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApartmentLayoutDto: UpdateApartmentLayoutDto) {
    return this.apartmentLayoutService.update(+id, updateApartmentLayoutDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apartmentLayoutService.remove(+id);
  }
}
