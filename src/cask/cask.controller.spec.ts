import { Test, TestingModule } from '@nestjs/testing';

import { CaskController } from './cask.controller';
import { CaskService } from './cask.service';

describe('CaskController', () => {
  let controller: CaskController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaskController],
      providers: [CaskService],
    }).compile();

    controller = module.get<CaskController>(CaskController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
