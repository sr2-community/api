import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Parking } from 'src/parking/entities/parking.entity';

@Entity()
export class ParkingLevel extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int', nullable: false })
  @ManyToOne(() => Parking, parking => parking.id)
  parking: Parking;
}
