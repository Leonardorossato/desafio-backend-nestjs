import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImagemService } from './imagem.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateImagemDto } from './dto/create-imagem.dto';
@Controller('imagem')
@ApiTags('Upload Imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('imagem'))
  async processImage(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateImagemDto,
  ) {
    return await this.imagemService.processarImagem(dto);
  }
}
