import { Test, TestingModule } from '@nestjs/testing';
import { BuildingFloorService } from './building-floor.service';

describe('BuildingFloorService', () => {
  let service: BuildingFloorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuildingFloorService],
    }).compile();

    service = module.get<BuildingFloorService>(BuildingFloorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
