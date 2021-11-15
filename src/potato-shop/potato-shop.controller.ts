import { Controller, Get, Inject, Scope } from '@nestjs/common';
import { GetListOfPRoductsResponse, ShopItem } from 'src/interfaces/shop';
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
}
