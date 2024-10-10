import { Test, TestingModule } from '@nestjs/testing';
import { roomService } from './room.service';

describe('roomService', () => {
  let service: roomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [roomService],
    }).compile();

    service = module.get<roomService>(roomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
