import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ListCategoryUseCase } from 'src/domain/categories/list-category.usecase';

@ApiTags('categories')
@Controller('categories')
export class ListCategoryController {

    constructor(private useCase: ListCategoryUseCase) { }

    @Get()
    async list() {
        const result = await this.useCase.execute();
        return result.map(cat => {
            return {
                'id': cat.id,
                'name': cat.name
            }
        });
    }

}