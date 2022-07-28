import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsPositive, MaxLength } from 'class-validator';
import { CreateDeviceUseCase } from 'src/domain/devices/create-device.usecase';

class BodyRequest {

    @ApiProperty()
    @IsNotEmpty()
    @MaxLength(16)
    color: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsPositive()
    categoryId: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    partNumber: number;

}

@ApiTags('devices')
@Controller('devices')
export class CreateDeviceController {

    constructor(private useCase: CreateDeviceUseCase) { }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 400, description: 'Validations errors or category not found.'})
    async create(@Body() data: BodyRequest) {
        const device = await this.useCase.execute(data.color, data.partNumber, data.categoryId);
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