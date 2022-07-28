import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepo } from "./categories/category.repo";
import { CategoryService } from "./categories/category.service";
import { CategoryEntity } from "./categories/category.entity";
import { DeviceEntity } from "./devices/device.entity";
import { DeviceRepo } from "./devices/device.repo";
import { DeviceService } from "./devices/device.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, DeviceEntity])
  ],
  providers: [
    {
      provide: CategoryRepo,
      useClass: CategoryService,
    },
    {
      provide: DeviceRepo,
      useClass: DeviceService,
    },
  ],
  exports: [
    TypeOrmModule,
    CategoryRepo,
    DeviceRepo,
  ],
})
export class InfraModule { }