import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import { Model } from 'mongoose';
import * as sharp from 'sharp';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { Imagem } from './entities/imagem.entity';

@Injectable()
export class ImagemService {
  constructor(
    @InjectModel(Imagem.name) private readonly imagemModel: Model<Imagem>,
  ) {}

  async processarImagem(dto: CreateImagemDto): Promise<any> {
    try {
      if (dto.url == '' && dto.url == null) {
        throw new HttpException(
          'Erro parametro url invalid',
          HttpStatus.BAD_REQUEST,
        );
      }
      const imagemBuffer = await this.downloadImage(dto.url);
      const orginalImagePath = await this.saveImage(
        imagemBuffer,
        'original.jpg',
      );
      const data = await this.extractExifMetadata(imagemBuffer);

      const { width, height } = await sharp(imagemBuffer).metadata();
      const resizeImagePath =
        width >= 720
          ? await this.resizeImage(
              imagemBuffer,
              'resized_thumb.jpg',
              720,
              height,
            )
          : orginalImagePath;

      await this.saveMetadata(data, orginalImagePath);
      return {
        localpath: {
          original: orginalImagePath,
          thumbnail: resizeImagePath,
        },
        metadata: data,
      };
    } catch (error) {
      return {
        error: {
          code: 404,
          message: 'Não foi possível salvar esta imagem',
        },
      };
    }
  }

  //Metodos privados ques estão sendo utilizados no principal
  private async downloadImage(url: string): Promise<Buffer> {
    try {
      const res = await axios.get(url, { responseType: 'arraybuffer' });
      return Buffer.from(res.data, 'binary');
    } catch (error) {
      throw new HttpException(
        'Erro ao baixar a imagem.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  private async resizeImage(
    imageBuffer: Buffer,
    fileName: string,
    maxWidth: number,
    maxHeight: number,
  ): Promise<string> {
    try {
      const filePath = `uploads/${fileName}`;
      await sharp(imageBuffer)
        .resize({ fit: 'inside', width: maxWidth, height: maxHeight })
        .toFile(filePath);
      return filePath;
    } catch (error) {
      throw new HttpException('Erro co caminho da url', HttpStatus.BAD_REQUEST);
    }
  }

  private async saveImage(
    imageBuffer: Buffer,
    fileName: string,
  ): Promise<string> {
    const uploadFolder = 'uploads';
    const filePath = `${uploadFolder}/${fileName}`;
    await sharp(imageBuffer).toFile(filePath);
    return filePath;
  }

  private async extractExifMetadata(imageBuffer: Buffer): Promise<any> {
    const metadata = await sharp(imageBuffer).metadata();
    return metadata.exif || {};
  }

  private async saveMetadata(metadata: any, imagePath: string): Promise<void> {
    const exifMetadata = new this.imagemModel(metadata);
    exifMetadata.imagePath = imagePath;
    await exifMetadata.save();
  }
}
