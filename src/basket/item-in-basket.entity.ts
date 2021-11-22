import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddPRoductDto } from './dto/add-product.dto';

@Entity()
export class ItemInBasket extends BaseEntity implements AddPRoductDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column()
  count: number;
}
