import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CategoryRepo } from 'src/infra/categories/category.repo';
import { DeviceEntity } from 'src/infra/devices/device.entity';
import { DeviceRepo } from 'src/infra/devices/device.repo';

@Injectable()
export class CreateDeviceUseCase {

  constructor(@Inject(DeviceRepo) private readonly deviceRepo: DeviceRepo,
    @Inject(CategoryRepo) private readonly categoryRepo: CategoryRepo) { }

  async execute(color: string, partNumber: number, categoryId: number) {
    const cat = await this.categoryRepo.findOne(categoryId);
    if (!cat) {
      throw new HttpException('Category not found', HttpStatus.BAD_REQUEST);
    }

    const device = new DeviceEntity();
    device.category = cat;
    device.color = color;
    device.partNumber = partNumber;
    return await this.deviceRepo.save(device)
  }

}