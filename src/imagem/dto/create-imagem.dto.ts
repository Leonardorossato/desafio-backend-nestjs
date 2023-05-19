import { ApiProperty } from '@nestjs/swagger';

export class CreateImagemDto {
  @ApiProperty()
  url: string;

  @ApiProperty()
  compressionFactor: number;
}
