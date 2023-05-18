import { Injectable } from '@nestjs/common';
import { CreateImagemDto } from './dto/create-imagem.dto';
import { UpdateImagemDto } from './dto/update-imagem.dto';

@Injectable()
export class ImagemService {
  create(createImagemDto: CreateImagemDto) {
    return 'This action adds a new imagem';
  }

  findAll() {
    return `This action returns all imagem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} imagem`;
  }

  update(id: number, updateImagemDto: UpdateImagemDto) {
    return `This action updates a #${id} imagem`;
  }

  remove(id: number) {
    return `This action removes a #${id} imagem`;
  }
}
