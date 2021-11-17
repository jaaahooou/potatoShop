import { ShopItem } from 'src/interfaces/shop';
import {
  BaseEntity,
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PotatoShopItem } from './potato-shop-item.entity';

@Entity()
export class PotatoShopItemDetails extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 15,
  })
  color: string;
  @Column()
  width: number;
  @Column()
  height: number;

  @OneToOne((type) => PotatoShopItem)
  potatoShopItem: PotatoShopItem;
}
