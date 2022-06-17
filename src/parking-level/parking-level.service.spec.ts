import { Test, TestingModule } from '@nestjs/testing';

import { ParkingLevelService } from './parking-level.service';

describe('ParkingLevelService', () => {
  let service: ParkingLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParkingLevelService],
    }).compile();

    service = module.get<ParkingLevelService>(ParkingLevelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
