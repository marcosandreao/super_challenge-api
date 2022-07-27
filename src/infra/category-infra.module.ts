import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepo } from "./categories/category.repo";
import { CategoryService } from "./categories/category.service";
import { CategoryEntity } from "./categories/entities/category.schema";
import { DeviceEntity } from "./devices/device.schema";

@Module({
  imports: [
    TypeOrmModule.forFeature([CategoryEntity, DeviceEntity])
  ],
  exports: [
    TypeOrmModule,
  ],
  providers: [{
    provide: CategoryRepo,
    useClass: CategoryService
  }],
})
export class CategoryInfraModule { }