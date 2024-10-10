import { Injectable } from '@nestjs/common';
import { Room } from './interfaces/room.interface';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable({})
export class roomService {
  private readonly room: Room[] = [
    {
      id: 1,
      name: 'SM Entertainment',
      type: 'assembly',
      date: '28 sept.',
      number: 'COT-0001',
    },
    {
      id: 2,
      name: 'JYP',
      type: 'assembly',
      date: '28 sept.',
      number: 'COT-0002',
    },
  ];

  async create(data: CreateRoomDto) {
    return { id: 1, ...data };
  }

  async findAllroom(): Promise<Room[]> {
    return this.room;
  }

  async findOneRoom(id: number) {
    return this.room.find((x) => x.id === id);
  }
}
