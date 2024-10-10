import { IsInt, IsString } from 'class-validator';

export class CreateRoomDto {
  @IsString({
    message: `'name': debe ser un texto`,
  })
  name: string;
  @IsString()
  type: string;
  @IsString()
  date: string;
  @IsString()
  number: string;
}
