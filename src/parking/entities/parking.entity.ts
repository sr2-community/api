import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Building } from 'src/building/entities/building.entity';

@Entity()
export class Parking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false, length: 50 })
  name: string;

  @Column({ type: 'int', nullable: false })
  @ManyToOne(() => Building, building => building.id)
  building: Building;
}
