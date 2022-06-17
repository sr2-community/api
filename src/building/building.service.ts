import { Injectable } from '@nestjs/common';

@Injectable()
export class BuildingService {
  findAll() {
    return 'all';
  }

  findOne(id: number) {
    return `This action returns a #${id} building`;
  }
}
