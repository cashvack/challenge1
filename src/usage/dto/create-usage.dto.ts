import { ApiProperty } from '@nestjs/swagger';

export class CreateUsageDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  code: string;
  @ApiProperty()
  MinimumQuantity: number;
}
