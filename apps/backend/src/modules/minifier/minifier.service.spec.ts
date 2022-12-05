import { Test, TestingModule } from '@nestjs/testing';
import { MinifierService } from './minifier.service';

describe('MinifierService', () => {
  let service: MinifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MinifierService],
    }).compile();

    service = module.get<MinifierService>(MinifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
