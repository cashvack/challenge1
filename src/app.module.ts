import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PurposeModule } from './purpose/purpose.module';
import { UsageModule } from './usage/usage.module';
import { PricingModule } from './pricing/pricing.module';

@Module({
  imports: [ProductModule, PurposeModule, UsageModule, PricingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
