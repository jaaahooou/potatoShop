export interface ShopItem {
  id: string;
  name: string;
  description: string;
  price: number;
  img: string;
}

export type GetListOfPRoductsResponse = ShopItem[];

export type GetOneProductResponse = ShopItem;

export type CreateNewProductResponse = ShopItem;

export interface GetPaginatedListOfProductsResponse {
  items: ShopItem[];
  pagesCount: number;
}
