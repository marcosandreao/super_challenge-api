import { Module } from '@nestjs/common';
import { CategoryInfraModule } from 'src/infra/category-infra.module';
import { CreateCategoryUseCase } from './categories/create-category.usecase';

@Module({
    imports: [
        CategoryInfraModule,
    ],
    providers: [
        CreateCategoryUseCase,
    ],
    exports: [
        CreateCategoryUseCase,
    ]
})
export class CategoryDomainModule { }
