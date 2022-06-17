import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { ApartmentLayout } from 'src/apartment-layout/entities/apartment-layout.entity';
import { BuildingEntrance } from 'src/building-entrance/entities/building-entrance.entity';
import { BuildingFloor } from 'src/building-floor/entities/building-floor.entity';

@Entity()
export class Apartment extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column({ type: 'int', nullable: false })
  @ManyToOne(() => BuildingFloor, floor => floor.id)
  floor: BuildingFloor;

  @Column({ type: 'int', nullable: false })
  @ManyToOne(() => BuildingEntrance, entrance => entrance.id)
  entrance: BuildingFloor;

  @Column({ type: 'int', nullable: false })
  layout: ApartmentLayout;
}
