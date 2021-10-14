import { Injectable } from '@nestjs/common';
import { AddPRoductToBasketResponse } from 'src/interfaces/basket';
import { AddPRoductDto } from './dto/add-product.dto';

@Injectable()
export class BasketService {
  private items: AddPRoductDto[] = [];

  add(item: AddPRoductDto): AddPRoductToBasketResponse {
    this.items.push(item);

    console.log(this.items);

    return {
      isSuccess: true,
      index: this.items.length - 1,
    };
  }
}
