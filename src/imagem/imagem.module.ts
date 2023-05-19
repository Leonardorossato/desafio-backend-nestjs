import { Module } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { ImagemController } from './imagem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Imagem, imagemSchema } from './entities/imagem.entity';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Imagem.name, schema: imagemSchema }]),
    MulterModule.register({
      dest: 'uploads/',
    }),
  ],
  controllers: [ImagemController],
  providers: [ImagemService],
})
export class ImagemModule {}
