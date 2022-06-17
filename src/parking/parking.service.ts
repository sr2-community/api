import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingService {
  findAll() {
    return 'This action returns all parking';
  }

  findOne(id: number) {
    return `This action returns a #${id} parking`;
  }
}
