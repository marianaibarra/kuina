import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './interfaces/room.interface';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private roomService: RoomsService) {}

  @Post()
  async createRoom(@Body() room: CreateRoomDto) {
    return this.roomService.create(room);
  }

  @Get()
  async getAllRooms(): Promise<Room[]> {
    return this.roomService.findAllRooms();
  }
}
