import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryRepo } from "./category.repo";
import { CategoryEntity } from "./entities/category.entity";

@Injectable()
export class CategoryService implements CategoryRepo {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoriesRepository: Repository<CategoryEntity>,
    ) { }

    findAll(): Promise<CategoryEntity[]> {
        return this.categoriesRepository.find();
    }

    findOne(id: number): Promise<CategoryEntity> {
        return this.categoriesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.categoriesRepository.delete(id);
    }

    async save(cat: CategoryEntity): Promise<CategoryEntity> {
        return await this.categoriesRepository.save(cat);
    }

}