import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // init
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // init
  }
}
