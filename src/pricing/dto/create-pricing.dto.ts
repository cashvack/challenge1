import { ApiProperty } from '@nestjs/swagger';
import { CategoryType } from '@prisma/client';
import { IsEnum } from 'class-validator';

export class CreatePricingDto {
  @ApiProperty()
  @IsEnum(CategoryType)
  productCategory: CategoryType;
  @ApiProperty()
  productName: string;
  @ApiProperty()
  weather: string;
  @ApiProperty()
  marketDataFeeds: string;
  @ApiProperty()
  season: string;
  @ApiProperty()
  supply: number;
  @ApiProperty()
  demand: number;
  @ApiProperty()
  perishable: boolean;
  @ApiProperty()
  inventory: number;
}
