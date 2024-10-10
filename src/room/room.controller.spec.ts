import { Test, TestingModule } from '@nestjs/testing';
import { roomController } from './room.controller';

describe('roomController', () => {
  let controller: roomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [roomController],
    }).compile();

    controller = module.get<roomController>(roomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
