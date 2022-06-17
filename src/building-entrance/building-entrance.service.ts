import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingEntranceService {
  findAll() {
    return 'This action returns all buildingEntrance';
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingEntrance`;
  }
}
