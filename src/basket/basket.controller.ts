import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
} from '@nestjs/common';
import { AddPRoductDto } from './dto/add-product.dto';
import { BasketService } from './basket.service';
import {
  AddPRoductToBasketResponse,
  listProductsInBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';

@Controller('basket')
export class BasketController {
  constructor(@Inject(BasketService) private basketService: BasketService) {}
  @Post('/')
  addProductToBasket(@Body() item: AddPRoductDto): AddPRoductToBasketResponse {
    return this.basketService.add(item);
  }

  @Delete(':index')
  removeProductFromBasket(
    @Param('index') index: string,
  ): RemoveProductFromBasketResponse {
    return this.basketService.remove(Number(index));
  }

  @Get('/')
  listProductsInBasket(): listProductsInBasketResponse {
    return this.basketService.list();
  }
}
