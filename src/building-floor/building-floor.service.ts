import { Injectable } from '@nestjs/common';
import { CreateBuildingFloorDto } from './dto/create-building-floor.dto';
import { UpdateBuildingFloorDto } from './dto/update-building-floor.dto';

@Injectable()
export class BuildingFloorService {
  create(createBuildingFloorDto: CreateBuildingFloorDto) {
    return 'This action adds a new buildingFloor';
  }

  findAll() {
    return `This action returns all buildingFloor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingFloor`;
  }

  update(id: number, updateBuildingFloorDto: UpdateBuildingFloorDto) {
    return `This action updates a #${id} buildingFloor`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingFloor`;
  }
}
