import { BuildingEntrance } from 'src/building-entrance/entities/building-entrance.entity';
import { BuildingFloor } from 'src/building-floor/entities/building-floor.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

enum Layout {
  layout1A = '1A',
  layout1B = '1B',
  layout2A = '2A',
  layout2B = '2B',
  layout3A = '2B',
}

type LayoutType = keyof typeof Layout;

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
  baseLayout: LayoutType;
}
