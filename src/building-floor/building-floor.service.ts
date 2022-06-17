import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingFloorService {
  findAll() {
    return 'This action returns all buildingFloor';
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingFloor`;
  }
}
