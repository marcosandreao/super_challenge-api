import { DeviceEntity } from "./device.entity";

export interface DeviceRepo {

    findAll(): Promise<DeviceEntity[]>;

    findOne(id: number): Promise<DeviceEntity>;

    remove(id: number): Promise<void>;

    save(cat: DeviceEntity): Promise<DeviceEntity>;
}

export const DeviceRepo = Symbol("DeviceEntity");