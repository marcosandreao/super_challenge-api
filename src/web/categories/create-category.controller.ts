import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/domain/categories/create-category.usecase';

interface BodyRequest {
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

    @Get()
    ping() {
        return 'Hello World!';
    }


}