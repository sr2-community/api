import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApartmentLayout {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
