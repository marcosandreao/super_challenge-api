import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './app/configuration';
import { DBConfigService } from './infra/db-config.service'

@Module({
  imports: [
    ConfigModule.forRoot({ load: [configuration], }),
    TypeOrmModule.forRootAsync({ useClass: DBConfigService }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { 
  constructor() {}
}
