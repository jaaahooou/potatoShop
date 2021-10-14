import { Injectable } from '@nestjs/common';
import {
  AddPRoductToBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';
import { AddPRoductDto } from './dto/add-product.dto';

@Injectable()
export class BasketService {
  private items: AddPRoductDto[] = [];

  add(item: AddPRoductDto): AddPRoductToBasketResponse {
    const { count, name } = item;
    if (
      typeof name !== 'string' ||
      typeof count !== 'number' ||
      name === '' ||
      count < 1
    ) {
      return {
        isSuccess: false,
      };
    }

    this.items.push(item);

    console.log(this.items);

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
}
