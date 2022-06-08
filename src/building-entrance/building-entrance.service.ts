import { Injectable } from '@nestjs/common';
import { CreateBuildingEntranceDto } from './dto/create-building-entrance.dto';
import { UpdateBuildingEntranceDto } from './dto/update-building-entrance.dto';

@Injectable()
export class BuildingEntranceService {
  create(createBuildingEntranceDto: CreateBuildingEntranceDto) {
    return 'This action adds a new buildingEntrance';
  }

  findAll() {
    return `This action returns all buildingEntrance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} buildingEntrance`;
  }

  update(id: number, updateBuildingEntranceDto: UpdateBuildingEntranceDto) {
    return `This action updates a #${id} buildingEntrance`;
  }

  remove(id: number) {
    return `This action removes a #${id} buildingEntrance`;
  }
}
