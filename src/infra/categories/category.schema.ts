import { EntitySchema } from "typeorm"
import { Category } from "./category.entry"

export const CategoryEntity = new EntitySchema<Category>({
    name: 'categories',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
            length: 128,
            nullable: false,
        },
    },
    relations: {
        devices: {
            type: 'one-to-many',
            target: 'Device',
            cascade: false,
            inverseSide: 'category'
        },
    },
});