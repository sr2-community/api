import { Test, TestingModule } from '@nestjs/testing';

import { ParkingLevelController } from './parking-level.controller';
import { ParkingLevelService } from './parking-level.service';

describe('ParkingLevelController', () => {
  let controller: ParkingLevelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingLevelController],
      providers: [ParkingLevelService],
    }).compile();

    controller = module.get<ParkingLevelController>(ParkingLevelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
