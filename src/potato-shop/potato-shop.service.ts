import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetListOfPRoductsResponse, ShopItem } from '../interfaces/shop';
import { BasketService } from './../basket/basket.service';
import { GetTotalPriceResponse } from 'src/interfaces/basket';
import { InjectRepository } from '@nestjs/typeorm';
import { PotatoShopItem } from './potato-shop-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => BasketService))
    private basketService: BasketService,

    @InjectRepository(PotatoShopItem)
    private potatoShopItemRepository: Repository<PotatoShopItem>,
  ) {}

  async getProducts(): Promise<GetListOfPRoductsResponse> {
    return await this.potatoShopItemRepository.find();
  }

  async hasProduct(name: string): Promise<boolean> {
    return (await this.getProducts()).some((item) => item.name === name);
  }

  async getPriceOfProduct(name: string): Promise<number> {
    return (await this.getProducts()).find((item) => item.name === name).price;
  }

  async getOneProduct(id: string): Promise<ShopItem> {
    console.log('dupa');
    return await this.potatoShopItemRepository.findOneOrFail(id);
  }
}
