import { EntitySchema } from "typeorm"
import { Device } from "./device.entry"

export const DeviceEntity = new EntitySchema<Device>({
    name: 'devices',
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        color: {
            type: String,
            length: 18,
            nullable: false,
        },
        partNumber: {
            type: Number,
            length: 18,
            nullable: false,
        }
    },
    relations: {
        category: {
            type: 'many-to-one',
            target: 'Category',
            joinColumn: {
                name: 'category_id',
            },
            inverseSide: 'devices'
        },
    },
})