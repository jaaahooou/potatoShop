import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AddPRoductDto } from './dto/add-product.dto';
import { PotatoShopItem } from './../potato-shop/potato-shop-item.entity';

@Entity()
export class ItemInBasket extends BaseEntity implements AddPRoductDto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  count: number;

  @OneToOne((type) => PotatoShopItem, (entity) => entity.itemInBasket)
  @JoinColumn()
  potatoShopItem: PotatoShopItem;
}
