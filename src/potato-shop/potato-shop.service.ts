import { Injectable } from '@nestjs/common';
import { GetListOfPRoductsResponse } from '../interfaces/shop';

@Injectable()
export class ShopService {
  getProducts(): GetListOfPRoductsResponse {
    return [
      {
        name: 'Ziemniaki sałatkowe',
        description: 'Nadają się do sałatki',
        price: 2.5,
        img: './img/products/potato-salat.jpg',
      },
      {
        name: 'Ziemniaki do frytek',
        description: 'Nadają się na frytki',
        price: 1.5,
        img: './img/products/potato-chips.jpg',
      },
      {
        name: 'Ziemniaki do gotowania',
        description: 'Nie nadają się na frytki',
        price: 2.95,
        img: './img/products/potato-sad.jpg',
      },
      {
        name: 'Ziemniak - mysz',
        description: 'Pyszne ziemniaczki z masłem',
        price: 1.95,
        img: './img/products/potato-mouse.jpg',
      },
    ];
  }

  hasProduct(name: string): boolean {
    return this.getProducts().some((item) => item.name === name);
  }

  getPriceOfProduct(name: string): number {
    return this.getProducts().find((item) => item.name === name).price;
  }
}
