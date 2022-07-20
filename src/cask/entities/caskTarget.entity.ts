import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Cask } from './cask.entity';

export enum ObjectEntityType {
  Building = 'building',
  BuildingFloor = 'buildingFloor',
  Apartament = 'apartament',
  BuildingEntrance = 'buildingEntrance',
}

@Entity()
export class CaskState extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  @ManyToOne(() => Cask, cask => cask.id)
  cask: Cask;

  @Column({
    type: 'enum',
    enum: ObjectEntityType,
    nullable: true,
  })
  targetType: ObjectEntityType;

  @Column({ nullable: true })
  targetId: number;
}
