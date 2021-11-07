import { AddPRoductDto } from './../basket/dto/add-product.dto';

export type AddPRoductToBasketResponse =
  | {
      isSuccess: true;
      index?: number;
    }
  | {
      isSuccess: false;
    };

export interface RemoveProductFromBasketResponse {
  isSuccess: boolean;
}

export type listProductsInBasketResponse = AddPRoductDto[];
export type GetTotalPriceResponse =
  | number
  | {
      isSuccess: false;
      alternativeBasket: AddPRoductDto[];
    };
