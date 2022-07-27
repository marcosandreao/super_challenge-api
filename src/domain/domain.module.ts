import { Module } from '@nestjs/common';
import { InfraModule } from 'src/infra/infra.module';
import { CreateCategoryUseCase } from './categories/create-category.usecase';

@Module({
    imports: [
        InfraModule,
    ],
    providers: [
        CreateCategoryUseCase,
    ],
    exports: [
        CreateCategoryUseCase,
    ]
})
export class DomainModule { }
