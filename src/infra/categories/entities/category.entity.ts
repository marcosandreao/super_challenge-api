import { DeviceEntity } from 'src/infra/devices/device.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => DeviceEntity, device => device.category)
  devices: DeviceEntity[];
}
