import { Module } from '@nestjs/common';
import { CaskService } from './cask.service';
import { CaskController } from './cask.controller';

@Module({
  controllers: [CaskController],
  providers: [CaskService]
})
export class CaskModule {}
