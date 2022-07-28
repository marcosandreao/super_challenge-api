import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';

import { CategoryEntity } from "../categories/category.entity";

@Entity()
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @Column()
  partNumber: number;

  @ManyToOne(() => CategoryEntity, (category) => category.devices)
  category: CategoryEntity;
}