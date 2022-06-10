import { Test, TestingModule } from '@nestjs/testing';

import { BuildingEntranceService } from './building-entrance.service';

describe('BuildingEntranceService', () => {
  let service: BuildingEntranceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingEntranceService],
    }).compile();

    service = module.get<BuildingEntranceService>(BuildingEntranceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
