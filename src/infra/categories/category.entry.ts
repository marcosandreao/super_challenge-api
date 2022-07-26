import { Device } from "../devices/device.entry";

export interface Category {
    id: number
    name: string
    devices: Array<Device>
}