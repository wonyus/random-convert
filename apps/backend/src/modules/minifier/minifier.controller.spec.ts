import { Test, TestingModule } from '@nestjs/testing';
import { MinifierController } from './minifier.controller';
import { MinifierService } from './minifier.service';

describe('MinifierController', () => {
  let controller: MinifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MinifierController],
      providers: [MinifierService],
    }).compile();

    controller = module.get<MinifierController>(MinifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
