import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    default: null,
    nullable: true,
  })
  description: string | null;
  @Column({
    type: 'float',
    precision: 6,
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
}
