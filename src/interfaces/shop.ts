export interface ShopItem {
  name: string;
  description: string;
  price: number;
  img: string;
}

export type GetListOfPRoductsResponse = ShopItem[];
