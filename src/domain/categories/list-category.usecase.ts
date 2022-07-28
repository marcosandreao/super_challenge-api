import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepo } from 'src/infra/categories/category.repo';

@Injectable()
export class ListCategoryUseCase {

  constructor(@Inject(CategoryRepo) private readonly categoryRepo: CategoryRepo) { }

  async execute() {
    return await this.categoryRepo.findAll()
  }

}