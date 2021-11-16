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

  //aexample of use activeRecord. No need to use repository
  async getProducts(): Promise<GetListOfPRoductsResponse> {
    return await PotatoShopItem.find();
  }

  async hasProduct(name: string): Promise<boolean> {
    return (await this.getProducts()).some((item) => item.name === name);
  }

  async getPriceOfProduct(name: string): Promise<number> {
    return (await this.getProducts()).find((item) => item.name === name).price;
  }

  async getOneProduct(id: string): Promise<ShopItem> {
    return await this.potatoShopItemRepository.findOneOrFail(id);
  }

  async removeProduct(id: string) {
    await this.potatoShopItemRepository.delete(id);
  }

  async createProduct(): Promise<ShopItem> {
    const newItem = new PotatoShopItem();
    newItem.price = 10;
    newItem.name = 'marchewka';
    newItem.description = 'chrupiąca';

    // example of use activeRecord.
    await newItem.save;

    return newItem;
  }

  async addBoughtCounter(id: string) {
    //making an update on database object, looks well to use for basket update
    await this.potatoShopItemRepository.update(id, {
      wasEverBought: true,
    });
    const item = await this.potatoShopItemRepository.findOneOrFail(id);

    item.boughtCounter++;
    await this.potatoShopItemRepository.save(item);
  }
}
