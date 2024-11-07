import { Test, TestingModule } from '@nestjs/testing';
import { Information2Controller } from './information2.controller';

describe('Information2Controller', () => {
  let controller: Information2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Information2Controller],
    }).compile();

    controller = module.get<Information2Controller>(Information2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
