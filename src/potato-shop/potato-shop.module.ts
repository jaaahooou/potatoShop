import { Module, forwardRef } from '@nestjs/common';
import { PotatoShopController } from './potato-shop.controller';
import { ShopService } from './potato-shop.service';
import { BasketModule } from './../basket/basket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PotatoShopItem } from './potato-shop-item.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([PotatoShopItem]),
    forwardRef(() => BasketModule),
  ],
  controllers: [PotatoShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class PotatoShopModule {}
