import { Inject, Injectable, forwardRef } from '@nestjs/common';
import {
  AddPRoductToBasketResponse,
  GetTotalPriceResponse,
  listProductsInBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';
import { AddPRoductDto } from './dto/add-product.dto';
import { ShopService } from './../potato-shop/potato-shop.service';
import { PotatoShopItem } from './../potato-shop/potato-shop-item.entity';
import { ItemInBasket } from './item-in-basket.entity';

@Injectable()
export class BasketService {
  private items: AddPRoductDto[] = [];

  constructor(
    @Inject(forwardRef(() => ShopService)) private shopService: ShopService,
  ) {}

  async add(product: AddPRoductDto): Promise<AddPRoductToBasketResponse> {
    console.log('add');
    const { count, id } = product;

    const shopItem = await this.shopService.getOneItem(id);

    if (
      typeof id !== 'string' ||
      typeof count !== 'number' ||
      count < 1 ||
      !shopItem
    ) {
      console.log(product);
      return {
        isSuccess: false,
      };
    }
    //future: create data base for basket, update method to update count of products in basket?

    // this.items.push(item);

    // this.shopService.addBoughtCounter(id);

    const item = new ItemInBasket();

    item.count = count;
    console.log(item.count);
    await item.save();
    item.potatoShopItem = shopItem;
    await item.save();
    return {
      isSuccess: true,
      id: item.id,
    };
  }

  remove(index: number): RemoveProductFromBasketResponse {
    const { items } = this;

    console.log(index);
    if (index < 0 || index >= items.length) {
      return {
        isSuccess: false,
      };
    }

    items.splice(index, 1);

    console.log(items);
    return {
      isSuccess: true,
    };
  }

  async list(): Promise<ItemInBasket[]> {
    return ItemInBasket.find({
      relations: ['potatoShopItem'],
    });
  }

  async getTotalPrice(): Promise<GetTotalPriceResponse> {
    const items = await this.list();
    console.log(items);

    return (
      await Promise.all(
        this.items.map(async (item) => item.count * item.count * 1.23),
      )
    ).reduce((prev, curr) => prev + curr, 0);

    console.log(this.items);
  }

  async countPromo(): Promise<number> {
    return (await this.getTotalPrice()) > 10 ? 1 : 0;
  }
}
