import { Module } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/domain/categories/create-category.usecase';
import { DomainModule } from 'src/domain/domain.module';
import { CreateCategoryController } from './categories/create-category.controller';
import { ListCategoryController } from './categories/list-category.controller';

@Module({
    imports: [
        DomainModule,
    ],
    controllers: [
        CreateCategoryController,
        ListCategoryController,
    ]
})
export class WebModule { }
