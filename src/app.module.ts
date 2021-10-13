import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatoShopController } from './potato-shop/potato-shop.controller';
import { BasketController } from './basket/basket.controller';
import { ShopService } from './shop/shop.service';

@Module({
  imports: [],
  controllers: [AppController, PotatoShopController, BasketController],
  providers: [AppService, ShopService],
})
export class AppModule {}
