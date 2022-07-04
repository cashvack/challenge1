import { Module } from '@nestjs/common';
import { PurposeService } from './purpose.service';
import { PurposeController } from './purpose.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PurposeController],
  providers: [PurposeService, PrismaService],
})
export class PurposeModule {}
