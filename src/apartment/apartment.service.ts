import { Injectable } from '@nestjs/common';

@Injectable()
export class ApartmentService {
  findAll() {
    return 'This action returns all apartment';
  }

  findOne(id: number) {
    return `This action returns a #${id} apartment`;
  }
}
