import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Building {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;
}
