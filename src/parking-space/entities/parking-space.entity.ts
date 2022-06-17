import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Parking } from 'src/parking/entities/parking.entity';
import { ParkingLevel } from 'src/parking-level/entities/parking-level.entity';

@Entity()
export class ParkingSpace extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 10 })
  number: string;

  @Column()
  @ManyToOne(() => Parking, parking => parking.id)
  parking: Parking;

  @Column()
  @ManyToOne(() => ParkingLevel, level => level.id)
  level: ParkingLevel;
}
