import { Controller, Get, Inject, Param, Scope } from '@nestjs/common';
import {
  GetListOfPRoductsResponse,
  GetOneProductResponse,
  ShopItem,
} from 'src/interfaces/shop';
import { ShopService } from './potato-shop.service';

@Controller({
  path: 'potato-shop',
})
export class PotatoShopController {
  onApplicationBootstrap() {
    console.log('Załadowany');
  }
  constructor(@Inject(ShopService) private shopService: ShopService) {}

  @Get('/')
  getListOfProducts(): Promise<GetListOfPRoductsResponse> {
    return this.shopService.getProducts();
  }

  @Get('/:id')
  getOneProduct(@Param(`id`) id: string): Promise<GetOneProductResponse> {
    console.log('dupa');
    return this.shopService.getOneProduct(id);
  }
}
