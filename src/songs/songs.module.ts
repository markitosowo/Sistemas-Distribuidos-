import { Module } from '@nestjs/common';
import { SongsService } from './songs.service.js';
import { SongsController } from './songs.controller.js';

@Module({
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
