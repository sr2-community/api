import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingEntranceDto } from './create-building-entrance.dto';

export class UpdateBuildingEntranceDto extends PartialType(CreateBuildingEntranceDto) {}
