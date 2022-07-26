import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class DBConfigService implements TypeOrmOptionsFactory {

    constructor(private configService: ConfigService) { }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: 'mysql',
            username: this.configService.get('database.user'),
            password: this.configService.get('database.password'),
            database: this.configService.get('database.name'),
            host: this.configService.get('database.host'),
            port: this.configService.get('database.port'),
            synchronize: !this.configService.get('is_production'),
            autoLoadEntities: true,
        };
    }
}