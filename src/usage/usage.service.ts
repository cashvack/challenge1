import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { CreateUsageDto } from './dto/create-usage.dto';
import { UpdateUsageDto } from './dto/update-usage.dto';

@Injectable()
export class UsageService {
  constructor(private prisma: PrismaService) {}
  async create(usageDto: CreateUsageDto, productId) {
    const result = await this.prisma.usage.create({
      data: {
        name: usageDto.name,
        code: usageDto.code,
        productId: productId,
        MinimumQuantity: usageDto.MinimumQuantity,
      },
    });
    return result;
  }

  findAll() {
    return `This action returns all usage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usage`;
  }

  update(id: number, updateUsageDto: UpdateUsageDto) {
    return `This action updates a #${id} usage`;
  }

  remove(id: number) {
    return `This action removes a #${id} usage`;
  }
}
