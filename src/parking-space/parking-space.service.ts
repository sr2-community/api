import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingSpaceService {
  findAll() {
    return 'This action returns all parkingSpace';
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingSpace`;
  }
}
