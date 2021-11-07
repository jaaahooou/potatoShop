import { Module, forwardRef } from '@nestjs/common';
import { BasketController } from './basket.controller';
import { BasketService } from './basket.service';
import { PotatoShopModule } from './../potato-shop/potato-shop.module';
@Module({
  imports: [forwardRef(() => PotatoShopModule)],
  controllers: [BasketController],
  providers: [BasketService],
  exports: [BasketService],
})
export class BasketModule {}
