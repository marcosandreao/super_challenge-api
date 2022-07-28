import { Controller, Post, Body, Get } from '@nestjs/common';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateCategoryUseCase } from 'src/domain/categories/create-category.usecase';

class BodyRequest {
    @IsNotEmpty()
    @MaxLength(128)
    name: string;
}

@Controller('categories')
export class CreateCategoryController {

    constructor(private useCase: CreateCategoryUseCase) { }

    @Post()
    async create(@Body() category: BodyRequest) {
        const cat = await this.useCase.execute(category.name);
        return {
            'id': cat.id,
            'name': cat.name
        }
    }

}