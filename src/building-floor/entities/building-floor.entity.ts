import { Building } from 'src/building/entities/building.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class BuildingFloor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @ManyToOne(() => Building, building => building.id)
  building: Building;
}
