import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from 'src/product/dto/create-product.dto';
import { CreatePurposeDto } from './dto/create-purpose.dto';
import { UpdatePurposeDto } from './dto/update-purpose.dto';

@Injectable()
export class PurposeService {
  constructor(private prisma: PrismaService) {}

  async create(purposeDto: CreatePurposeDto, productId) {
    const result = await this.prisma.purpose.create({
      data: {
        name: purposeDto.name,
        code: purposeDto.code,
        productId: productId,
      },
    });
    return result;
  }

  findAll() {
    return `This action returns all purpose`;
  }

  findOne(id: number) {
    return `This action returns a #${id} purpose`;
  }

  update(id: number, updatePurposeDto: UpdatePurposeDto) {
    return `This action updates a #${id} purpose`;
  }

  remove(id: number) {
    return `This action removes a #${id} purpose`;
  }
}
