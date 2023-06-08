import { Test, TestingModule } from '@nestjs/testing';
import { ConvertsService } from './converts.service';

describe('ConvertsService', () => {
  let service: ConvertsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConvertsService],
    }).compile();

    service = module.get<ConvertsService>(ConvertsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
