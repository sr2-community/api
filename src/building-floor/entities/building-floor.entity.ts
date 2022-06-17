import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Building } from 'src/building/entities/building.entity';

@Entity()
export class BuildingFloor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @ManyToOne(() => Building, building => building.id)
  building: Building;
}
