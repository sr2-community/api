import { PartialType } from '@nestjs/mapped-types';
import { CreateBuildingFloorDto } from './create-building-floor.dto';

export class UpdateBuildingFloorDto extends PartialType(CreateBuildingFloorDto) {}
