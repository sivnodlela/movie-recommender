import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'RECOMMENDER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://fvudqsab:95-mHjSHs_7_bLFP2UoZeC5Jj7HHaSHp@puffin.rmq2.cloudamqp.com/fvudqsab'],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
