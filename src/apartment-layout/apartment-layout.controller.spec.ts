import { Test, TestingModule } from '@nestjs/testing';

import { ApartmentLayoutController } from './apartment-layout.controller';
import { ApartmentLayoutService } from './apartment-layout.service';

describe('ApartmentLayoutController', () => {
  let controller: ApartmentLayoutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApartmentLayoutController],
      providers: [ApartmentLayoutService],
    }).compile();

    controller = module.get<ApartmentLayoutController>(ApartmentLayoutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
