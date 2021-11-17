import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { PotatoShopItemDetails } from './potato-shop-item-details.entity';

@Entity()
//extends BaseEntity for use ActiveRecord
export class PotatoShopItem extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 60,
  })
  name: string;
  @Column({
    length: 10000,
    default: 'product',
    nullable: true,
  })
  description: string | null;
  @Column({
    type: 'float',
    precision: 7,
    scale: 2,
  })
  price: number;
  @Column({
    default: null,
  })
  img: string;

  @Column({
    default: () => `CURRENT_TIMESTAMP`,
  })
  createdAt: Date;

  @Column({
    default: 0,
  })
  boughtCounter: number;

  @Column({
    default: false,
  })
  wasEverBought: boolean;
  @OneToOne((type) => PotatoShopItemDetails)
  @JoinColumn()
  details: PotatoShopItemDetails;
}
