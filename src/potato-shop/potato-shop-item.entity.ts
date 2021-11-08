import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PotatoShopItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  img: string;
}
