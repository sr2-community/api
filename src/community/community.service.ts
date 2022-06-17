import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunityService {
  findOne(id: number) {
    return `This action returns a #${id} community`;
  }
}
