import { PartialType } from '@nestjs/mapped-types';
import { CreateCaskDto } from './create-cask.dto';

export class UpdateCaskDto extends PartialType(CreateCaskDto) {}
