import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricingsModule } from './pricings/pricings.module';
import { ProductModule } from './product/product.module';
import { PurposeModule } from './purpose/purpose.module';
import { UsageModule } from './usage/usage.module';

@Module({
  imports: [ProductModule, PurposeModule, UsageModule,PricingsModule],
 controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
