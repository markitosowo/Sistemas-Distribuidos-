import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { ProductsModule } from './products/products.module.js';
import { SongsModule } from './songs/songs.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'products',
    }),
    ProductsModule,
    SongsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
