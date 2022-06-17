import { BaseEntity, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

import { Building } from 'src/building/entities/building.entity';

@Entity()
export class BuildingEntrance extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  number: string;

  @ManyToOne(() => Building, building => building.id)
  building: Building;
}
