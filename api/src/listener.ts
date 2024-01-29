import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://fvudqsab:95-mHjSHs_7_bLFP2UoZeC5Jj7HHaSHp@puffin.rmq2.cloudamqp.com/fvudqsab'],
      queue: 'main_queue',
      queueOptions: {
        durable: false
      },
    },
  })

  app.listen().then(() => {
    console.log("API service started")
  }).catch((e: any) => {
    console.log("API failed to start: ",e.message)
  })
}
bootstrap();
