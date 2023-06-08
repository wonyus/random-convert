import { Test, TestingModule } from '@nestjs/testing';
import { ConvertsController } from './converts.controller';
import { ConvertsService } from './converts.service';

describe('ConvertsController', () => {
  let controller: ConvertsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvertsController],
      providers: [ConvertsService],
    }).compile();

    controller = module.get<ConvertsController>(ConvertsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
