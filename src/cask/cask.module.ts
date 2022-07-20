import { Module } from '@nestjs/common';

import { CaskController } from './cask.controller';
import { CaskService } from './cask.service';

@Module({
  controllers: [CaskController],
  providers: [CaskService],
})
export class CaskModule {}
