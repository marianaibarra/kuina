import { Module } from '@nestjs/common';
import { roomController } from './room.controller';
import { roomService } from './room.service';
import { ConfigModule } from './config/config.module';

@Module({
  controllers: [roomController],
  providers: [roomService],
  imports: [ConfigModule],
})
export class roomModule {}
