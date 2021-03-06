import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public isProduction() {
    const mode = this.getValue('NODE_ENV', false);
    return mode === 'Production';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.getValue('POSTGRES_HOST'),
      port: Number(this.getValue('POSTGRES_PORT')),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),
      entities: ['src/**/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/migrations/*.js'],
      migrationsRun: true,
      ssl: this.isProduction(),
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    };
  }
}

const configService = new ConfigService(process.env);

export { configService };
