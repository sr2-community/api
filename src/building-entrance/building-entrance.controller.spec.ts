import { Test, TestingModule } from '@nestjs/testing';
import { BuildingEntranceController } from './building-entrance.controller';
import { BuildingEntranceService } from './building-entrance.service';

describe('BuildingEntranceController', () => {
  let controller: BuildingEntranceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuildingEntranceController],
      providers: [BuildingEntranceService],
    }).compile();

    controller = module.get<BuildingEntranceController>(BuildingEntranceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
