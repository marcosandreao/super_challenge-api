import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './app/configuration';
import { DBConfigService } from './app/db-config.service'
import { WebModule } from './web/web.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({ imports: [ConfigModule], useClass: DBConfigService }),
    WebModule,
  ],
})
export class AppModule {
  constructor() { }
}
