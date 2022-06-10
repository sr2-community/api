import { PartialType } from '@nestjs/mapped-types';
import { CreateApartmentLayoutDto } from './create-apartment-layout.dto';

export class UpdateApartmentLayoutDto extends PartialType(CreateApartmentLayoutDto) {}
