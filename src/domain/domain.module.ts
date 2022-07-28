import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { CreateCategoryUseCase } from './categories/create-category.usecase';
import { ListCategoryUseCase } from './categories/list-category.usecase';

@Module({
    imports: [
        InfraModule,
    ],
    providers: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
    ],
    exports: [
        CreateCategoryUseCase,
        ListCategoryUseCase,
    ]
})
export class DomainModule { }
