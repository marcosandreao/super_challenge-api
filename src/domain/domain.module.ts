import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { CreateCategoryUseCase } from './categories/create-category.usecase';
import { ListCategoryUseCase } from './categories/list-category.usecase';
import { CreateDeviceUseCase } from './devices/create-device.usecase';

@Module({
    imports: [
        InfraModule,
    ],
    providers: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
        CreateDeviceUseCase,
    ],
    exports: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
        CreateDeviceUseCase,
    ]
})
export class DomainModule { }
