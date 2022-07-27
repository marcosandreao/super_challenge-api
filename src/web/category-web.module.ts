import { Module } from '@nestjs/common';
import { CategoryDomainModule } from 'src/domain/category-domain.module';
import { CreateCategoryController } from './categories/create-category.controller';

@Module({
    imports: [
        CategoryDomainModule,
    ],
    controllers: [
        CreateCategoryController,
    ]
})
export class CategoryWebModule { }
