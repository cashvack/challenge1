import { CategoryType } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
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
    season: string;

  @ApiProperty()
    supply: number;

  @ApiProperty()
    demand: number;

  @ApiProperty()
    perishable: boolean;

  @ApiProperty()
    inventory: number;
  
  @ApiProperty()
    location: string;
   
  
  @ApiProperty()
    wholesalePrice: number;
   
  @ApiProperty()
    retailPrice: number;
  }
 
