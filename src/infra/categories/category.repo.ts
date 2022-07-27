import { Category } from "./entities/category.entry";

export interface CategoryRepo {

    findAll(): Promise<Category[]>;

    findOne(id: number): Promise<Category>;

    remove(id: number): Promise<void>;
}

export const CategoryRepo = Symbol("CategoryRepo");