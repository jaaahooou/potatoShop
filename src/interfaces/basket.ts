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
