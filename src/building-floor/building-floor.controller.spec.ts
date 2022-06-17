import { Test, TestingModule } from '@nestjs/testing';

import { BuildingFloorController } from './building-floor.controller';
import { BuildingFloorService } from './building-floor.service';

describe('BuildingFloorController', () => {
  let controller: BuildingFloorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingFloorController],
      providers: [BuildingFloorService],
    }).compile();

    controller = module.get<BuildingFloorController>(BuildingFloorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
