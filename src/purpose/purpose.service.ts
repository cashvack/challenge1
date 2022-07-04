import { Injectable } from '@nestjs/common';
import { CreatePurposeDto } from './dto/create-purpose.dto';
import { UpdatePurposeDto } from './dto/update-purpose.dto';

@Injectable()
export class PurposeService {
  create(createPurposeDto: CreatePurposeDto) {
    return 'This action adds a new purpose';
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
