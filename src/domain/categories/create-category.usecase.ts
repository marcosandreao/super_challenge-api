import { Inject, Injectable } from '@nestjs/common';
import { CategoryRepo } from 'src/infra/categories/category.repo';
import { CategoryService } from 'src/infra/categories/category.service';
import { CategoryEntity } from 'src/infra/categories/entities/category.entity';

@Injectable()
export class CreateCategoryUseCase {

  constructor(@Inject(CategoryRepo) private readonly categoryRepo: CategoryRepo) { }

  async execute(name: string) {
    const cat = new CategoryEntity();
    cat.name = name;
    return await this.categoryRepo.save(cat)
  }

}