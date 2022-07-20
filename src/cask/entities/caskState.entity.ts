import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Cask } from './cask.entity';

export enum CaskStatus {
  Draft = 'draft',
  Accepted = 'accepted',
  Canceled = 'canceled',
  Resolved = 'resolved',
  Rejected = 'rejected',
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
    enum: CaskStatus,
    default: CaskStatus.Draft,
  })
  status: CaskStatus;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
