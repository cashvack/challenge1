import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  description: string;
  @ApiProperty()
  image: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  benefits: string;
  @ApiProperty()
  EcoFriendlyQuotient: number;
  @ApiProperty()
  price: number;
}
