import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import sharp from 'sharp';
@Controller('imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  @Post('/updalod')
  async uploadImagem(@UploadedFile() file: Express.Multer.File) {
    try {
      const thumbnail = file.filename.replace(
        extname(file.filename),
        '_thumb.jpg',
      );
      await sharp(file.path).resize(720, 720).toFile(`./uploads/${thumbnail}`);
      return { message: true };
    } catch (error) {
      throw new HttpException(
        'Erro ao fazer o upload dessa imagem',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
