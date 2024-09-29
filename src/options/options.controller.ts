import { Controller, Get } from '@nestjs/common';

@Controller('options')
export class OptionsController {
  @Get()
  getOptions() {
    return {
      isDevelopment: true,
      versionAPI: '1.0.0',
      versionApp: '1.0.0',
    };
  }
}
