import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DeviceEntity } from "./device.entity";
import { DeviceRepo } from "./device.repo";

@Injectable()
export class DeviceService implements DeviceRepo {
    constructor(
        @InjectRepository(DeviceEntity)
        private devicesRepository: Repository<DeviceEntity>,
    ) { }

    findAll(): Promise<DeviceEntity[]> {
        return this.devicesRepository.find();
    }

    findOne(id: number): Promise<DeviceEntity> {
        return this.devicesRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.devicesRepository.delete(id);
    }

    async save(cat: DeviceEntity): Promise<DeviceEntity> {
        return await this.devicesRepository.save(cat);
    }

}