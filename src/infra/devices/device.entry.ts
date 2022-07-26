import { Category } from "../categories/category.entry";

export interface Device {
    id: number
    category: Category
    color: string
    partNumber: number
}