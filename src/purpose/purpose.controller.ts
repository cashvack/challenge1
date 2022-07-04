import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PurposeService } from './purpose.service';
import { CreatePurposeDto } from './dto/create-purpose.dto';
import { UpdatePurposeDto } from './dto/update-purpose.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('purpose')
@Controller('purpose')
export class PurposeController {
  constructor(private readonly purposeService: PurposeService) {}

  @Post(':productId')
  create(
    @Param('productId') productId: string,
    @Body() createPurposeDto: CreatePurposeDto,
  ) {
    return this.purposeService.create(createPurposeDto, +productId);
  }

  @Get()
  findAll() {
    return this.purposeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purposeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePurposeDto: UpdatePurposeDto) {
    return this.purposeService.update(+id, updatePurposeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purposeService.remove(+id);
  }
}
