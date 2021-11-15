import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetListOfPRoductsResponse } from '../interfaces/shop';
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

    // return [
    //   {
    //     name: 'Ziemniaki sałatkowe',
    //     description: 'Nadają się do sałatki',
    //     price: 2.5,
    //     img: './img/products/potato-salat.jpg',
    //   },
    //   {
    //     name: 'Ziemniaki do frytek',
    //     description: 'Nadają się na frytki',
    //     price: 1.5,
    //     img: './img/products/potato-chips.jpg',
    //   },
    //   {
    //     name: 'Ziemniaki do gotowania',
    //     description: 'Nie nadają się na frytki',
    //     price: 2.95 - this.basketService.countPromo(),
    //     img: './img/products/potato-sad.jpg',
    //   },
    //   {
    //     name: 'Ziemniak - mysz',
    //     description: 'Pyszne ziemniaczki z masłem',
    //     price: 1.95,
    //     img: './img/products/potato-mouse.jpg',
    //   },
    // ];
  }

  async hasProduct(name: string): Promise<boolean> {
    return (await this.getProducts()).some((item) => item.name === name);
  }

  async getPriceOfProduct(name: string): Promise<number> {
    return (await this.getProducts()).find((item) => item.name === name).price;
  }
}
