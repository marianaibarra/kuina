import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UseFilters,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  UsePipes,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './interfaces/room.interface';
import { roomService } from './room.service';
import { HttpExceptionFilter } from 'src/common/exception/http-exception.exception.filter';
import { ZodValidationPipe } from 'src/common/validation/pipes/zod.pipe';
import { createRoomSchema } from 'src/common/validation/schemas/room.schema';
import { ValidationPipe } from 'src/common/validation/pipes/validator.pipe';

@Controller('room')
// @UseFilters(HttpExceptionFilter)
export class roomController {
  constructor(private roomservice: roomService) {}

  @Post()
  // @UsePipes(new ZodValidationPipe(createRoomSchema))
  async createRoom(@Body() room: CreateRoomDto) {
    // console.log(room);
    return this.roomservice.create(room);
  }

  @Get()
  async getAllroom(): Promise<Room[]> {
    try {
      // throw new ForbiddenException();
      return await this.roomservice.findAllroom();
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException(error);
    }
  }

  @Get(':id')
  async getOneRoom(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.FORBIDDEN }),
    )
    id: number,
  ): Promise<Room> {
    const room = await this.roomservice.findOneRoom(id);
    if (room) return room;
    throw new NotFoundException();
  }
}
