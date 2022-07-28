import { Controller, Post, Body, Get } from '@nestjs/common';
import { IsInt, IsNotEmpty, IsPositive, MaxLength } from 'class-validator';
import { CreateDeviceUseCase } from 'src/domain/devices/create-device.usecase';

class BodyRequest {

    @IsNotEmpty()
    @MaxLength(16)
    color: string;

    @IsNotEmpty()
    @IsPositive()
    categoryId: number;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    partNumber: number;

}

@Controller('devices')
export class CreateDeviceController {

    constructor(private useCase: CreateDeviceUseCase) { }

    @Post()
    async create(@Body() data: BodyRequest) {
        const device = await this.useCase.execute(data.color, data.partNumber, data.categoryId);
        console.log("create", device);
        return {
            'id': device.id,
            'color': device.color,
            'partNumber': device.partNumber,
            'category': {
                'id': device.category.id,
                'name': device.category.name,
            }
        }
    }

}