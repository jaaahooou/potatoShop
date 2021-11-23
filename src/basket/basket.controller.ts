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
  GetTotalPriceResponse,
  listProductsInBasketResponse,
  RemoveProductFromBasketResponse,
} from 'src/interfaces/basket';

@Controller('basket')
export class BasketController {
  constructor(@Inject(BasketService) private basketService: BasketService) {}
  @Post('/')
  async addProductToBasket(
    @Body() item: AddPRoductDto,
  ): Promise<AddPRoductToBasketResponse> {
    return await this.basketService.add(item);
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

  @Get('/total-price')
  getTotalPrice(): Promise<GetTotalPriceResponse> {
    return this.basketService.getTotalPrice();
  }
}
