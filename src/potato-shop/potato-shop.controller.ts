import { Controller, Get, Inject } from '@nestjs/common';
import { GetListOfPRoductsResponse, ShopItem } from 'src/interfaces/shop';
import { ShopService } from './potato-shop.service';

@Controller('potato-shop')
export class PotatoShopController {
  constructor(@Inject(ShopService) private shopService: ShopService) {}

  @Get('/')
  getListOfProducts(): GetListOfPRoductsResponse {
    return this.shopService.getProducts();
  }
}
