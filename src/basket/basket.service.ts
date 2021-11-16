import { Inject, Injectable, forwardRef } from '@nestjs/common';
import {
  AddPRoductToBasketResponse,
  GetTotalPriceResponse,
  listProductsInBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';
import { AddPRoductDto } from './dto/add-product.dto';
import { ShopService } from './../potato-shop/potato-shop.service';

@Injectable()
export class BasketService {
  private items: AddPRoductDto[] = [];

  constructor(
    @Inject(forwardRef(() => ShopService)) private shopService: ShopService,
  ) {}

  add(item: AddPRoductDto): AddPRoductToBasketResponse {
    console.log('add');
    const { count, name, id } = item;
    if (
      typeof name !== 'string' ||
      typeof count !== 'number' ||
      name === '' ||
      count < 1 ||
      !this.shopService.hasProduct(name)
    ) {
      console.log({ name, count });
      return {
        isSuccess: false,
      };
    }
    //future: create data base for basket, update method to update count of products in basket?
    this.items.push(item);

    this.shopService.addBoughtCounter(id);

    return {
      isSuccess: true,
      index: this.items.length - 1,
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

  list(): listProductsInBasketResponse {
    return this.items;
  }

  async getTotalPrice(): Promise<GetTotalPriceResponse> {
    if (!this.items.every((item) => this.shopService.hasProduct(item.name))) {
      const alternativeBasket = this.items.filter((item) =>
        this.shopService.hasProduct(item.name),
      );

      return {
        isSuccess: false,
        alternativeBasket,
      };
    }

    return (
      await Promise.all(
        this.items.map(
          async (item) =>
            (await this.shopService.getPriceOfProduct(item.name)) *
            item.count *
            1.23,
        ),
      )
    ).reduce((prev, curr) => prev + curr, 0);
  }

  async countPromo(): Promise<number> {
    return (await this.getTotalPrice()) > 10 ? 1 : 0;
  }
}
