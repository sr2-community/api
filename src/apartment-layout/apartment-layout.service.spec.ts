import { Test, TestingModule } from '@nestjs/testing';

import { ApartmentLayoutService } from './apartment-layout.service';

describe('ApartmentLayoutService', () => {
  let service: ApartmentLayoutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApartmentLayoutService],
    }).compile();

    service = module.get<ApartmentLayoutService>(ApartmentLayoutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
