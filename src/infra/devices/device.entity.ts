import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { CategoryEntity } from "../categories/category.entity";

@Entity()
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @Column()
  partNumber: number;

  @ManyToOne(type => CategoryEntity)
  category: CategoryEntity;
}