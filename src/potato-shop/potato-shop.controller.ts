import {
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Scope,
} from '@nestjs/common';
import {
  CreateNewProductResponse,
  GetListOfPRoductsResponse,
  GetPaginatedListOfProductsResponse,
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

  @Get('/:pageNumber')
  getListOfProducts(
    @Param('pageNumber') pageNumber: string,
  ): Promise<GetPaginatedListOfProductsResponse> {
    return this.shopService.getProducts(Number(pageNumber));
  }

  @Get(`/find/:searchTerm`)
  findItem(
    @Param('searchTerm') searchTerm: string,
  ): Promise<GetListOfPRoductsResponse> {
    return this.shopService.findProducts(searchTerm);
  }

  @Get('/:id')
  getOneProduct(@Param(`id`) id: string): Promise<GetOneProductResponse> {
    console.log('dupa');
    return this.shopService.getOneProduct(id);
  }

  @Delete(`/:id`)
  removeProduct(@Param(`id`) id: string) {
    this.shopService.removeProduct(id);
  }

  @Post(`/`)
  createNewProduct(): Promise<CreateNewProductResponse> {
    return this.shopService.createProduct();
  }
}
