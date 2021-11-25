import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {
  GetListOfPRoductsResponse,
  GetPaginatedListOfProductsResponse,
  ShopItemInterface,
} from '../interfaces/shop';
import { BasketService } from './../basket/basket.service';
import { GetTotalPriceResponse } from 'src/interfaces/basket';
import { InjectRepository } from '@nestjs/typeorm';
import { PotatoShopItem } from './potato-shop-item.entity';
import { Repository } from 'typeorm';
import { clearConfigCache } from 'prettier';

@Injectable()
export class ShopService {
  constructor(
    @Inject(forwardRef(() => BasketService))
    private basketService: BasketService,
  ) {}

  //aexample of use activeRecord. No need to use repository
  async getProducts(
    currentPage: number = 1,
  ): Promise<GetPaginatedListOfProductsResponse> {
    const maxPerPage = 3;

    const [items, count] = await PotatoShopItem.findAndCount({
      skip: maxPerPage * (currentPage - 1),
      take: maxPerPage,
    });
    console.log({ count });

    const pagesCount = Math.ceil(count / maxPerPage);
    console.log({ count, pagesCount });
    return {
      items,
      pagesCount,
    };
  }

  async hasProduct(name: string): Promise<boolean> {
    return (await this.getProducts()).items.some((item) => item.name === name);
  }

  async getPriceOfProduct(name: string): Promise<number> {
    return (await this.getProducts()).items.find((item) => item.name === name)
      .price;
  }
  // example of use activeRecord. Thanks to BaseEntity
  async getOneProduct(id: string): Promise<ShopItemInterface> {
    return PotatoShopItem.findOneOrFail(id);
  }

  async removeProduct(id: string) {
    await PotatoShopItem.delete(id);
  }

  async createProduct(): Promise<ShopItemInterface> {
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

  async getOneItem(id: string): Promise<PotatoShopItem> {
    return await PotatoShopItem.findOne(id);
  }
}
