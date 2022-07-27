import { Category } from "../categories/entities/category.entry";

export interface Device {
    id: number
    category: Category
    color: string
    partNumber: number
}