import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { PotatoShopModule } from './potato-shop/potato-shop.module';
@Module({
  imports: [BasketModule, PotatoShopModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
