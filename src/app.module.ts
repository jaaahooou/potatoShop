import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PotatoShopController } from './potato-shop/potato-shop.controller';

@Module({
  imports: [],
  controllers: [AppController, PotatoShopController],
  providers: [AppService],
})
export class AppModule {}
