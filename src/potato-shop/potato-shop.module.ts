import { Module } from '@nestjs/common';
import { PotatoShopController } from './potato-shop.controller';
import { ShopService } from './potato-shop.service';

@Module({
  controllers: [PotatoShopController],
  providers: [ShopService],
})
export class PotatoShopModule {}
