import { Module } from '@nestjs/common';
import { DomainModule } from 'src/domain/domain.module';
import { CreateCategoryController } from './categories/create-category.controller';
import { ListCategoryController } from './categories/list-category.controller';
import { CreateDeviceController } from './devices/create-device.controller';
import { ListDeviceController } from './devices/list-device.controller';

@Module({
    imports: [
        DomainModule,
    ],
    controllers: [
        CreateCategoryController,
        ListCategoryController,
        CreateDeviceController,
        ListDeviceController,
    ]
})
export class WebModule { }
