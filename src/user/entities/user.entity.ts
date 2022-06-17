import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('string', { length: 60, nullable: false })
  firstName: string;

  @Column('string', { length: 60, nullable: true })
  middleName: string;

  @Column('string', { length: 60, nullable: true })
  lastName: string;

  @Column('string', { length: 50, nullable: true })
  nickname: string;

  @Column('date', { nullable: true })
  dateDob?: Date;
}
