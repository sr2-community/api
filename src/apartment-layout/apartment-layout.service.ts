import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentLayoutService {
  findAll() {
    return 'all';
  }

  findOne(id: number) {
    return `This action returns a #${id} apartmentLayout`;
  }
}
