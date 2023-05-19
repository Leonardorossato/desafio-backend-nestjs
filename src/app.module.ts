import { Module } from '@nestjs/common';
import { ImagemModule } from './imagem/imagem.module';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConnection } from './config/mongo.config';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRootAsync(mongoConnection),
    ImagemModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
