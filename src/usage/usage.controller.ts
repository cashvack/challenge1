import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsageService } from './usage.service';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('usage')
@Controller('usage')
export class UsageController {
  constructor(private readonly usageService: UsageService) {}

  @Post(':productId')
  create(
    @Param('productId') productId: string,
    @Body() createUsageDto: CreateUsageDto,
  ) {
    return this.usageService.create(createUsageDto, +productId);
  }

  @Get()
  findAll() {
    return this.usageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsageDto: UpdateUsageDto) {
    return this.usageService.update(+id, updateUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usageService.remove(+id);
  }
}
