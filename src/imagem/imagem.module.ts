import { Module } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { ImagemController } from './imagem.controller';

@Module({
  controllers: [ImagemController],
  providers: [ImagemService]
})
export class ImagemModule {}
