import { Injectable } from '@nestjs/common';

@Injectable()
export class ParkingLevelService {
  findAll() {
    return 'This action returns all parkingLevel';
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingLevel`;
  }
}
