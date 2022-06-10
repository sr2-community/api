import { Injectable } from '@nestjs/common';
import { CreateApartmentLayoutDto } from './dto/create-apartment-layout.dto';
import { UpdateApartmentLayoutDto } from './dto/update-apartment-layout.dto';

@Injectable()
export class ApartmentLayoutService {
  create(createApartmentLayoutDto: CreateApartmentLayoutDto) {
    return 'This action adds a new apartmentLayout';
  }

  findAll() {
    return `This action returns all apartmentLayout`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apartmentLayout`;
  }

  update(id: number, updateApartmentLayoutDto: UpdateApartmentLayoutDto) {
    return `This action updates a #${id} apartmentLayout`;
  }

  remove(id: number) {
    return `This action removes a #${id} apartmentLayout`;
  }
}
