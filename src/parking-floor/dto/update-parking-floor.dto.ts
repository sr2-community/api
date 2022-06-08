import { PartialType } from '@nestjs/mapped-types';
import { CreateParkingFloorDto } from './create-parking-floor.dto';

export class UpdateParkingFloorDto extends PartialType(CreateParkingFloorDto) {}
