import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

import { CategoryEntity } from "../categories/entities/category.entity";

@Entity()
export class DeviceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color: string;

  @Column()
  partNumber: string;

  @ManyToOne(type => CategoryEntity)
  category: CategoryEntity;
}