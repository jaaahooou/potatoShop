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
  // example of use activeRecord. Thanks to BaseEntity
  async getOneProduct(id: string): Promise<ShopItem> {
    return PotatoShopItem.findOneOrFail(id);
  }

  async removeProduct(id: string) {
    await PotatoShopItem.delete(id);
  }

  async createProduct(): Promise<ShopItem> {
    const newItem = new PotatoShopItem();
    newItem.price = 10;
    newItem.name = 'marchewka';
    newItem.description = 'chrupiąca';

    // example of use activeRecord. Thanks to BaseEntity
    await newItem.save;

    return newItem;
  }

  async addBoughtCounter(id: string) {
    //making an update on database object, looks well to use for basket update
    await PotatoShopItem.update(id, {
      wasEverBought: true,
    });
    const item = await PotatoShopItem.findOneOrFail(id);

    item.boughtCounter++;

    //saving (udateing) an entity
    await item.save();
  }

  async findProducts(searchTerm): Promise<GetListOfPRoductsResponse> {
    return await PotatoShopItem.find({
      name: searchTerm,
    });
  }
}
