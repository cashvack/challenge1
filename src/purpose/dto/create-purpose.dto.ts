import { ApiProperty } from '@nestjs/swagger';

export class CreatePurposeDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  code: string;
}
