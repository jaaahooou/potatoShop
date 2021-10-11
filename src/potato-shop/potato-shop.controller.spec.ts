import { Test, TestingModule } from '@nestjs/testing';
import { PotatoShopController } from './potato-shop.controller';

describe('PotatoShopController', () => {
  let controller: PotatoShopController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PotatoShopController],
    }).compile();

    controller = module.get<PotatoShopController>(PotatoShopController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
