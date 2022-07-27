import { CategoryEntity } from "./entities/category.entity";

export interface CategoryRepo {

    findAll(): Promise<CategoryEntity[]>;

    findOne(id: number): Promise<CategoryEntity>;

    remove(id: number): Promise<void>;

    save(cat: CategoryEntity): Promise<CategoryEntity>;
}

export const CategoryRepo = Symbol("CategoryRepo");