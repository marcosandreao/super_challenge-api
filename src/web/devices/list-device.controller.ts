import { Controller, Get } from '@nestjs/common';
import { ListDeviceUseCase } from 'src/domain/devices/list-device.usecase';

@Controller('devices')
export class ListDeviceController {

    constructor(private useCase: ListDeviceUseCase) { }

    @Get()
    async execute() {
        const result = await this.useCase.execute();
        return result.map(device => {
            return {
                'id': device.id,
                'color': device.color,
                'partNumber': device.partNumber,
                'category': {
                    'id': device.category.id,
                    'name': device.category.name,
                }
            }
        });
    }

}