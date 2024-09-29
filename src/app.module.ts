import { Module } from '@nestjs/common';
import { OptionsController } from './options/options.controller';

import { RoomsModule } from './rooms/rooms.module';

@Module({
  controllers: [OptionsController],
  // providers: [],
  imports: [RoomsModule],
  // exports: [  ]
})
export class AppModule {}
