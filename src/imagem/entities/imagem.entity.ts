import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type imagemDocument = HydratedDocument<Imagem>;

@Schema()
export class Imagem {
  @Prop()
  make: string;

  @Prop()
  model: string;

  @Prop()
  imagePath: string;
}

export const imagemSchema = SchemaFactory.createForClass(Imagem);
