import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PricingsModule } from './pricings/pricings.module';
@Module({
  imports: [PricingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
