import { Device } from "src/infra/devices/device.entry";

export interface Category {
    id: number
    name: string
    devices: Array<Device>
}