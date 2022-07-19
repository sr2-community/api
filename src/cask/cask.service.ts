import { Injectable } from '@nestjs/common';
import { CreateCaskDto } from './dto/create-cask.dto';
import { UpdateCaskDto } from './dto/update-cask.dto';

@Injectable()
export class CaskService {
  create(createCaskDto: CreateCaskDto) {
    return 'This action adds a new cask';
  }

  findAll() {
    return `This action returns all cask`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cask`;
  }

  update(id: number, updateCaskDto: UpdateCaskDto) {
    return `This action updates a #${id} cask`;
  }

  remove(id: number) {
    return `This action removes a #${id} cask`;
  }
}
