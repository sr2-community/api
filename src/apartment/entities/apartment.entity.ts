import { ApartmentLayout } from 'src/apartment-layout/entities/apartment-layout.entity';
import { BuildingEntrance } from 'src/building-entrance/entities/building-entrance.entity';
import { BuildingFloor } from 'src/building-floor/entities/building-floor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Apartment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @ManyToOne(() => BuildingFloor, floor => floor.id)
  floor: BuildingFloor;

  @ManyToOne(() => BuildingEntrance, entrance => entrance.id)
  entrance: BuildingFloor;

  @Column()
  layout: ApartmentLayout;
}
