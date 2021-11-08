import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { PotatoShopModule } from './potato-shop/potato-shop.module';
@Module({
  imports: [TypeOrmModule.forRoot(), BasketModule, PotatoShopModule],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
