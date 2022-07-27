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
        this.useCase.create(category.name);
    }

    @Get()
    ping() {
        return 'Hello World!';
    }


}