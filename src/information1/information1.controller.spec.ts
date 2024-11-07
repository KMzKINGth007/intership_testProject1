import { Test, TestingModule } from '@nestjs/testing';
import { Information1Controller } from './information1.controller';

describe('Information1Controller', () => {
  let controller: Information1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Information1Controller],
    }).compile();

    controller = module.get<Information1Controller>(Information1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
