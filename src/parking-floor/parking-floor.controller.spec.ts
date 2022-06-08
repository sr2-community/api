import { Test, TestingModule } from '@nestjs/testing';
import { ParkingFloorController } from './parking-floor.controller';
import { ParkingFloorService } from './parking-floor.service';

describe('ParkingFloorController', () => {
  let controller: ParkingFloorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParkingFloorController],
      providers: [ParkingFloorService],
    }).compile();

    controller = module.get<ParkingFloorController>(ParkingFloorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
