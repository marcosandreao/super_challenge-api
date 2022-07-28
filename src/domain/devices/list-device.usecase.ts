import { Inject, Injectable } from "@nestjs/common";
import { DeviceRepo } from "src/infra/devices/device.repo";

@Injectable()
export class ListDeviceUseCase {
    constructor(@Inject(DeviceRepo) private readonly deviceRepo: DeviceRepo,) { }

    async execute() {
        return await this.deviceRepo.findAll()
    }
}