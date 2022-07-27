import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CategoryRepo } from "./category.repo";
import { Category } from "./entities/category.entry";
import { CategoryEntity } from "./entities/category.schema";

@Injectable()
export class CategoryService implements CategoryRepo {
    constructor(
        @InjectRepository(CategoryEntity)
        private categoriesRepository: Repository<Category>,
    ) { }

    findAll(): Promise<Category[]> {
        return this.categoriesRepository.find();
    }

    findOne(id: number): Promise<Category> {
        return this.categoriesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.categoriesRepository.delete(id);
    }
}