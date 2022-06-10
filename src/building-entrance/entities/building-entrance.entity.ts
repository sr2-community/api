import { Building } from 'src/building/entities/building.entity';
import { Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BuildingEntrance {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  number: string;

  @ManyToOne(() => Building, building => building.id)
  building: Building;
}
