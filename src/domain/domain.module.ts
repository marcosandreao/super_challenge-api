import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { CreateCategoryUseCase } from './categories/create-category.usecase';
import { ListCategoryUseCase } from './categories/list-category.usecase';
import { CreateDeviceUseCase } from './devices/create-device.usecase';
import { ListDeviceUseCase } from './devices/list-device.usecase';

@Module({
    imports: [
        InfraModule,
    ],
    providers: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
        CreateDeviceUseCase,
        ListDeviceUseCase,
    ],
    exports: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
        CreateDeviceUseCase,
        ListDeviceUseCase,
    ]
})
export class DomainModule { }
