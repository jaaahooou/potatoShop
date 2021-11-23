export interface ShopItemInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
}

export type GetListOfPRoductsResponse = ShopItemInterface[];

export type GetOneProductResponse = ShopItemInterface;

export type CreateNewProductResponse = ShopItemInterface;

export interface GetPaginatedListOfProductsResponse {
  items: ShopItemInterface[];
  pagesCount: number;
}
