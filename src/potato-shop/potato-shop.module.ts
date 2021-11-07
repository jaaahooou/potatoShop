import { Module, forwardRef } from '@nestjs/common';
import { PotatoShopController } from './potato-shop.controller';
import { ShopService } from './potato-shop.service';
import { BasketModule } from './../basket/basket.module';

@Module({
  imports: [forwardRef(() => BasketModule)],
  controllers: [PotatoShopController],
  providers: [ShopService],
  exports: [ShopService],
})
export class PotatoShopModule {}
