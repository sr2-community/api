import { Test, TestingModule } from '@nestjs/testing';

import { CaskService } from './cask.service';

describe('CaskService', () => {
  let service: CaskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaskService],
    }).compile();

    service = module.get<CaskService>(CaskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
