import { Inject, Injectable } from '@nestjs/common';
import {
  AddPRoductToBasketResponse,
  listProductsInBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';
import { AddPRoductDto } from './dto/add-product.dto';
import { ShopService } from './../potato-shop/potato-shop.service';

@Injectable()
export class BasketService {
  private items: AddPRoductDto[] = [];

  constructor(@Inject(ShopService) private shopService: ShopService) {}

  add(item: AddPRoductDto): AddPRoductToBasketResponse {
    console.log('add');
    const { count, name } = item;
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

    this.items.push(item);

    console.log(this.items);
    console.log('jestem za pushem');
    return {
      isSuccess: true,
      index: this.items.length - 1,
    };
  }

  remove(index: number): RemoveProductFromBasketResponse {
    const { items } = this;

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
}
