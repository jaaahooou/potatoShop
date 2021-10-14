import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AddPRoductDto } from './dto/add-product.dto';
import { BasketService } from './basket.service';
import { AddPRoductToBasketResponse } from 'src/interfaces/basket';

@Controller('basket')
export class BasketController {
  constructor(@Inject(BasketService) private basketService: BasketService) {}
  @Post('/')
  addProductToBasket(@Body() item: AddPRoductDto): AddPRoductToBasketResponse {
    return this.basketService.add(item);
  }
}
