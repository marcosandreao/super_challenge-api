import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { CreateCategoryUseCase } from 'src/domain/categories/create-category.usecase';

class BodyRequest {

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(128)
    name: string;
}

@ApiTags('categories')
@Controller('categories')
export class CreateCategoryController {

    constructor(private useCase: CreateCategoryUseCase) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Validations errors.'})
    async create(@Body() category: BodyRequest) {
        const cat = await this.useCase.execute(category.name);
        return {
            'id': cat.id,
            'name': cat.name
        }
    }

}