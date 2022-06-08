import { Injectable } from '@nestjs/common';
import { CreateParkingFloorDto } from './dto/create-parking-floor.dto';
import { UpdateParkingFloorDto } from './dto/update-parking-floor.dto';

@Injectable()
export class ParkingFloorService {
  create(createParkingFloorDto: CreateParkingFloorDto) {
    return 'This action adds a new parkingFloor';
  }

  findAll() {
    return `This action returns all parkingFloor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parkingFloor`;
  }

  update(id: number, updateParkingFloorDto: UpdateParkingFloorDto) {
    return `This action updates a #${id} parkingFloor`;
  }

  remove(id: number) {
    return `This action removes a #${id} parkingFloor`;
  }
}
