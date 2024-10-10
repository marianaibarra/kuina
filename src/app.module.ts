import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { OptionsController } from './options/options.controller';
import { roomModule } from './room/room.module';

import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  controllers: [OptionsController],
  // providers: [],
  imports: [roomModule],
  // exports: [  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'r*', method: RequestMethod.ALL });
  }
}
