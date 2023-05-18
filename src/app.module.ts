import { Module } from '@nestjs/common';
import { ImagemModule } from './imagem/imagem.module';


@Module({
 imports: [ImagemModule]
})
export class AppModule {}
