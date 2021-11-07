import { Module } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { PotatoShopModule } from './../potato-shop/potato-shop.module';
@Module({
  imports: [PotatoShopModule],
  controllers: [BasketController],
  providers: [BasketService],
})
export class BasketModule {}
