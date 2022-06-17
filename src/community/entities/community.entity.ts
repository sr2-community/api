import { BaseEntity, Column } from 'typeorm';

export class Community extends BaseEntity {
  @Column()
  options: string;
}
